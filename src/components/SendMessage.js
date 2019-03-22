import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
// import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

const SEND_MESSAGE_MUTATION = gql`
  mutation SendTextMessage($text: String!, $channelId: String!) {
    sendTextMessage(text: $text, channelId: $channelId){
        insertedAt
    } 
  }
`

class SendMessage extends Component {
    state = {
        text: '',
    }

    handleKeyPress = (event, mutation) => {
        if (event.key === 'Enter') {
            mutation()
        }
    }

    reset_text = () => {
        this.setState({ text: '' })
    }

    render() {
        const { channelId } = this.props
        const { text } = this.state
        return (
            <Mutation mutation={SEND_MESSAGE_MUTATION}
                variables={{ text, channelId }}
                onCompleted={_data => this.reset_text()}
            >
                {mutation => (<Form.Control
                    onKeyPress={event => this.handleKeyPress(event, mutation)}
                    onChange={e => this.setState({ text: e.target.value })}
                    value={text}
                    placeholder="Type your message"
                    aria-describedby="basic-addon1"
                />
                )}
            </Mutation>
        )
    }
}

export default SendMessage
