import { useUserContext } from "../../contexts/UserContext";

const DashboardPage = () => {
  const { user } = useUserContext();

  return <div>{user.username}'s dashboard</div>;
}

export default DashboardPage