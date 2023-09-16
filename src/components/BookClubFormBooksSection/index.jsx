 // TODO handle errors instead of items, loading results loader and disable search
import { useState } from "react"
import { useLocation } from "react-router-dom";

import  { useBookClubContext }  from "../../contexts/BookClubContext"
import  { useBookListContext }  from "../../contexts/BookListContext"

import SearchBar from "../SearchBar"
import ArrayData from "../FormToBeAddedArrayData"

const BookClubFormBooksSection = () => {

  const location = useLocation();

  const contextUsed = location.pathname === "/create-book-club" ? useBookClubContext() : useBookListContext()


  const {booksReading, setBooksReading} =  contextUsed

  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    setLoading(true);
   
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
    );
    
      const { items } = await response.json();

      if (items) {
        setLoading(false);
        setResults([...items]);
      }
    
  }

  const searchProps = {
    searchTerm,
    setSearchTerm,
    placeholder: "search for book",
    handleSubmit
  }

  // TODO booksreading to something generic

  return (
    <div>
        <p>search and add books</p>
        <SearchBar {...searchProps}/>
        <div>
          {results.map(book => {
            const booksMatching = booksReading.filter(bookToBeAdded => bookToBeAdded.id === book.id)

            return <div key={book.id}>
              <p >{book.volumeInfo.title}</p>

              {booksMatching.length === 0 &&  <button onClick={() => {
                setBooksReading([...booksReading, {title: book.volumeInfo.title, id: book.id}])
              }} >add</button>}
          
             
            </div>
          })}
        </div>
        <ArrayData stateData={booksReading} setState={setBooksReading} heading="books added to currently reading:"/>
    </div>
  )
}

export default BookClubFormBooksSection
