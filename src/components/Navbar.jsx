import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext)
  //* with custom hook
  // const {currentUser} = useContext();
  // const currentUser = { displayName: "Ironstone A." };
  // const currentUser = false;
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            <h4>Recat Movie App</h4>
          </Link>
          <div className="d-flex text-white align-items-center">
            {currentUser ? (
              <>
                <h5 className="mb-0 text-capitalize">
                  {currentUser.displayName}
                </h5>
                <button className="ms-2 btn btn-outline-light">Logout</button>
              </>
            ) : (
              <>
                <button className="ms-2 btn btn-outline-light" onClick={()=> navigate("/login")}>Login</button>
                <button className="ms-2 btn btn-outline-light" onClick={()=> navigate("/register")}>Register</button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
