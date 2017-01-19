import React, { PropTypes, Component } from 'react'

import DetailsLink from '../containers/DetailsLink'

export default class Posts extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) =>
          <li key={i}><DetailsLink id={post.id}>{post.title}</DetailsLink></li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
