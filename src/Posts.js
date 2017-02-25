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
              <h2 dangerouslySetInnerHTML={{  
                __html: post.title.rendered 
              }}/>
               <h4>{post.author}</h4>
              <p dangerouslySetInnerHTML={{ 
                __html: post.content.rendered 
              }} />
              </li>
            ))}
          </ul>
        );
    }
}

export default Posts;