import { useLocation, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../contexts/UserContext'

const BookClubPage = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const { bookClub } = location.state

    const { user } = useUserContext()

    
    const handleDelete = async () => {
        const response = await fetch(
            `http://localhost:8080/api/delete-book-club/${bookClub._id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
            }
            );
        
        if (response.status === 200) navigate("/dashboard")
        
    }
    
    // todo check user is admin otherwise hide edit and delete buttons 
        return (
            <div>
        <p>BookClubPage {bookClub.title}</p>
        <>
            <button onClick={handleDelete}>delete</button>
        </>
    </div>
  )
}

export default BookClubPage
