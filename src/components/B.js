import React, { useCallback } from 'react'


const Message = React.memo(({message}) => {
  return <p>{message}</p>
})


const ListItem = React.memo(({post, testFunction}) => {
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  )
})


const List = React.memo(({ posts }) => {
  console.log('List component is rendering')
  return(
    <ul>
      {posts.map(post => (<ListItem key={post.id} post={post}/>)
      )}

    </ul>
  )
})


const B = ({message,posts}) => {
  console.log('B component is rendering')
  const testFunction = useCallback(() => {},[])
  return (
  <div> 
    
    <h1>B components</h1>
    <Message message={message}/>
    <List posts={posts} testFunction={testFunction}/>
    
  </div> 
   

  )
}

export default B