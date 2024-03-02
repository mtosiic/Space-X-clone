import Navtabs from "./NavTabs";
import { ReactComponent as Logo } from "../../assets/SpaceX-Logo.svg";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Logo
        fill="white"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      <Navtabs />
    </div>
  );
};

export default Navbar;
