import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props)
    {
        super(props);
        console.log("constructor");
    }

    //LIFE CYCLE

    componentWillMount()
    {
        // Fired before the component renders Usually do something before component
        // mounts, such as setting state.
        console.log("Will mount");
    }
    componentDidMount()
    {
        //fired After component Mounts Triggers a re-render
        
        console.log("Did Mount");
    }

    //Create state
    state = {
        toggle: true

    }
    //This.Toggle will change the toggle to the opposite
    toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    }
    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    <Welcome text={"Welcome to React my dude"} toggle={this.state.toggle}></Welcome>
                </header>
                <p className="App-intro">
                    To get started, edit
                    <code>src/App.js</code>
                    and save to reload.
                </p>
                {/*Show inline conditionals*/}
                {this.state.toggle && <p>This should show and hide</p>
}
                <button onClick={this.toggle}>Show/Hide</button>
            </div>
        );
    }
}
class Welcome extends Component
{

    render()
    {
        const {toggle, text} = this.props;
        console.log(toggle);
        return (toggle && <h1 className="App-title">
            {text}
        </h1>)
    }
}
export default App;
