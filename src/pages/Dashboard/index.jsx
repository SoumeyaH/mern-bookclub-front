import { useNavigate } from "react-router-dom";

import { useUserContext } from "../../contexts/UserContext";
import LatestBookClubs from "../../components/LatestBookClubs";

const DashboardPage = () => {
  const navigate = useNavigate();

  const { user } = useUserContext();

  return <div>
    <div>{user.username}'s dashboard</div>   

    <button onClick={() => navigate("/create-book-club")}>create book club</button>
    <LatestBookClubs />
  </div>
}

export default DashboardPage