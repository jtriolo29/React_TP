// Converted to FUNCTIONAL COMPONENT
import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import Logo from "../Logo";

function RefactoredSighnupForm() {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [successful, setSuccessful] = useState();

  async function addUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3030/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: newUser.firstName.toString(),
        lastName: newUser.lastName.toString(),
        email: newUser.email.toString(),
        password: newUser.password.toString(),
      }),
    });
    setSuccessful(response.ok);
    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  }

  function handleUpdatingValue(event) {
    setNewUser({
      ...newUser,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="mx-auto h-12 w-auto flex justify-center">
              <Logo />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create a New Account
            </h2>
          </div>

          {successful ? (
            <div
              className={
                successful == null
                  ? "hidden"
                  : "block bg-green-100 rounded-md text-center p-4"
              }
            >
              <div className="flex justify-center space-x-2 text-green-900 mb-1">
                <CheckCircleIcon className="w-6 h-6" />
                <h3 className="font-bold">Your user account was created!</h3>
              </div>
              <p className="font-light">
                <Link className="underline px-1" to="/">
                  Login
                </Link>
                to continue shopping.
              </p>
            </div>
          ) : (
            <div
              className={
                successful == null
                  ? "hidden"
                  : "bg-red-100 rounded-md text-center p-4"
              }
            >
              <div className="flex justify-center space-x-2 text-red-900 mb-1">
                <XCircleIcon className="w-6 h-6" />
                <h3 className="font-bold">Sorry an error occurred! </h3>
              </div>
              <p className="font-light">
                Please try register again. If registration fails a second time
                please contact our customer support at
                customersupport@logoipsom.com
              </p>
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={addUser}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="first_name" className="sr-only">
                    First Name
                  </label>
                  <input
                    id="first_name"
                    name="first_name"
                    type="first_name"
                    autoComplete="given-name"
                    required
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 
                      placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 
                      focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="First Name"
                    onChange={handleUpdatingValue}
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="last_name" className="sr-only">
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    name="last_name"
                    type="last_name"
                    autoComplete="family-name"
                    required
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 
                      placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 
                      focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Last Name"
                    onChange={handleUpdatingValue}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 
                    placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 
                    focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleUpdatingValue}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 
                    placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 
                    focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handleUpdatingValue}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent 
                  text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 
                  bg-blue-600 hover:bg-blue-500 focus:ring-blue-500"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="text-sm border-t-2 pt-4 flex justify-center">
            <a
              href="/"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Continue as Guest
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default RefactoredSighnupForm;
