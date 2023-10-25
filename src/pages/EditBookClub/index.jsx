import BookClubContextProvider from "../../contexts/BookClubContext"

import EditBookClubComponent from '../../components/EditBookClubComponent'


const EditBookClub = () => {
  

  return (
    <>
    <div>EditBookClub</div>
    <BookClubContextProvider>
      <EditBookClubComponent />
    </BookClubContextProvider>
    </>
  )
}

export default EditBookClub

