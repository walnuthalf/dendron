import React from 'react';
import gql from "graphql-tag"
import { Query } from 'react-apollo';
import { to_time } from "../util"
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

const query = gql`
{
  channels {
    id
    name
    lastMessage {
      text
      insertedAt
      user {
        name
      }
    }
  }
}
`;


const subscription = gql`
subscription Channel {
  channel {
   id
   name
   lastMessage {
     text
     insertedAt
     user {
       name
     }
   }
  }
}
`;
const compact_text = (text) => {
  return text.length <= 40 ? text : text.substring(0, 40) + "..."
}
const LastMessageInfo = ({ channel }) => (
  <div>
    <Row>
      {channel.lastMessage.user.name}: {compact_text(channel.lastMessage.text)}
    </Row>
    <Row>
      {to_time(channel.lastMessage.insertedAt)}
    </Row>
  </div>
)

const ChannelItem = ({ channel, changeChannelId, selectedChannelId }) => (
  <ListGroup.Item
    onClick={() => changeChannelId(channel.id)}
    style={selectedChannelId === channel.id ? { backgroundColor: "#ADD8E6" } : { cursor: "pointer" }} >
    <Row><b> {channel.name}</b></Row>
    {channel.lastMessage ? <LastMessageInfo channel={channel} /> : <div></div>}
  </ListGroup.Item>)


const ChannelListView = class extends React.PureComponent {
  componentDidMount() {
    this.props.subscribeToMore();
  }
  render() {
    const { data, changeChannelId, selectedChannelId } = this.props;
    return <ListGroup>
      {data.channels.map((channel, i) => <ChannelItem key={i} channel={channel} changeChannelId={changeChannelId} selectedChannelId={selectedChannelId} />)}
    </ListGroup>
  }
};

const ChannelList = ({ changeChannelId, selectedChannelId }) => (<Query query={query}>
  {({ loading, error, data, subscribeToMore }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const more = () => subscribeToMore({
      document: subscription,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newChannel = subscriptionData.data.channel;
        const channelsWithoutNew = prev.channels.filter(
          channel => { return channel.id !== newChannel.id })
        return Object.assign({}, prev, { channels: [newChannel, ...channelsWithoutNew] });
      },
    });
    return <ChannelListView data={data} subscribeToMore={more} changeChannelId={changeChannelId} selectedChannelId={selectedChannelId} />;

  }}
</Query>)

export default ChannelList;
