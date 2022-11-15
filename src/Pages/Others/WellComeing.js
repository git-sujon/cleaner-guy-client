import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const WellComeing = () => {
    const {user} = useContext(AuthContext)
    return (
        <header aria-label="Page Header">
        <div className="mx-auto bg-transparent max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Welcome Back, {user?.displayName}!
              </h1>
      
              <p className="mt-1.5 text-sm text-gray-500">
              Hope you had a great time, and we're happy to have you back! 🤝 🎉 🥂
              </p>
            </div>
      
            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <Link to='/updateProfile' className="text-sm font-medium"> Edit Your Profile </Link>
      
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1.5 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
      
              <Link to='/profile'
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
      </header>
      
    );
};

export default WellComeing;