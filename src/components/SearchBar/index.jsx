// todo add cancel/x in input -> clear state
import { BiSearchAlt } from "react-icons/bi";

const SearchBar = (props) => {

  const {
    searchTerm,
    setSearchTerm,
    placeholder,
    handleSubmit
  } = props

  return (
  <form onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
      <BiSearchAlt />
  
    </form>
  )
}

export default SearchBar 