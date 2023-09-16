import { useNavigate } from "react-router-dom";

import { useUserContext } from "../../contexts/UserContext"
import { useBookClubContext } from "../../contexts/BookClubContext"

import MultiFormContainer from "../MultiFormContainer"
import BookClubFormRequiredSection from "../BookClubFormRequiredSection"
import BookClubFormBooksSection from "../BookClubFormBooksSection"
import BookClubFormUsersSection from "../BookClubFormUsersSection"


const CreateBookClub = () => {

  const { user } = useUserContext()

  const navigate = useNavigate();

  const {
    title,
    description,
    isPublic,
    usersInvited,
    booksReading,
  } =  useBookClubContext()

  const postCreatedBookClub = async () => {

    // todo move to utils remove from both submits
    const tidyArrayData = (item) => {
      if (item.length === 0 ) return null

      return item.map(item => item.id)  
    }

    try {
      if (title === "" || description === "") throw Error("required fields missing")
   
      const body = JSON.stringify({
        title, 
        description, 
        isPublic, 
        admins: [user.userId],
        members: [user.userId],
        pendingMembership: tidyArrayData(usersInvited),
        currentlyReading: tidyArrayData(booksReading)
      })

      const response = await fetch(`http://localhost:8080/api/create-book-club`, {
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
        <div>
          <MultiFormContainer 
            forms={
              [<BookClubFormRequiredSection />,  
              <BookClubFormUsersSection />,
              <BookClubFormBooksSection />]} 
            handleSubmit={postCreatedBookClub}/>
        </div>

  )
}

export default CreateBookClub


