import ChatBar from '../componets/ChatBar'
import ChatItem from '../componets/ChatItem'
import Layout from '../layout/Layout'

function Home() {
  const chatHistory = [{ uid: '1', chatName: 'chat1' }]
  return (
    <Layout>
      <ChatBar>
        {chatHistory.map(chat => <ChatItem key={chat.uid} chatName={chat.chatName}></ChatItem>)}
      </ChatBar>
    </Layout>
  )
}

export default Home
