import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { BsPencil } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";

const ProfileModal = () => {
  const { user, updateUserData } = useContext(AuthContext);
  const [editForm, setEditFrom] = useState(false);

  const updateData = (event) => {
    event.preventDefault();
    const inputForm = event.target;
    const inputPhotoUrl = inputForm.photoUrl.value || null;
    const name = inputForm.name.value || null;
    updateUserData(name, inputPhotoUrl)
      .then(() => {
        toast("Profile update successful");
        setEditFrom(false);
      })
      .catch();
    inputForm.reset();
  };

  return (
    <div>
      <input
        onChange={() => setEditFrom(false)}
        type="checkbox"
        id="my-modal-5"
        className="modal-toggle"
      />
      <label
        data-theme="dark"
        htmlFor="my-modal-5"
        className="modal cursor-pointer"
      >
        <label className="modal-box w-3/4 relative" htmlFor="">
          <button
            onClick={() => setEditFrom(!editForm)}
            className="absolute top-6 right-8 z-10 btn btn-outline btn-success rounded-full  "
            title="Edit Profile"
          >
            <BsPencil className="text-white" />
          </button>
          {!editForm ? (
            <div className="w-[90%] mx-auto ">
              <div className="w-20 h-20 border-[5px] border-green-600 overflow-hidden mx-auto rounded-full">
                <img
                  src={user?.photoURL || "/pfl-demo.jpg"}
                  title={user?.displayName}
                  alt={user?.displayName || "demo pic"}
                />
              </div>
              <div className="text-center">
                <h1> {user?.displayName || "Not set Yet"}</h1>
                <h3> Email : {user?.email || "Not set Yet"}</h3>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-center">Edit Your Profile</h3>
              <form onSubmit={updateData}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Photo"
                    className="input input-bordered"
                    name="photoUrl"
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </label>
      </label>
      <ToastContainer />
    </div>
  );
};

export default ProfileModal;
