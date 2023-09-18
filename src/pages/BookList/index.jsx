import { useLocation, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../contexts/UserContext'

const BookListPage = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const { bookList } = location.state

    const { user } = useUserContext()

    
    const handleDelete = async () => {
        const response = await fetch(
            `http://localhost:8080/api/delete-book-list/${bookList._id}`,
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
    
    // todo check users booklist otherwise hide edit and delete buttons 
        return (
            <div>
        <p>BookListPage: {bookList.title}</p>
        <>
            <button onClick={handleDelete}>delete</button>
        </>
    </div>
  )
}

export default BookListPage
