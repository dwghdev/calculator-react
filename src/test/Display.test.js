import Display from './Display'

describe('Test <Display/> elements', () => {
  test('result text initial value should be 0', () => {
    render(<Display/>)
    const resultText = screen.getByTitle('resultText') 
    expect(resultText.textContent).toBe('0')
  })
}) 
