import { useState } from "react"

import { useUserContext } from "../../contexts/UserContext"
import { useBookClubContext } from "../../contexts/BookClubContext"

import SearchBar from "../SearchBar"
import ArrayData from "../FormToBeAddedArrayData"

const BookClubFormUsersSection = () => {

  const { usersInvited, setUsersInvited } = useBookClubContext()

  const { user } = useUserContext()

  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch(
      `http://localhost:8080/api/find-user/${searchTerm}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const data = await response.json();

    if (data.success) {
      setResults([...data.success]);
    }
    
  }

  const searchProps = {
    searchTerm,
    setSearchTerm, 
    placeholder: "search for users",
    handleSubmit
  }

  return (
    <div>
        <p>search and invite users</p>
        <SearchBar {...searchProps}/>
        <div>
          {results.map(userDisplayed => {
            const usersMatching = usersInvited.filter(usersToBeAdded => usersToBeAdded.id === userDisplayed._id)
  
            return <div key={userDisplayed._id}>
              <p >{userDisplayed.username}</p>
          
           {usersMatching.length === 0 &&  <button onClick={() => {
                setUsersInvited([...usersInvited, {title: userDisplayed.username, id: userDisplayed._id}])
              }} >add</button>} 
             
            </div>
          })}
        </div>
        <ArrayData stateData={usersInvited} setState={setUsersInvited} heading="User being invited:"/>
    </div>
  )
}

export default BookClubFormUsersSection

