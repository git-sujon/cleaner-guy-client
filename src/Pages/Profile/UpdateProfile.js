import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import WellComeing from "../Others/WellComeing";
import Profile from "./Profile";

const UpdateProfile = () => {
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

    
    </div>
  );
};

export default UpdateProfile;
