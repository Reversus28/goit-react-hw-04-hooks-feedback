import React from 'react'
import { List, Item } from './Statistics.style'
import Notification from '../Notification'
import PropTypes from 'prop-types'

function Statistics({ good, neutral, bad, total, positivePercentage = 0 }) {
  return (
    <>
      {total > 0 ? (
        <List>
          <Item>Good: {good}</Item>
          <Item>Neutral: {neutral}</Item>
          <Item>Bad: {bad}</Item>
          <Item>Total: {total}</Item>
          <Item>Positive feedback: {positivePercentage}%</Item>
        </List>
      ) : (
        <Notification message="No feedback given"></Notification>
      )}
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics
