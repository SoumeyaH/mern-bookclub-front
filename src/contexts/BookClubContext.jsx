import { createContext, useContext, useState, useMemo } from 'react';

const BookClubContext = createContext("");

export const useBookClubContext = () => useContext(BookClubContext);

function BookClubContextProvider(props) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isPublic, setIsPublic] = useState("public")
  const [usersInvited, setUsersInvited] = useState([])
  const [booksReading, setBooksReading] = useState([])

  const value = useMemo(() => ({
    title,
    setTitle,
    description,
    setDescription,
    isPublic,
    setIsPublic,
    usersInvited,
    setUsersInvited,
    booksReading,
    setBooksReading,
  }), [title, description, isPublic, usersInvited, booksReading]);

  return (
    <BookClubContext.Provider value={value}>{props.children}</BookClubContext.Provider>
  );
};

export default BookClubContextProvider;
