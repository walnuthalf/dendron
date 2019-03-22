import React from 'react';
import gql from "graphql-tag"
import { Query } from 'react-apollo';
import MessageListView from "./MessageListView";

const query = gql`
query ChannelPage($channelId: String!){
    channelPage(channelId: $channelId){
      id
      messages {
        id
        text
        insertedAt
        channelId
        __typename
        user{
          name
        }
      }
      nextCursor
      __typename
    }
}
`;
const history_query = gql`
query HistoryChannelPage($channelId: String!, $cursor: String!){
    channelPage(channelId: $channelId, cursor: $cursor){
      id
      messages {
        id
        text
        insertedAt
        channelId
        __typename
        user{
          name
        }
      }
      nextCursor
      __typename
    }
}
`;

const subscription = gql`
subscription Message($channelId: String!) {
  message(channelId: $channelId){
    id
    text
    insertedAt
    channelId
    __typename
    user{
      name
    }
  }
}
`;



const MessageList = ({ channelId }) => (
    <Query query={query} variables={{ channelId: channelId }}>
        {({ loading, error, data, subscribeToMore, fetchMore }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;

            const onLoadMore = () =>
                fetchMore({
                    // note this is a different query than the one used in the
                    // Query component
                    query: history_query,
                    variables: { channelId: channelId, cursor: data.channelPage.next_cursor },
                    updateQuery: (previousResult, { fetchMoreResult }) => {
                        const newMessages = fetchMoreResult.channelPage.messages;
                        const newCursor = fetchMoreResult.channelPage.next_cursor;

                        return {
                            id: fetchMoreResult.channelPage.id,
                            // By returning `cursor` here, we update the `fetchMore` function
                            // to the new cursor.
                            cursor: newCursor,
                            channelPage: {
                                id: fetchMoreResult.channelPage.id,
                                messages: [...newMessages, ...previousResult.channelPage.messages],
                                next_cursor: newCursor,
                                __typename: fetchMoreResult.channelPage.__typename,

                            },
                            __typename: fetchMoreResult.channelPage.__typename,
                        };
                    }
                })


            const more = () => subscribeToMore({
                document: subscription,
                variables: { channelId: channelId },
                updateQuery: (prev, { subscriptionData }) => {
                    if (!subscriptionData.data) return prev;
                    const newMessage = subscriptionData.data.message;

                    const messagesWithoutNew = prev.channelPage.messages.filter(
                        message => { return message.id !== newMessage.id })
                    if (newMessage.channelId === channelId) {
                        return Object.assign({}, prev, {
                            channelPage: {
                                id: channelId,
                                next_cursor: prev.channelPage.next_cursor,
                                messages: [...messagesWithoutNew, newMessage],
                                __typename: prev.channelPage.__typename
                            },
                        });
                    }
                    else {
                        return prev;
                    }
                },
            });
            return <MessageListView data={data} subscribeToMore={more} fetchMore={onLoadMore} channelId={channelId} />
        }}
    </Query>
)

export default MessageList;
