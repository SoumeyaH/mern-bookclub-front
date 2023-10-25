import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useBookClubContext } from "../../contexts/BookClubContext"

import MultiFormContainer from "../MultiFormContainer"
import BookClubFormRequiredSection from "../BookClubFormRequiredSection"
import BookClubFormBooksSection from "../BookClubFormBooksSection"
import BookClubFormUsersSection from "../BookClubFormUsersSection"

const EditBookClubComponent = () => {
  const location = useLocation()
  const { bookClub } = location.state

  console.log(bookClub)

  const {
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
  } =  useBookClubContext()

  useEffect(()=> {
    setTitle(bookClub.title)
    setDescription(bookClub.description)
    setIsPublic(bookClub.isPublic)
    setUsersInvited(bookClub.usersInvited === undefined ? bookClub.usersInvited = [] : bookClub.usersInvited)
    setBooksReading(bookClub.booksReading === undefined ? bookClub.booksReading = [] : bookClub.booksReading)
  }, [])

  console.log(title, description, isPublic, usersInvited, booksReading)

  const postEditedBookClub = () => {

  }

  return ( 
    <>EditBookClubComponent here
      <div>
          <MultiFormContainer 
            forms={
              [<BookClubFormRequiredSection />,  
              <BookClubFormUsersSection />,
              <BookClubFormBooksSection />]} 
            handleSubmit={postEditedBookClub}/>
        </div>
    
    </>
  )
}

export default EditBookClubComponent