import React from 'react'
import { Paragraph } from './Notification.style'
import PropTypes from 'prop-types'

function Notification({ message }) {
  return <Paragraph>{message}</Paragraph>
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}
export default Notification
