import React, { Component } from 'react';
import client from "../wsClient"
import ChannelList from "./ChannelList"
import MessageList from "./MessageList"
import { ApolloProvider } from "react-apollo"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelId: null,
    }
  }

  changeChannelId(channelId) {
    this.setState({
      channelId: channelId
    })
  }

  render() {
    const channelId = this.state.channelId;
    return (<ApolloProvider client={client}>
      <Row>
        <Col xs={4} >
          <Row style={{ minHeight: "90vh", height: "90vh", overflow: "scroll" }}>
            <ChannelList changeChannelId={this.changeChannelId.bind(this)} selectedChannelId={channelId} />
          </Row>
        </Col>
        <Col xs={8}  >
          {channelId != null ? <MessageList channelId={channelId} /> : <div>Select a channel</div>}
        </Col>
      </Row>
    </ApolloProvider>);
  }
}

export default Chat;
