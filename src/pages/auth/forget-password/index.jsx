import { Title } from "@/pages/components/typography/Typography";

import { BackButton } from "@/pages/components/Components";
import { useState } from "react";

export default function ForgetPassoword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const disabledButton =
    (!password && !confirmPassword) || password !== confirmPassword;

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleConfirmCode() {
    let codeConfirm = 34356;
    if (codeConfirm === code) {
      setIsConfirmed(true);
    } else {
      setIsConfirmed(false);
    }
  }

  return (
    <main className="bg-60-white dark:bg-60-dark text-60-dark dark:text-60-white h-full pb-[14.1rem] pt-[1rem]">
      <div className="flex justify-between px-5">
        <BackButton href={"/auth/login"} text={"Back to login"} />
      </div>
      <section className="flex w-full h-full items-center justify-center mt-14 text-60-dark dark:text-60-white">
        <div className="flex p-12 rounded-md flex-col bg-30-white dark:bg-30-dark gap-5 mt-2">
          <span className="flex justift-center w-full -mt-10">
            <Title text={"Recover Password"} />
          </span>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Enter your account Email</label>
            <input
              className="input p-3 bg-60-white dark:bg-60-dark focus:ring-2 focus:ring-indigo-400"
              id="email"
            />
            <button className="bg-10-white text-white dark:bg-10-dark p-3 rounded-md hover:bg-10-white/80 dark:hover:bg-10-dark/80 ">
              Send Code
            </button>
          </div>
          <div className="flex gap-5 items-center">
            <button
              onClick={handleConfirmCode}
              className="bg-green-500 focus:ring-2 focus:ring-white font-bold hover:bg-green-600 cursor-pointer text-primary-text p-2 rounded-lg"
            >
              Confirm code
            </button>
            <input
              onChange={(event) => setCode(Number(event.target.value))}
              className="input p-3 bg-60-white dark:bg-60-dark focus:ring-2 focus:ring-indigo-400"
              type="text"
              id="code-confirmation"
            />
          </div>
          <div>
            {isConfirmed ? (
              <span className="text-green-500">Code has been confirmed!</span>
            ) : (
              <span className="text-red-500">Invalid Code!</span>
            )}
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                onChange={(event) => setPassword(event.target.value)}
                className="input p-3 bg-60-white dark:bg-60-dark focus:ring-2 focus:ring-indigo-400"
                type="password"
              />
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="input p-3 bg-60-white dark:bg-60-dark focus:ring-2 focus:ring-indigo-400"
                type="password"
              />
              <button
                disabled={disabledButton}
                className="bg-10-white text-white dark:bg-10-dark hover:bg-10-white/80 dark:bg-10-dark/80 disabled:opacity-60 disabled:pointer-events-none p-3 rounded-md focus:ring-2"
              >
                Create new password
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
