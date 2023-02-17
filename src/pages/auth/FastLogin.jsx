import { FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"

export default function FastLogin({ text }){
  return(
    <div className="mb-4">
      <span className="flex uppercase font-semibold text-xl justify-center">
        {text}
      </span>
        <hr className="mt-3" />
      <div className="flex gap-4 mt-4 justify-center">
        <span className="bg-primary fast-signup hover:scale-105 transition ring-1 duration-500">
          <FaDiscord className="text-blue-500" size={30} />
          Discord
        </span>
        <span className="bg-primary fast-signup hover:scale-105 transition ring-1 duration-500">
          <FcGoogle size={30}/>
          Google
        </span>
      </div>
    </div>
  )
}