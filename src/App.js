import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  render() {

    const filterMonsters = this.state.monsters.filter((res)=>{
      return res.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="select monster" 
        onChange={(event)=>{
          const searchField =event.target.value.toLocaleLowerCase();       
          this.setState(()=>{
            return {searchField};
          })
          }}
        />
        {filterMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })};
      </div>
    );
  }
}

export default App;
