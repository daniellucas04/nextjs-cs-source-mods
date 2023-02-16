
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { CgPassword } from "react-icons/cg";
import FastLogin from "../FastLogin";

export default function Signup(){

  return(
    <div className="flex items-center justify-center mt-14">
      <form onSubmit={submitSignup} className="flex-col gap-3 flex bg-secondary w-max p-10">
        <FastLogin text={"Sign Up"} />
        <label className="text-lg text-left" htmlFor="username">Username</label>
        <div className="relative">
          <div className="input-icon">
          <AiOutlineUser size={20}/>
          </div>
          <input required className="input bg-primary w-[19rem] ring-1 ring-indigo-600 focus:ring-2 focus:ring-indigo-700 p-3 pl-10" type="text" id="username"/>
        </div>
        
        <label className="text-lg" htmlFor="email">Email</label>
        <div className="relative">
          <div className="input-icon">
            <AiOutlineMail size={20}/>
          </div>
          <input required className="input bg-primary w-[19rem] ring-1 ring-indigo-600 focus:ring-2 focus:ring-indigo-700 p-3 pl-10" type="email" id="email" />
        </div>

        <label className="text-lg" htmlFor="password">Password</label>
        <div className="relative">
          <div className="input-icon">
            <CgPassword size={20}/>
          </div>
          <input required onChange={(event) => setPassword(event.target.value)} className="input bg-primary w-[19rem] ring-1 ring-indigo-600 focus:ring-2 focus:ring-indigo-700 p-3 pl-10" type="password" id="password"/>
        </div>
          
        <label className="text-lg" htmlFor="confirm-password">Confirm Password</label>
        <div className="relative">
          <div className="input-icon">
            <CgPassword size={20}/>
          </div>
          <input required className="input bg-primary w-[19rem] ring-1 ring-indigo-600 focus:ring-2 focus:ring-indigo-700 p-3 pl-10" type="password" id="confirm-password"/>
        </div>
          
        <div className="w-[19rem] mt-2">
          <button disabled={disabledButton} className="bg-primary disabled:opacity-60 disabled:pointer-events-none p-3 w-full rounded-md focus:ring-2 focus:ring-indigo-700 hover:text-secondary-text hover:ring-2 hover:ring-indigo-900">Sign Up</button>
        </div>
      </form>
    </div>
  )
}