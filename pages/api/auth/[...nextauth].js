import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret:process.env.SECRET,
  pages: {
    signIn: "/auth/signin",
  }
}

export default (req, res) => NextAuth(req, res, options)