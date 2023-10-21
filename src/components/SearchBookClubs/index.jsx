import { useState } from "react"

import { useUserContext } from "../../contexts/UserContext"

import SearchBar from "../SearchBar"

const SearchBookClubs = () => {
    const { user } = useUserContext()

    const [searchTerm, setSearchTerm] = useState("")
    const [loading, setLoading] = useState(false);
    const [noResults, setNoResults] = useState(false);
    const [results, setResults] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault()

        setResults("") 
        setNoResults(false)
      
        const response = await fetch(
          `http://localhost:8080/api/find-book-club/${searchTerm}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
  
        const data = await response.json();

        if (data) setLoading(false)

        if (data.unsuccessful) return setNoResults(true)

      //   todo add pagination
        if (data.success) setResults(data.success)     
    }

    const searchProps = {
    searchTerm,
    setSearchTerm,
    placeholder: "search for bookclub",
    handleSubmit
  }



  return (
    <div>SearchBookClubs
        <div>
        <SearchBar {...searchProps}/>    
        {
          loading && <p>loading</p>
        }
        {
          noResults && <p>no results matching please try again</p>
        }
        {
            results.length !== 0 && results.map(result => {
                return <p key={result._id}>{result.title}</p>
            })
        }
        </div>
    </div>
  )
}

export default SearchBookClubs