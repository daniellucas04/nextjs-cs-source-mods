import { BackButton } from "@/pages/components/Components";
import { useState } from "react";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { CgPassword } from "react-icons/cg";
import FastLogin from "../FastLogin";

export default function Signup() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cPassword, setCPassword] = useState();

  async function signUp() {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        cpassword: cpassword,
      }),
    };

    await fetch("http:localhost:3000/api/signup", postData)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <main className="bg-60-white dark:bg-60-dark text-60-dark dark:text-60-white h-screen pb-[14.9rem] pt-[1rem]">
      <div className="flex justify-between px-5">
        <BackButton href={"/"} text={"Back to homepage"} />
      </div>
      <div className="flex items-center justify-center mt-14 bg-60-white dark:bg-60-dark text-60-dark dark:text-60-white">
        <form className="flex-col gap-3 flex bg-30-white dark:bg-30-dark w-max p-10 rounded-md">
          <FastLogin text={"Sign up"} />
          <label className="text-lg text-left" htmlFor="username">
            Username
          </label>
          <div className="relative">
            <div className="input-icon">
              <AiOutlineUser size={20} />
            </div>
            <input
              required
              className="input bg-60-white dark:bg-60-dark w-[19rem] focus:ring-2 focus:ring-indigo-700 p-3 pl-10"
              type="text"
              id="username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <label className="text-lg" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <div className="input-icon">
              <AiOutlineMail size={20} />
            </div>
            <input
              required
              className="input bg-60-white dark:bg-60-dark w-[19rem] focus:ring-2 focus:ring-indigo-700 p-3 pl-10"
              type="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <label className="text-lg" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <div className="input-icon">
              <CgPassword size={20} />
            </div>
            <input
              required
              autoComplete="new-password"
              className="input bg-60-white dark:bg-60-dark w-[19rem] focus:ring-2 focus:ring-indigo-700 p-3 pl-10"
              type="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <label className="text-lg" htmlFor="confirm-password">
            Confirm Password
          </label>
          <div className="relative">
            <div className="input-icon">
              <CgPassword size={20} />
            </div>
            <input
              required
              autoComplete="new-password"
              className="input bg-60-white dark:bg-60-dark w-[19rem] focus:ring-2 focus:ring-indigo-700 p-3 pl-10"
              type="password"
              id="confirm-password"
              onChange={(event) => setCPassword(event.target.value)}
            />
          </div>

          <div className="w-[19rem] mt-2">
            <button
              onClick={signUp}
              className="text-white bg-10-white dark:bg-10-dark disabled:opacity-60 disabled:pointer-events-none p-3 w-full rounded-md focus:ring-2 focus:ring-indigo-700 hover:bg-10-white/80 dark:hover:bg-10-dark/80"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
