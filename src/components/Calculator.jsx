import {BiMoon, BiSun} from 'react-icons/bi'
import styled from 'styled-components'
import {useState} from 'react'

import {inputHandler} from '../utils/handlers'
import Display from './Display'
import Keypad from './Keypad'

export default () => {
  const [history, setHistory] = useState([])
  const [currentValue, setCurrentValue] = useState('')

  const handleInput = inputObj => inputHandler({
    history: history, 
    setHistory: setHistory,
    currentValue: currentValue, 
    setCurrentValue: setCurrentValue
  }, inputObj)

  return (
    <Calculator>
      <Display 
        history={history} 
        currentValue={currentValue} 
        data-testid='displayComponent'
      />
      <Keypad handleClick={handleInput}/>
    </Calculator>
  )
}

const Calculator = styled.div`
  width: 300px;
  height: 580px;
  display: flex;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: 1px -1px 20px rgba(0, 0, 0, 0.15);
`
