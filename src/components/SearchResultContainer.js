import { Component } from "react";
import { render } from "react-dom";
import API from "../utils/API";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      allEmployees: [],
      search: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);

  }

  componentDidMount(){
    API.search(search)
    .then(res => {
      if (res.data.length === 0 ){
        throw err;
      }
      if (res.data.status === "error"){
        throw err;
      }
      this.setState({ employees: res.data.results });
    })
    .catch(err => {
      console.log(err)
    })
  }

}

handleInputChange(event){
  event.preventDefault;
  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}

render() {
  let filteredEmployees;

  if (this.state.search)
  filteredEmployees = this.state.employees.filter(filteredParam =>
    filteredParam.name.startsWith(this.state.search));
  
  const emails = filteredEmployees.map(filteredParam => {
    return <List key={filteredParam.email} name={filteredParam.name} />
  });
  return (
    <div>
      <form onSubmit= {this.handleSubmit}>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
          id="search"
        />
        <button onClick={this.state.search} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
      
    </div>
  )
}



export default SearchResultContainer;



 