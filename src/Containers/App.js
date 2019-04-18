import React, {Component} from 'react';
import CardList from './../Components/CardList';
import SearchBox from './../Components/SearchBox';

class App extends Component {
    constructor() {
        super();

        this.state = {
            robots: [],
            searchField: ''
        }

        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(results => {
                this.setState({ robots: results })
            })
            .catch(err => console.log(err))
    }

    onSearchChange(event) {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        if (this.state.robots.length === 0) {
            return <p className="preload">Loading...</p>
        } else {
            return (
                <div className="tc">
                    <h1>roboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filterRobots} />
                </div>
            )
        }
    }
}

export default App;