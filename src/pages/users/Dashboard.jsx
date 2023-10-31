import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../redux/actions/authActions";

const Dashboard = () => {
  // To set the state of the store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access the store
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe(navigate, null, null));
  }, [dispatch, navigate]);

  return (
    <Container className="p-4" style={{ marginTop:"100px" }}>
      <h1 className="text-center">
        Hallo, {user?.name} with {user?.email}!
      </h1>
    </Container>
  );
}

export default Dashboard;