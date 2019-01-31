import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const graphqlUrl = 'http://localhost:4000';

class App extends Component {

  state = {
    articleLinks: [],
    lastRemoved: null
  }

  async componentDidMount() {
    this.fetchLinks()
  }

  fetchLinks = async () => {
    const query = `
      query {
        articleLinks {
          id
          description
          url
        }
      }
    `
    let res = await axios.post(graphqlUrl, { query })
    this.setState({ articleLinks: res.data.data.articleLinks })
  }


  removeLink = async (linkId) => {
    let answer = prompt(`Are you sure you want to delete link with id ${linkId}`)
    if (answer === 'yes') {
      const query = `
      mutation {
        removeLink(id: "${linkId}") {
          id
          url
          description
        }
      }
    `
      const res = await axios.post(graphqlUrl, { query })
      this.setState({ lastRemoved: res.data.data.removeLink })
      this.fetchLinks()
    }
  }

  redo = async () => {
    const { url, description } = this.state.lastRemoved;
    const query = `
      mutation {
        addLink(url: "${url}", description: "${description}"){
          id
        }
      }
    `
    await axios.post(graphqlUrl, { query })
    this.fetchLinks()
  }

  render() {
    const links = this.state.articleLinks.map(link => {
      return (
        <>
          <p>Url: {link.url}</p>
          <p>Description: {link.description}</p>
          <button onClick={() => this.removeLink(link.id)}>Delete</button>
        </>
      )
    })
    return (
      <div className="App">
        <h1>Hacker News</h1>
        {this.state.lastRemoved && <button onClick={this.redo}>undo</button>}
        {links}
      </div>
    );
  }
}

export default App;
