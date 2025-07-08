import { useEffect , useState } from "react";
import { getUsers } from "../../service/api";

const Conversations = () => {
 
    const [users,setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      setUsers(response)
    };
    fetchData();
  }, []);
  return <div>Conversations</div>;
};

export default Conversations;
