import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Calculator from '../components/Calculator'
import { keypadData } from '../data/keypadData'

describe('Test <Calculator/> elements', () => {
  test('keypad type number and backspace click events should trigger', () => {
    render(<Calculator/>)
    const resultTextElement = screen.getByTestId('resultText')
    const keyButtons = screen.getAllByRole('button')
    const backspaceBtn = keyButtons[3] 

    keyButtons.forEach((btn, index) => {
      const numberType = keypadData[index].type === 'number'

      if(numberType) {
        fireEvent.click(btn)

        let resultText = resultTextElement.textContent
        const value = keypadData[index].value

        expect(resultText).toBe(value)
        fireEvent.click(backspaceBtn)
      }
    })
  })

  test('should add: 5 + 3 = 8', () => {
    render(<Calculator/>)
    const resultTextElement = screen.getByTestId('resultText')
    const keyButtons = screen.getAllByRole('button')

    const btnKey5 = keyButtons[9]
    const btnSum = keyButtons[11]
    const btnKey3 = keyButtons[14]
    const equalsBtn = keyButtons[keyButtons.length - 1]

    fireEvent.click(btnKey5)
    fireEvent.click(btnSum)
    fireEvent.click(btnKey3)
    fireEvent.click(equalsBtn)

    let resultText = resultTextElement.textContent
    expect(resultText).toBe('8')
   })

  test('should subtract: 6 - 3 = 3', () => {
    render(<Calculator/>)
    const resultTextElement = screen.getByTestId('resultText')
    const keyButtons = screen.getAllByRole('button')

    const btnKey6 = keyButtons[10]
    const btnKey3 = keyButtons[14]
    const btnSubtract = keyButtons[15]
    const equalsBtn = keyButtons[keyButtons.length - 1]

    fireEvent.click(btnKey6)
    fireEvent.click(btnSubtract)
    fireEvent.click(btnKey3)
    fireEvent.click(equalsBtn)

    let resultText = resultTextElement.textContent
    expect(resultText).toBe('3')
   })

  test('should divide: 4 / 2 = 2', () => {
    render(<Calculator/>)
    const resultTextElement = screen.getByTestId('resultText')
    const keyButtons = screen.getAllByRole('button')

    const btnKey4 = keyButtons[8]
    const btnKey2 = keyButtons[13]
    const btnDivide = keyButtons[2]
    const equalsBtn = keyButtons[keyButtons.length - 1]

    fireEvent.click(btnKey4)
    fireEvent.click(btnDivide)
    fireEvent.click(btnKey2)
    fireEvent.click(equalsBtn)

    let resultText = resultTextElement.textContent
    expect(resultText).toBe('2')
   })
})
