import React, { Component } from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }
    componentDidMount() {
      fetch('https://blog.berraknil.com/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(posts => this.setState({ posts }))
    }
    render() {
        return (
          <ul>
            {this.state.posts.map(post => (
              <li key={post.id}>
              <h2>{post.title.rendered}</h2>
              <p>{post.content.rendered}</p>
              </li>
            ))}
          </ul>
        );
    }
}

export default Posts;