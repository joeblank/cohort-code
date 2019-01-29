import React from "react";

class App extends React.Component {
  state = { data: [], userInput: '' };
  search = async () => {
    try {
      function test() {
        console.log('whoa')
      }
      let resp = await fetch(
        `https://itunes.apple.com/search?term=${this.state.userInput}&limit=25;callback={test}`
      );
      let res = await resp.json();
      console.log(res);
      this.setState({ data: res })
    } catch (e) {
      console.log(e);
      this.setState({ data: e })
    }
  };

  handleInput = ({ target }) => this.setState({ userInput: target.value })
  render() {
    return (
      <div className="App">
        <input value={this.state.userInput} type="text" onChange={this.handleInput} />
        <button onClick={this.search}>go</button>
        <p>{JSON.stringify(this.state.data)}</p>
      </div>
    );
  }
}

export default App;