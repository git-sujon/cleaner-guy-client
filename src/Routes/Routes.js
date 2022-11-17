import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import  ErrorPage from '../Pages/ErrorPage/ErrorPage' 
import Home from '../Pages/Home/Home';
import Blog from '../Pages/Blog/Blog'
import BlogDetails from '../Pages/Blog/BlogDetails/BlogDetails'
import Services from '../Pages/Services/Services';
import ServicesDetails from '../Pages/Services/ServicesDetails/ServicesDetails';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import TermsAndCondition from '../Pages/Others/TermsAndCondition';
import Contact from '../Pages/Contact/Contact'
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import MyReviews from '../Pages/Reviews/MyReviews/MyReviews';
import AddMyservices from '../Pages/MyServices/AddMyservices';
import UpdateReviews from '../Pages/Reviews/UpdateReviews';
import PrivateRoute from './PrivateRoute';
import UpdateProfile from '../Pages/Profile/UpdateProfile';
import Profile from '../Pages/Profile/Profile';











const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
      
            },
            {
                path:'/services',
                element:<Services></Services>,
      
            },
           
            {
                path:'/services/:id',
                element:<ServicesDetails></ServicesDetails>,
                loader:({params})=> fetch(`https://cleaner-guy-server.vercel.app/services/${params.id}`)
      
            },

            {
                path:'/login',
                element:<Login></Login>,
      
            },
            {
                path:'/register',
                element:<Register></Register>,
      
            },
           
            {
                path:'/termsAndCondition',
                element:<TermsAndCondition></TermsAndCondition>,
      
            },
            {
                path:'/contact',
                element:<Contact></Contact>,
      
            },
            {
                path:'/forgotPassword',
                element:<ForgotPassword></ForgotPassword>,
      
            },
            {
                path:'/myReviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
         
      
            },
            {
                path:'/myReviews/:id',
                element:<PrivateRoute><UpdateReviews></UpdateReviews></PrivateRoute>,
                loader:({params})=> fetch(`https://cleaner-guy-server.vercel.app/reviews/${params.id}`)
      
            },
            {
                path:'/addMyService',
                element:<PrivateRoute><AddMyservices></AddMyservices></PrivateRoute>,
      
            },
       
           {
                path: '/updateProfile',
                element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
           },
           {
                path: '/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>,
           },
          
           
           
           
           
            {
                path:'/blog',
                element: <Blog></Blog>,
                loader:()=>fetch('https://cleaner-guy-server.vercel.app/blog')
            },
            {
                path:'/blog/:id',
                element: <BlogDetails></BlogDetails>,
                loader:({params})=>fetch(`https://cleaner-guy-server.vercel.app/blog/${params.id}`)
            },
           
           
          
          
          
        ]
    }
])

export default Routes;