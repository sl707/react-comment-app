import React, { useState } from 'react'
import { v4 } from 'uuid'
import Title from './components/Title'
import Form from './components/Form'
import Comment from './components/Comment'

const App = () => {
  const [posts, setPosts] = useState([])
  const [commentData, setCommentData] = useState()
  if (commentData) {
    const { newName, newComment, newDepth } = commentData
    setPosts([...posts,
      <div key={`${v4()}`}>
        <Comment
          name={newName}
          comment={newComment}
          depth={newDepth}
        />
      </div>])
    setCommentData()
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Title />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Form depth={2} setCommentData={setCommentData} className="card-body" />
          </div>
        </div>
        {posts}
      </div>
    </>
  )
}

export default App
