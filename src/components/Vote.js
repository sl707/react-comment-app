import React, { useState } from 'react'

const Vote = () => {
  const [votes, setVotes] = useState(0)
  return (
    <>
      <button
        type="button"
        onClick={() => setVotes(votes + 1)}
        className="btn btn-success btn-sm"
      >
        ^
      </button>
      <div>{votes}</div>
      <button
        type="button"
        onClick={() => setVotes(votes - 1)}
        className="btn btn-danger btn-sm"
      >
        v
      </button>
    </>
  )
}

export default Vote
