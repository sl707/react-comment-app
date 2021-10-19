import React, { useState } from 'react'
import { v4 } from 'uuid'
import Vote from './Vote'
import Form from './Form'

const Comment = ({
  name, comment, depth,
}) => {
  const [showForm, setShowForm] = useState(false)
  const [subposts, setSubposts] = useState([])
  const [subcommentData, setSubcommentData] = useState()
  if (subcommentData) {
    const { newName, newComment, newDepth } = subcommentData
    setSubposts([...subposts,
      <div key={`${v4()}`}>
        <Comment
          name={newName}
          comment={newComment}
          depth={newDepth}
        />
      </div>])
    setSubcommentData()
  }
  return (
    <>
      <div className="row border border-primary">
        <div className="col">
          <h5>{name}</h5>
          <h5>{comment}</h5>
          {(depth !== 0)
            && (
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setShowForm(!showForm)}
            >
              Reply
            </button>
            )}
          {showForm
            && (
            <Form
              depth={depth - 1}
              setShowForm={setShowForm}
              setSubcommentData={setSubcommentData}
            />
            )}
        </div>
        <div className="col">
          <Vote />
        </div>
      </div>
      <div className="row">
        <div className="col offset-1">
          {subposts}
        </div>
      </div>
    </>
  )
}

export default Comment
