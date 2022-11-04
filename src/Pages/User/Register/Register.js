import React from "react";
import LoginImage from "../../../assets/images/login/login.svg";
const Register = () => {
  const HandleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  };
  return (
    <div className="grid grid-cols-1 lg:m-36 md:m-16 m-10 md:grid-cols-2">
      <div className="image">
        <img src={LoginImage} alt="" />
      </div>
      <div className="form">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl  dark:text-gray-100">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <form
            onSubmit={HandleForm}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <button className="block w-full p-3 text-center rounded-sm btn">
              Sign up
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Already have an account?
            </p>
            <a
              rel="noopener noreferrer"
              href="/login"
              className="underline dark:text-gray-100"
            >
              Sign In
            </a>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
