import {useRef, useEffect} from 'react'
import styled from 'styled-components'

export default ({history, currentValue}) => {
  const getHistory = history => 
    history.map(item => 
      item.type === 'number' ? item.value 
        : item.type === 'operator' ? ' '+item.value+' ' : null
    )

  const getCurrentResult = (currentValue, history) => {
    const lastHistory = history[history.length - 1]
    const prevHistory = history[history.length - 2]

    if (!currentValue && !history.length) 
      return '0'
    else if (!currentValue && lastHistory.type === 'operator')
      return prevHistory.value
    return currentValue
  }

  const updateFontSize = (displayRef, spanRef) => {
    const currentSpan = spanRef.current
    const currentDisplay = displayRef.current

    const displayPadding = 100
    const spanLength = currentSpan.textContent.length
    const offsetWidth = currentDisplay.offsetWidth + displayPadding
    const responsiveFontSize = Math.floor(offsetWidth / spanLength)

    const maxFontSize = 72
    let currentFontSize = maxFontSize 
    if (responsiveFontSize < maxFontSize)
        currentFontSize = responsiveFontSize

    spanRef.current.style.fontSize = currentFontSize+'px'
  }

  const displayResultRef = useRef()
  const spanResultRef = useRef()

  useEffect(() => 
    updateFontSize(displayResultRef, spanResultRef)
  , [currentValue])

  return (
    <Display>
      <History>{history && getHistory(history)}</History>
      <Result ref={displayResultRef}>
        <span data-testid='resultText' ref={spanResultRef}>
          {history ? getCurrentResult(currentValue, history) : 0}
        </span>
      </Result>
    </Display>
  )
}

const Display = styled.div`
  display: flex;
  background: #fff9f9;
  flex-direction: column;
  height: calc(100% - 350px);
`

const History = styled.div`
  color: gray;
  flex-grow: 1;
  display: flex;
  padding: 15px;
  font-size: 27px;
  padding-top: 41px;
  align-items: center;
  justify-content: flex-end;
`

const Result = styled.div`
  display: flex;
  padding: 15px;
  font-size: 55px;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
  span { transition: all .1s ease; }
`
