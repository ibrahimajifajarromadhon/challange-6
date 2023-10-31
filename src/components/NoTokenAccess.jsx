import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMe } from "../redux/actions/authActions";

const NoTokenAccess = ({ children }) => {
  // To set the state of the store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMe(navigate, "/", null));
  }, [navigate, dispatch]);

  return children;
}

export default NoTokenAccess;