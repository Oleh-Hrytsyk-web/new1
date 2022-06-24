import React, { Component } from "react";
import Counter from "./components/counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
      showErrorComponent: false,
    };
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
    this.generateSeed = () =>
      this.setState({ seed: Number.parseInt(Math.random() * 100) });
    this.toggleError = () =>
      this.setState({ showErrorComponent: !this.state.showErrorComponent });
  }

  render() {
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          Unmount
        </button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        <button onClick={this.generateSeed}>Generate Seed</button>
        <button onClick={this.toggleError}>Toggle Error</button>
        {this.state.mount ? (
          <Counter
            showErrorComponent={this.state.showErrorComponent}
            ignoreProp={this.state.ignoreProp}
            seed={this.state.seed}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
