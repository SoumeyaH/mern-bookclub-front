import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { useUserContext } from "../../contexts/UserContext"

import BookClub from "../BookClub"

const LatestBookClubs = () => {
    const { user } = useUserContext()

    const [bookClubs, setBookClubs] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(
            `http://localhost:8080/api/find-user-book-clubs/${user.userId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
    
          const data = await response.json();

          // todo optional chaining on data.success data.error
          const sortedData = data.success
            .sort((a, b) => {
              return (
                new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
              );
            })
            .reverse()
            .slice(0, 5)

          setLoading(false)
          setBookClubs(sortedData)

        };
        
        fetchData();
    }, [user.token, user.userId]);

    // /book-club/:title
    
    // todo add loading and switch to uuid on all pages
  return (
    <div>
        <p>Latest BookClubs</p>
    {loading ? (
        <p>loading</p>
      ) : (
        bookClubs.map((bookClub) => {
          return <Link to={`/book-club/${bookClub.title}`} state={{bookClub: bookClub}} key={bookClub._id}> 
            {bookClub.title}
          </Link>
        })
      )}

    </div> 
  )
}

export default LatestBookClubs