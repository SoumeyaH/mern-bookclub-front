import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { useUserContext } from "../../contexts/UserContext"

import BookClub from "../BookClub"

const LatestBookClubs = () => {
    const { user } = useUserContext()

    const [bookClubs, setBookClubs] = useState([])
    const [noClubs, setNoClubs] = useState(false)
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

          if (data) setLoading(false)

          if (data.unsuccessful) return setNoClubs(true)

          if (data.success) {
            const sortedData = data.success
              .sort((a, b) => {
                return (
                  new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
                );
              })
              .reverse()
              .slice(0, 5)
            setBookClubs(sortedData)
          }

        };
        
        fetchData();
    }, [user.token, user.userId]);
    
    // todo switch to uuid on all pages
  return (
    <div>
        <p>Latest BookClubs</p>

        {
          loading && <p>loading</p>
        }
        {
          noClubs && <p>noClubs make one</p>
        }
    {bookClubs.length !== 0 &&  (
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