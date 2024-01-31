import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    textInput: '',
    count: 0,
  }

  onIncrement = event => {
    const inputText = event.target.value
    this.setState({
      textInput: inputText,
      count: inputText.length,
    })
  }

  onReset = event => {
    const inputText = event.target.value
    this.setState({
      textInput: inputText,
      count: 0,
    })
  }

  render() {
    const {count, textInput} = this.state

    return (
      <div className="container">
        <h1>Calculate the Letters you enter</h1>
        <label htmlFor="input">Enter the phrase</label>
        <input
          type="text"
          id="input"
          value={textInput}
          onChange={this.onIncrement}
          placeholder="Enter the phrase"
        />
        <button type="button" onClick={this.onReset}>
          <p>No.of letters: {count}</p>
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
