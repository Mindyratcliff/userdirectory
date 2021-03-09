import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";


function SearchResultContainer() {
  const [search, setSearch] = useState("Random");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");


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
        setName(res.data[0]);
        setEmail(res.data[0]);
      })
      .catch(err => setError(err));
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  return (
    <div>
        <SearchForm
          handleInputChange={handleInputChange}
          results={search}
        />
        <ResultList name={name} email={email} />
    </div>
  );
}



export default SearchResultContainer;



 