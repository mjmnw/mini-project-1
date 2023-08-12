import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
import { login } from "../Redux/Reducer/Auth";
import { useEffect } from "react";

const KeepLogin = ({ children }) => {
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const router = useLocation();

  const refresh = async () => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      dispatch(login(userData));
    } else if (!userData) {
    //   navigate("/login2");
      console.log("halo")
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