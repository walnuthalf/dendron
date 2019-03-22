import { to_time } from "../util"
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';
import SendMessage from "./SendMessage"
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button"

const MessageItem = ({ message }) => (
    <ListGroup.Item style={{ wordBreak: "break-word" }}>
        {to_time(message.insertedAt)} {message.user.name}: {message.text}
    </ListGroup.Item>);

const MessageListView = class extends React.PureComponent {
    state = {
        autoscroll: true,
    }

    componentDidMount() {
        this.props.subscribeToMore();
        this.scrollToBottom();
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidUpdate() {
        if(this.state.autoscroll){
            this.scrollToBottom();
            
        }
    }

    onLoadHistory() {
        this.props.fetchMore()
    }
    isBottom() {
        return this.messagesEnd.getBoundingClientRect().bottom <= window.innerHeight;
    }
    flipAutoscroll() {
        this.setState({ autoscroll: !this.state.autoscroll })
    }
    render() {
        const { data, channelId } = this.props;
        return (<div >
            <Row style={{ minHeight: "80vh", height: "80vh", overflow: "scroll", borderBottom: "10px" }}>
                {data.channelPage.next_cursor && <Button onClick={this.onLoadHistory.bind(this)}>Load message history</Button>}
                <ListGroup>
                    {data.channelPage.messages.map((message, i) => <MessageItem key={i} message={message} />)}
                </ListGroup>
                <div ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </Row>
            <Row style={{ minHeight: "10vh", height: "10vh" }}>
                <SendMessage channelId={channelId} />
                <Button onClick={this.flipAutoscroll.bind(this)}>
                    {'Autoscroll' + (this.state.autoscroll ? " on" : " off")}
                </Button>
            </Row>
        </div>
        );
    }
};

export default MessageListView;