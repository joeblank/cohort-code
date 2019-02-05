import React, { Component } from 'react';
import logo from './logo.svg';
import comments from './comments.json'
import './App.css';

class App extends Component {

  commentBuilder(commentArr) {
    return commentArr.map(comment => {
      return (
        <div style={{ background: 'rgba(211,211,211, .2)' }}>
          <p style={{ color: 'blue', fontSize: '10px' }}>{comment.author}</p>
          <p>{comment.comment}</p>
          {
            comment.subComments ? (
              <div style={{ marginLeft: '20px' }}>{this.commentBuilder(comment.subComments)}</div>
            ) : null
          }
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Comment Board</h1>
        {this.commentBuilder(comments)}
      </div>
    );
  }
}

export default App;
