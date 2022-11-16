import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseTitle from "../../Hooks/UseTitle";
import WellComeing from "../Others/WellComeing";
import Profile from "./Profile";

const UpdateProfile = () => {
  UseTitle('Update Profile')
  const { user ,  userInformationProviding,  emailVarification,} = useContext(AuthContext);
const navigate = useNavigate()

  const updateProfileHandler = (event) =>{
    event.preventDefault()

    const fullName=event.target.first_name.value + ' ' +event.target.last_name.value
    const photoURL= event.target.photoUrl.value
    console.log(fullName , photoURL)
    const profile= {
        displayName: fullName, photoURL,
      }
    userInformationProviding(profile)
    .then(()=>{
        toast.success("Profile Update")
        navigate('/profile')

    })
    .catch(err=> {
        console.error(err);
    })

     


  }

  return (
    <div className="bg-green-100 ">

    <WellComeing></WellComeing>

    <div className="md:w-1/2 px-10 mx-auto py-10">
        <h1 className="text-center text-5xl font-bold mb-10">Update Your Profile</h1>
        <form onSubmit={updateProfileHandler}>
          <div className="grid xl:grid-cols-2 gap-6">
            <div className="relative z-0  w-full group">
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                defaultValue={user?.displayName?.split(' ')[0]}
                required
              />
              <label
                htmlFor="first_name"
                className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0  w-full group">
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                defaultValue={user?.displayName?.split(' ')[1]}
                required
              />
              <label
                htmlFor="last_name"
                className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>

          <div className="relative z-0 mb-6 w-full group my-4">
            <input
              type="email"
              name="email"
              readOnly
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              defaultValue={user?.email}
              required
            />
            <label
              htmlFor="email"
              className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="relative z-0 mb-6 w-full group my-4">
            <input
              type="text"
              name="photoUrl"
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              defaultValue={user?.photoURL}
              required
            />
            <label
              htmlFor="photoUrl"
              className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              PhotoUrl
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
