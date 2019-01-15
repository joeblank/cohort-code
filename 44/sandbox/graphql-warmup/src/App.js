import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { baseUrl } from './config'

class App extends Component {
  state = {
    message: '',
    links: []
  }

  description = React.createRef()
  url = React.createRef()

  componentDidMount = async () => {
    this.getLinks()
  }

  getLinks = async () => {
    const linksQuery = `
    {
      links {
        id
        description
        url
      }
    }
    `
    let res = await axios.post(baseUrl, { query: linksQuery })
    this.setState({ links: res.data.data.links })
  }

  welcome = async () => {
    const welcomeQuery = `
      {
        welcome
      }
    `
    let res = await axios.post(baseUrl, { query: welcomeQuery })
    this.setState({ message: res.data.data.welcome })
  }

  addLink = async () => {
    let mutation = `
    mutation {
      addLink(url: "${this.url.current.value}", description: "${this.description.current.value}" ) {
        id
        description
        url
      }
    }
    `
    await axios.post(baseUrl, { query: mutation })
    this.getLinks()
  }

  getOne = async () => {
    const query = `
      query {
        getOne(id: "link-0") {
          id
          url
          description
        }
      }
    `
    await axios.post(baseUrl, { query })
  }

  removeLink = async (id) => {
    await axios.post(baseUrl, {
      query: `
        mutation {
          removeLink(id: "${id}") {
            id
            url
            description
          }
        }
      `
    })
    this.getLinks()
  }

  render() {
    return (
      <div className="App">
        <h1>Hacker News Clone</h1>
        <p>{this.state.message}</p>
        <button onClick={this.welcome}>Welcome</button>
        <p>Description: <input ref={this.description} type="text" /></p>
        <p>Url: <input ref={this.url} type="text" /></p>
        <button onClick={this.addLink}>Add Link</button>
        <button onClick={this.getOne}>Get one</button>
        <hr />
        {
          this.state.links.map(link => {
            return (
              <div key={link.id}>
                <p>ID: {link.id}</p>
                <p>Description: {link.description}</p>
                <a href={`http://${link.url}`} target='_blank' rel="noopener noreferrer"><p>Url: {link.url}</p></a>
                <br />
                <button onClick={() => this.removeLink(link.id)}>Remove</button>
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
