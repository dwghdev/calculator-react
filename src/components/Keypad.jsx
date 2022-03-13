import styled from 'styled-components'
import {keypadData} from '../data/keypadData'

export default ({handleClick}) => {
  const renderButtons = () =>
    keypadData.map((btnObj, index) => {
      const onClick = () => handleClick(btnObj)
      const {value} = btnObj

      return (
        <button key={index} onClick={onClick}>
          {value}
        </button> 
      )
    })

  return (
    <Keypad>
      <Buttons>{renderButtons()}</Buttons>
    </Keypad>
  ) 
}

const Keypad = styled.div`
  height: 370px;
  background: var(--bg-color-2);
`

const Buttons = styled.div`
  display: grid;
  grid-template: repeat(5, 75px) / repeat(4, 1fr);

  button {
    color: #444;
    padding: 5px;
    border: none; 
    display: flex;
    cursor: pointer;
    font-size: 22px;
    background: #ffe4f0;
    align-items: center;
    justify-content: center;
    outline: 1px solid rgba(136, 14, 79, 0.1);

    &:nth-of-type(4n + 4) {
      color: #eee;
      background: #ff9ba0;
    }
    &:last-of-type { background: #fe6f76; }
    &:hover {
      z-index: 10;
      box-shadow: 10px 10px 18px -6px #e91e63;
    }
    &:active {
      box-shadow: inset 10px 10px 18px -6px #e91e63;
    }
  }
`
