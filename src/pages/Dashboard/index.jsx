import { useNavigate } from "react-router-dom";

import { useUserContext } from "../../contexts/UserContext";
import LatestBookClubs from "../../components/LatestBookClubs";
import LatestBookLists from "../../components/LatestBookLists";

const DashboardPage = () => {
  const navigate = useNavigate();

  const { user } = useUserContext();

  return <div>
    <div>{user.username}'s dashboard</div>   

    <button onClick={() => navigate("/create-book-club")}>create book club</button>
    <button onClick={() => navigate("/create-book-list")}>create book list</button>
    <LatestBookClubs />
    <LatestBookLists />
  </div>
}

export default DashboardPage