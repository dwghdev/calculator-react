const numberType = (states, value) => {
  const { currentValue, setCurrentValue } = states
  const currentDigit = Number(value)
  if (currentDigit || currentDigit === 0)
    setCurrentValue(currentValue + currentDigit.toString())
}

const operatorType = (states, inputObj) => {
  const {
    history, setHistory,
    currentValue, setCurrentValue
  } = states

  if (!(currentValue || history.length)) return
  
  const newHistory = [...history]
  const currentValueObj = { value: currentValue, type: 'number' }

  if (!currentValue) {
    const lastHistory = newHistory.length - 1
    newHistory[lastHistory] = inputObj
  }
  else {
    newHistory.push(currentValueObj)
    newHistory.push(inputObj)
  }

  setHistory(newHistory)
  setCurrentValue('')
}

const resultType = states => {
  const {
    history, setHistory,
    currentValue, setCurrentValue
  } = states

  if (!currentValue && !history.length) return

  const resultString = history.map(input => `${input.operator || input.value}`).join('')
  const evalResult = eval(resultString + currentValue)

  setHistory([])
  setCurrentValue(evalResult.toString())
}

const percentType = (states, value) => {
  const { 
    history, 
    currentValue, 
    setCurrentValue 
  } = states

  const firstOperand = parseInt(history[0].value)
  const secondOperand = parseInt(currentValue)
  if (firstOperand && secondOperand) {
    const pecentage = (firstOperand / 100) * secondOperand
    setCurrentValue(percentage.toString())
  }
}

const signType = states => {
  const { currentValue, setCurrentValue } = states

  if (currentValue && currentValue !== 0) {
    const changeSign = currentValue * -1
    setCurrentValue(changeSign.toString())
  }
}

const periodType = states => {
  const { currentValue, setCurrentValue } = states

  const noPeriod = !currentValue.includes('.')
  if (currentValue && noPeriod)
    setCurrentValue(currentValue+'.')
}

const backspaceType = states => {
  const { currentValue, setCurrentValue } = states

  if (currentValue) 
    setCurrentValue(currentValue.slice(0, -1))
}

export const inputHandler = (states, inputObj) => {
  if (!inputObj) return 
  
  const { value, type } = inputObj
  switch(type) {
    case 'number':
      numberType(states, value)
      break

    case 'operator': 
      operatorType(states, inputObj)
      break

    case 'result':
      resultType(states)
      break

    case 'period':
      periodType(states)
      break

    case 'sign': 
      signType(states)
      break

    case 'percent': 
      percentType(states, value)
      break

    case 'backspace':
      backspaceType(states)
      break
  
    case 'clear':
      states.setCurrentValue('')
      states.setHistory([])
      break
  }
}
