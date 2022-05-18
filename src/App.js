import React from "react";
import './App.css';
class App extends React.Component {

  // Constructor  
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to 
  // execute the code  
  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;

    return (
      <div className="App" class="container">
        <h1>React component to fetch user's data from Api</h1>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          {items.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.website}</td>
              </tr>
            )
          })}
        </table>
      </div>
    );
  }
}



export default App; 