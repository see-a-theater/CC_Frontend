import styled from "styled-components";
function Hr () {
  return (
    <Div />
  )
}
export default Hr;
const Div = styled.div`
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.colors.pink200};
`