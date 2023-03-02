import { FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { getSession, signIn } from "next-auth/react";

export default function FastLogin({ text }) {
  return (
    <div className="mb-4">
      <span className="flex uppercase font-semibold text-xl justify-center">
        {text}
      </span>
      <div className="mt-3 h-[1px] bg-60-dark dark:bg-60-white" />
      <div className="flex gap-4 mt-4 justify-center">
        <span
          onClick={() => signIn("discord")}
          className="bg-60-white dark:bg-60-dark text-60-dark dark:text-60-white fast-signup hover:scale-105 transition ring-1 duration-500"
        >
          <FaDiscord className="text-blue-500" size={30} />
          Discord
        </span>
        <span
          onClick={() => {
            signIn("google");
          }}
          className="bg-60-white dark:bg-60-dark text-60-dark dark:text-60-white fast-signup hover:scale-105 transition ring-1 duration-500"
        >
          <FcGoogle size={30} />
          Google
        </span>
      </div>
    </div>
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
