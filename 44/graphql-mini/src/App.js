import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from './config.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      links: []
    }
    this.url = React.createRef();
    this.description = React.createRef();
  }

  async componentDidMount() {
    this.getLinks()
  }

  async getLinks() {
    const query = `
      query {
        links {
          id
          url
          description
        }
      }
    `
    let res = await axios.post(baseUrl, { query: query })
    this.setState({ links: res.data.data.links })
  }

  async welcome() {
    const query = `
      query {
        welcome
      }
    `
    let res = await axios.post(baseUrl, { query: query })
    this.setState({ message: res.data.data.welcome })
  }

  async addLink() {
    const mutation = `
      mutation {
        addLink(url: "${this.url.current.value}", description: "${this.description.current.value}") {
          id
          url
          description
        }
      }
    `;
    await axios.post(baseUrl, { query: mutation })
    this.getLinks()
  }

  async delete(linkId) {
    const mutation = `
      mutation {
        removeLink(linkId: "${linkId}") {
          id
        }
      }
    `
    await axios.post(baseUrl, { query: mutation })
    this.getLinks()
  }

  render() {
    return (
      <div className="App">
        <h1>Hacker News Clone</h1>
        <p>{this.state.message}</p>
        <button onClick={() => this.welcome()}>Welcome</button>
        <p>Url: <input ref={this.url} type="text" /></p>
        <p>Description: <input ref={this.description} type="text" /></p>
        <button onClick={() => this.addLink()}>Add new link</button>
        <hr />
        {
          this.state.links.map(link => {
            return (
              <div key={link.id}>
                <p>ID: {link.id}</p>
                <p>Description: {link.description}</p>
                <p>Url: <a href={link.url}>{link.url}</a></p>
                <button onClick={() => this.delete(link.id)}>Delete</button>
                <hr />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
