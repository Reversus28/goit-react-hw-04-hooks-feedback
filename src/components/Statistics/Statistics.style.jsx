import styled from '@emotion/styled'

const List = styled.ul`
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  color: #2a323a;
  font-size: 24px;
  font-weight: 500;
  text-transform: capitalize;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`
export { List, Item }
