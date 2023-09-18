import { useNavigate } from "react-router-dom";

import { useUserContext } from "../../contexts/UserContext"
import { useBookListContext } from "../../contexts/BookListContext"

import BookClubFormBooksSection from "../BookClubFormBooksSection"
import BookClubFormRequiredSection from "../BookClubFormRequiredSection"
import MultiFormContainer from "../MultiFormContainer"

const CreateBookList = () => {

  const { user } = useUserContext()

  const navigate = useNavigate();

  const {
    title,
    description,
    isPublic,
    booksReading,
  } =  useBookListContext()

  const postCreatedBookClub = async () => {
    // todo move to utils remove from both submits
    const tidyArrayData = (item) => {
      if (item.length === 0 ) return null

      return item.map(item => item.id)  
    }

    if (title === "" || description === "") throw Error("required fields missing")
  
  try {
    if (title === "" || description === "") throw Error("required fields missing")
 
    const body = JSON.stringify({
      userId: user.userId,
      title, 
      description, 
      isPublic,
      books: tidyArrayData(booksReading),
    })

    const response = await fetch(`http://localhost:8080/api/create-book-list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body,
    });

    if (response.status === 200) navigate("/dashboard")
    
    if (response.status !== 200) throw Error("server error")
    // todo handle errors better

  } catch (err) {
    console.log(err)
    // todo setError and display
  }
  }

  return (
    <>
    <div>CreateBookList</div>
    <MultiFormContainer 
      forms={
        [<BookClubFormRequiredSection />,  
        <BookClubFormBooksSection />]}
        handleSubmit={postCreatedBookClub}/>
    </>
    )
}

export default CreateBookList