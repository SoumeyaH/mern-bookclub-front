import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { useUserContext } from "../../contexts/UserContext"
// todo move link to booklist when styling
import BookList from "../BookList"

const LatestBookLists = () => {
    const { user } = useUserContext()

    const [bookLists, setBookLists] = useState([])
    const [noLists, setNoLists] = useState(false)
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(
            `http://localhost:8080/api/find-user-book-lists/${user.userId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
    
          const data = await response.json();

          if (data) setLoading(false)

          if (data.unsuccessful) return setNoLists(true)

          if (data.success) {

            const sortedData = data.success
            .sort((a, b) => {
              return (
                new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
              );
            })
            .reverse()
            .slice(0, 5)

           setBookLists(sortedData)
          }      

        };
        
        fetchData();
    }, [user.token, user.userId]);

  return (
    <div>
        <p>Latest BookLists</p>

        {
          loading && <p>loading</p>
        }
        {
          noLists && <p>noLists make one</p>
        }
        
        {
        bookLists.length !== 0 && (
            bookLists.map((bookList) => {
              return <Link to={`/book-list/${bookList.title}`} state={{bookList: bookList}} key={bookList._id}> 
                {bookList.title}
              </Link>
            })
          )}

    </div> 
  )
}

export default LatestBookLists