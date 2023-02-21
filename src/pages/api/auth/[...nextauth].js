import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  providers: [
    GoogleProvider({
      clientId: "861189373414-mm08g25aveqre7bbdvdona7jjs50gpjv.apps.googleusercontent.com",
      clientSecret: "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"
    }),
    CredentialsProvider({
      type: 'credentials',
      name: 'authentication',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        if (email !== 'master@email.com' || password !== 'master') {
          throw new Error('invalid credentials')
        } else {
          return { id: 1, name: 'master', email: 'master@email.com', image: 'https://github.com/daniellucas04.png' }
        }
      }
    }),
    DiscordProvider({
      clientId: '1077591672717856852',
      clientSecret: '3IVhyKAk9wgDXB68p-7FliJWZ_Ga_obU',
    })
  ],
  secret: process.env.SECRET,
})