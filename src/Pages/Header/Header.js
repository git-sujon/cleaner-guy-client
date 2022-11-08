import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/logo/logo_white.png";
import { AuthContext } from "../../Contexts/AuthProvider";

export default function NavBar() {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user)

  const signOutHandler = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="my-10 text-center">
      <Link className="mr-5" to="/">
        Home
      </Link>
      <Link to="services" className="">
        Services
      </Link>
      
      {user?.email ? (
        <button
          onClick={signOutHandler}
          className="border border-green-800 px-5 py-3"
        >
          Logout
        </button>
      ) : (
        <button className="border border-green-800 px-5 py-3">
          <Link to="/login">login</Link>
        </button>
      )}

      {user?.email && (
        <div className="flex items-center">
          <img className="w-12" src={user?.photoURL} alt="" />
          <p>{user?.email}</p>
        </div>
      )}
    </div>
  );
}
