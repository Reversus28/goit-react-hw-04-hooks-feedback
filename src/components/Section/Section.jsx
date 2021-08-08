import React from 'react'
import Container from '../Container'
import { Wrapper, Title } from './Section.style'
import PropTypes from 'prop-types'

function Section({ title, children }) {
  return (
    <Wrapper>
      <Container>
        {title === 'Please leave feedback' ? (
          <Title>{title}</Title>
        ) : (
          <Title>{title}</Title>
        )}
        {children}
      </Container>
    </Wrapper>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Section
