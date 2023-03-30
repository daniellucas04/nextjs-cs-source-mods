import { BackButton } from "@/pages/components/Components";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { CgPassword } from "react-icons/cg";

export default function Signup() {
  return (
    <main className="bg-60-white dark:bg-60-dark text-60-dark dark:text-60-white h-full pb-[14.9rem] pt-[1rem]">
      <div className="flex justify-between px-5">
        <BackButton href={"/"} text={"Back to homepage"} />
      </div>
      <div className="flex items-center justify-center mt-14 bg-60-white dark:bg-60-dark text-60-dark dark:text-60-white">
        <form className="flex-col gap-3 flex bg-30-white dark:bg-30-dark w-max p-10 rounded-md">
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
            />
          </div>

          <div className="w-[19rem] mt-2">
            <button className="text-white bg-10-white dark:bg-10-dark disabled:opacity-60 disabled:pointer-events-none p-3 w-full rounded-md focus:ring-2 focus:ring-indigo-700 hover:bg-10-white/80 dark:hover:bg-10-dark/80">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
