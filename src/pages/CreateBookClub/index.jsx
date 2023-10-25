import BookClubContextProvider from "../../contexts/BookClubContext"

import CreateBookClub from "../../components/CreateBookClub"

const CreateBookClubPage = () => {
    
  return (
    <BookClubContextProvider>  
        <div>
            <CreateBookClub /> 
        </div>
    </BookClubContextProvider>
  )
}

export default CreateBookClubPage