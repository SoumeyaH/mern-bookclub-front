import { createContext, useContext, useState, useMemo } from 'react';

const BookListContext = createContext("");

export const useBookListContext = () => useContext(BookListContext);

function BookClubContextProvider(props) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isPublic, setIsPublic] = useState("public")
  const [booksReading, setBooksReading] = useState([])

  const value = useMemo(() => ({
    title,
    setTitle,
    description,
    setDescription,
    isPublic,
    setIsPublic,
    booksReading,
    setBooksReading,
  }), [title, description, isPublic, booksReading]);

  return (
    <BookListContext.Provider value={value}>{props.children}</BookListContext.Provider>
  );
};

export default BookClubContextProvider;
