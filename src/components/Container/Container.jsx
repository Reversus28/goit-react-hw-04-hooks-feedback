import React from 'react'
import { Wrapper } from './Container.style'
import PropTypes from 'prop-types'

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
