import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="NavbarMainContainer">
      <div>Logo</div>
      <div>
        <Link to={"/register"}>
          <div>Start Free Trial</div>
        </Link>
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
