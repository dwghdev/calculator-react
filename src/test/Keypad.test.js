import { render, screen } from '@testing-library/react'
import { keypadData } from './Keypad.data.js'
import Keypad from './Keypad'

describe('Test <Keypad/> elements', () => {
  render(<Keypad/>)
  const keyButtons = screen.getAllByRole('button')

  test('should have 20 buttons', () => expect(keyButtons).toHaveLength(20))

  test('buttons should contain the given data values', () => 
    keyButtons.forEach((btn, index) => btn.textContent = keypadData[index].value))
})
