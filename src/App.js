import React, {Component} from 'react';
import logo from './logo.svg';
import Movie from "./components/Movie";
import './App.css';

const movies = [

    {
        id: 1,
        title: 'star wars',
        desc: "Best movie ever"
    }, {
        id: 2,
        title: '13 reasons why',
        desc: "Emo af movie"
    }, {
        id: 3,
        title: 'Whiplash',
        desc: "Never watched this movie"
    }
];

class App extends Component {

    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                </header>
                {movies.map((movie, index) => <Movie key={index} movie={movie}/>)}
            </div>
        );
    }
}
export default App;