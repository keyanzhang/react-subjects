import React, { PropTypes } from 'react'

class ScrollBottomNotifier extends React.Component {
  static propTypes = {
    buffer: PropTypes.number.isRequired,
    onScrollBottom: PropTypes.func
  };

  static defaultProps = {
    buffer: 200
  };

  handleScroll = event => {
    const { scrollTop, scrollHeight, clientHeight } = event.target
    const hitBottom = scrollTop + clientHeight >= scrollHeight - this.props.buffer

    if (hitBottom && this.props.onScrollBottom)
      this.props.onScrollBottom()
  };

  render() {
    const style = { ...this.props.style, overflow: 'auto' }

    return <div
      {...this.props}
      style={style}
      onScroll={this.handleScroll}
    />
  }
}

export default ScrollBottomNotifier
