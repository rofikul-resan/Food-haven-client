import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserInfo = () => {
  const { user, logOut } = useContext(AuthContext);
  const { photoURL, displayName, email } = user;
  console.log(user);
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={photoURL} title={displayName} alt={displayName} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content chef-contener rounded-box w-52"
      >
        <li>
          <a className="justify-between capitalize hover:border-violet-600">
            {displayName}
          </a>
        </li>
        <li>
          <a className="hover:bg-violet-600"> Email : {email}</a>
        </li>
        <li>
          <a className="hover:bg-violet-600">Settings</a>
        </li>
        <li>
          <a
            onClick={() =>
              logOut()
                .then(() => {})
                .catch(() => {})
            }
            className="hover:bg-violet-600"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;