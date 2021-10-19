import React, { useState } from 'react'

const Form = ({
  depth, setShowForm, setCommentData, setSubcommentData,
}) => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const resetForm = () => {
    setComment('')
    setName('')
    if (depth !== 2) {
      setShowForm(false)
    }
  }
  const setData = setter => {
    setter({ newName: name, newComment: comment, newDepth: depth })
    resetForm()
  }
  const buttonAction = () => {
    if (depth === 2) {
      setData(setCommentData)
    } else {
      setData(setSubcommentData)
    }
  }
  return (
    <div className="card border border-dark">
      {depth === 2 && (<h3 className="card-title">New Post</h3>)}
      <h6 className="card-subtitle">Name</h6>
      <input value={name} onChange={e => setName(e.target.value)} />
      <h6 className="card-subtitle">Comment</h6>
      <input value={comment} onChange={e => setComment(e.target.value)} />
      {name && comment
      && (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={() => buttonAction()}
      >
        Submit
      </button>
      )}
    </div>
  )
}

export default Form
