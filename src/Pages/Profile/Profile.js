import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import UseTitle from '../../Hooks/UseTitle';
import WellComeing from '../Others/WellComeing';


const Profile = () => {
  UseTitle('Profile')
  const {user} = useContext(AuthContext)

  const withUs= new Date(user?.metadata?.creationTime).toDateString()
  const [reviewCount,setReviewCount ] = useState([])

  useEffect(()=>{
    axios.get(`https://cleaner-guy-server.vercel.app/reviews?userEmail=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("CleanerGuy")}`,
      },
    })
    .then(res=> setReviewCount(res.data))
  }, [user?.email])


    return (

      <div className='bg-green-100'>
        <WellComeing></WellComeing>
          <div className=" font-sans  w-full flex flex-row justify-center items-center">
          <div className="card w-96 mx-auto rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl hover:shadow">
            <div className='rounded-xl bg-white p-6 sm:p-8'>
            <img className="w-32 mx-auto rounded-full -mt-20 border-2 border-white" src={user?.photoURL} alt=""/>
             <p className="text-center mt-2 text-3xl font-medium">{user?.displayName}</p>
             <p className="text-center mt-2 font-bold text-md text-gray-600 ">{user?.email}</p>
             <div className="text-center font-bold text-lg">{user?.emailVerified ? <div className='text-green-600 flex flex-row-reverse items-center justify-center'><p>Verified</p><p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p></div> : <p className='text-red-600'>Not Verified</p> }</div>
             <div className="px-6 text-center mt-1 font-light text-sm">
               <p className='text-md '>
                 <span className='tracking-widest'>Happy Clients Since</span><br/> <span className='text-xl font-semibold'>{withUs}</span>
               </p>
             </div>
             <hr className="mt-1"/>
             <div className="flex pt-2">
               <div className="w-1/2 text-center">
                 <span className="font-bold text-blue-700">03 </span> Rank
               </div>
               <div className="w-0 border border-gray-300">
                 
               </div>
               <div className="w-1/2 text-center">
                 <span className="font-bold text-green-700"> {reviewCount?.length} </span> {reviewCount?.length >2 ? 'Reviews': 'Review'}  Given
               </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;