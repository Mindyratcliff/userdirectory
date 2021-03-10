import { Component } from "react";
import { render } from "react-dom";
import API from "../utils/API";

class SearchResultContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      allEmployees: [],
      search: ""
    };

    this.handleChange = this.handleChange.bind(this);

  };
  

  componentDidMount(){
    API.search()
    .then(res => {
      console.log(res.data);
      this.setState({ employees: res.data });
    })
    .catch(err => {
      console.log(err)
    })
  }


 handleChange = (event) => {

  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
 };

 render() {
  let filteredEmployees;

  if (this.state.employees.length !== 0) {
  filteredEmployees = this.state.employees.filter(filteredParam =>
    filteredParam.name.startsWith(this.state.search));
  
  const emails = filteredEmployees.map(filteredParam => {
    return <List key={filteredParam.email} name={filteredParam.name} />
  
  });
};
  return (
    <div>
      <form onSubmit= {this.handleSubmit}>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={this.handleChange}
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

  };
};

class List extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.email}</h2>
      </div>
    );
  }
}

export default SearchResultContainer;
  