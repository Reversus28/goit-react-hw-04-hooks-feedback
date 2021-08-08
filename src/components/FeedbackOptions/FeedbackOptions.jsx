import React from 'react'
import { Button } from './FeedbackOptions.style'
import PropTypes from 'prop-types'

const FeedbackOptions = ({ state, onLeaveFeedback }) => {
  const options = Object.keys(state)

  return (
    <>
      {options.map((option) => (
        <Button onClick={onLeaveFeedback} key={option}>
          {option}
        </Button>
      ))}
    </>
  )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions
