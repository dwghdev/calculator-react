import styled from 'styled-components'
import Calculator from './components/Calculator'

export default() => <App><Calculator/></App>

const App = styled.div`
  --color-bg: #FCD07A;
  --bg-color-1: #9DB3ED;
  --bg-color-2: #F9F9F9;
  --text-color-1: #0B1537;
  --text-color-2: #636363;

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg);
`
