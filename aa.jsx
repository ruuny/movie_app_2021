import React from 'react';
class App extends React.Component {

    constructor(props) {
        super(props);
        console.log('hello');
    }
    componentDidMount() {
        console.log('Component rendered');
    }
    componentDidUpdate() {
        console.log('Updated ')
    }
    componentWillUnmount() {
        console.log('Component has gone.')
    }
    state = {
        count: 0,
    };
    // add = () => this.setState({ count: this.state.count + 1 })
    // minus = () => this.setState({ count: this.state.count - 1 })

    add = () => {
        console.log('set count add');
        this.setState(current => ({ count: current.count + 1 }))
    }
    minus = () => {
        console.log('set count minus');
        this.setState(current => ({ count: current.count - 1 }))
    }
    render() {
        console.log('render');
        return (
            <div>
                <h1>I'm a class component {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div >
        );
    }
}

export default App;
