import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    console.log(req.nextUrl.pathname);
    console.log(req.nextauth.token.role);

    // protect specific pages from standard members.
    if (
      req.nextUrl.pathname.startsWith("/CreateUser") &&
      req.nextauth.token.role != "admin"
    ) {
      return NextResponse.rewrite(new URL("/Denied", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // timestamp 53.55
    },
  }
);

//export { default } from "next-auth/middleware"; // protects all pages from public access
// it does not protect role specific pages from authenticated memebers. i.e. admin page is available to normal
// users.
export const config = { matcher: ["/CreateUser"] };

// NOTE: validation of email addresses not covered!
// Is middleware not being called anywhere? then how does it know it has a request
