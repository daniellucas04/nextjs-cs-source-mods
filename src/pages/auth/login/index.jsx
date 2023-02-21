import { AiOutlineMail } from "react-icons/ai";
import { CgPassword } from "react-icons/cg";
import { getSession, signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import FastLogin from "../FastLogin";
import BackButton from "@/pages/components/BackButton";
import { requireAuthentication } from "@/utils/requireAuthentication";

export default function Login() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  function onSubmit(event) {
    event.preventDefault();
    signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
    });
  }

  return (
    <>
      <BackButton href={"/"} text={"Back to homepage"} />
      <div className="flex w-full h-full items-center justify-center mt-14">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-5 w-96 h-max bg-secondary p-10 rounded-md"
        >
          <FastLogin text={"Login"} />
          <div className="flex flex-col gap-2">
            <label
              className="flex items-center gap-2 font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <div className="input-icon">
                <AiOutlineMail size={20} />
              </div>
              <input
                value={userInfo.email}
                onChange={(event) =>
                  setUserInfo({ ...userInfo, email: event.target.value })
                }
                required
                type="email"
                autoComplete={"current-email"}
                className="input bg-primary w-[19rem] ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
                id="email"
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="flex items-center gap-2 font-bold"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <div className="input-icon">
                <CgPassword size={20} />
              </div>
              <input
                value={userInfo.password}
                onChange={(event) =>
                  setUserInfo({ ...userInfo, password: event.target.value })
                }
                required
                autoComplete={"current-password"}
                className="input bg-primary w-[19rem] p-3 pl-10 ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400"
                type="password"
                id="password"
                name="password"
              />
            </div>
          </div>
          <span className="flex gap-2">
            <input type="checkbox" id="remeber-me" />
            <label htmlFor="remeber-me">Remember me</label>
          </span>
          <button
            type="submit"
            className="bg-primary p-2 rounded-md focus:ring-2 focus:ring-indigo-700 hover:text-secondary-text hover:ring-2 hover:ring-indigo-900"
          >
            Login
          </button>
          <Link className="link-hover" href="/auth/forget-password">
            Forget password?
          </Link>
        </form>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};