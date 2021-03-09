import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";


function SearchResultContainer() {
  const [search, setSearch] = useState("Random");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  useEffect(() => {
    if (!search) {
      return;
    }

    API.search(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data);
        setName(res.data[0].name);
        setEmail(res.data[0].email);

      })
     
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  return (
    <div>
        <h1 className="text-center">Employee Search</h1>
        <SearchForm
          handleInputChange={handleInputChange}
          results={search}
        />
        <ResultList name={name} email={email} />
    </div>
  );
}


export default SearchResultContainer;



 