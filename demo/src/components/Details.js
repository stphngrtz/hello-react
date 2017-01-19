import React, { Component, PropTypes } from 'react'

export default class Details extends Component {
  render() {
    const { post } = this.props

    if (post == null)
      return null;
    else
      return (
        <div>
          <h1>Details</h1>
          <ul>
            <li>Title: {post.title} (<a href={"http://www.reddit.com/" + post.permalink} target="_blank">visit</a>)</li>
            <li>Author: {post.author}</li>
            <li>Comments: {post.num_comments}</li>
          </ul>
        </div>
      )
  }
}

Details.propTypes = {
  post: PropTypes.object
}
