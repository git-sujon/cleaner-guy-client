import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import  ErrorPage from '../Pages/ErrorPage/ErrorPage' 
import Home from '../Pages/Home/Home';
import Blog from '../Pages/Blog/Blog'
import BlogDetails from '../Pages/BlogDetails/BlogDetails'
import Services from '../Pages/Services/Services';
import ServicesDetails from '../Pages/ServicesDetails/ServicesDetails';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import TermsAndCondition from '../Pages/Others/TermsAndCondition';
import Contact from '../Pages/Others/Contact'
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import MyReviews from '../Pages/Reviews/MyReviews/MyReviews';
import AddMyservices from '../Pages/MyServices/AddMyservices';











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
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      
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
                element:<MyReviews></MyReviews>,
                loader:()=> fetch(`http://localhost:5000/reviews`)
      
            },
            {
                path:'/addMyService',
                element:<AddMyservices></AddMyservices>,
      
            },
           
          
           
           
           
           
            // {
            //     path:'/blog',
            //     element: <Blog></Blog>,
            //     loader:()=>fetch('https://erudite-server-side.vercel.app/blog')
            // },
            // {
            //     path:'/blog/:id',
            //     element: <BlogDetails></BlogDetails>,
            //     loader:({params})=>fetch(`https://erudite-server-side.vercel.app/blog/${params.id}`)
            // },
           
           
          
          
          
        ]
    }
])

export default Routes;