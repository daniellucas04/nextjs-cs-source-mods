import { getSession } from "next-auth/react";

export async function requireAuthentication(context, callback) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return callback();
}