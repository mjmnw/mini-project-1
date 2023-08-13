import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
import { login } from "../Redux/Reducer/Auth";
import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const KeepLogin = ({ children }) => {
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation()
  const navigate = useNavigate()

  const refresh = async () => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      dispatch(login(userData));
    } else if (!userData && location.pathname.includes("transaction-confirmation")) {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (!userSelector.id) {
      refresh();
    }
  }, [userSelector.id]);

  return children;
};

export default KeepLogin;