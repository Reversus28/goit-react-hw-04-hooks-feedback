import styled from '@emotion/styled'

const Button = styled.button`
  background-color: #e7e7e7;
  color: black;
  border: none;
  cursor: pointer;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  display: inline-block;
  font-size: 25px;

  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background-color: #22343b;
    color: white;
  }
`

export { Button }
