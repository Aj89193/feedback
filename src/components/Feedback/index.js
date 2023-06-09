import './index.css'

import {Component} from 'react'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedback = () => {
    const {resources} = this.props
    const {emoji} = resources

    return (
      <div className="container">
        <h1 className="heading">
          How satisfied are you with our customer support performance{' '}
        </h1>
        <ul className="emoji-list">
          {emoji.map(emojis => (
            <li key={emojis.id}>
              <button className="btn" type="button" onClick={this.onClickEmoji}>
                <img
                  src={emojis.imageUrl}
                  alt={emojis.name}
                  className="image-class"
                />
                <br />
                <span className="emoji-name">{emojis.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyou = () => {
    const {resources} = this.props
    const {loveEmoji} = resources

    return (
      <div className="container">
        <img
          src={loveEmoji.loveEmojiUrl}
          alt="love emoji"
          className="loveEmoji"
        />
        <h1 className="heading">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="main-container">
        <div className="feedback-card">
          {isFeedbackSelected ? this.renderThankyou() : this.renderFeedback()}
        </div>
      </div>
    )
  }
}
export default Feedback
