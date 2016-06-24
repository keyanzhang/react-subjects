import React from 'react'
import md5 from 'md5'

const GravatarURL = 'http://gravatar.com/avatar'

class Gravatar extends React.Component {
  static propTypes = {
    email: React.PropTypes.string.isRequired,
    size: React.PropTypes.number.isRequired
  };

  static defaultProps = {
    size: 80
  };

  render() {
    return (
      <img src={GravatarURL + '/' + md5(this.props.email) + '?s=' + this.props.size}/>
    )
  }
}

export default Gravatar
