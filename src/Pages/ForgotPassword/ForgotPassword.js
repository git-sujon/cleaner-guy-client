import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const ForgotPassword = () => {

    const {userPasswordReset} = useContext(AuthContext)

    const passwordResetHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        userPasswordReset(email)
        .then(() => {
            toast.success("Check Your Email")
        })
        .catch(err=> {
            console.error(err);
        })
    }

    return (
        <div>
         
<body className="font-mono w-screen h-screen bg-green-100">
		
		<div className="container mx-auto">
			<div className="flex justify-center p-20 ">
			
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
				
					<div
						className="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						style={{backgroundImage: "url('https://img.freepik.com/premium-vector/forgot-password-illustration_65141-418.jpg')"}}
					></div>
				
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<div className="px-8 mb-4 text-center">
							<h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
							<p className="mb-4 text-sm text-gray-700">
								We get it, stuff happens. Just enter your email address below and we'll send you Link
								link to reset your password!!
							</p>
						</div>
						<form
                        onSubmit={passwordResetHandler}
                         className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
									Email
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
                                    name='email'
									placeholder="Enter Email Address..."
								/>
							</div>
							<div className="mb-6 text-center">
								<button
                                
									className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Reset Password
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<Link to='/register'
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./register.html"
								>
									Create an Account!
								</Link>
							</div>
							<div className="text-center">
								<Link to='/login'
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./index.html"
								>
									Already have an account? Login!
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</body>
        </div>
    );
};

export default ForgotPassword;