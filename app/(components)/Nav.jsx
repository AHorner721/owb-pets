import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  // get an authenticated session with getServerSession - note auth provider options is passed in
  const session = await getServerSession(options);
  return (
    <header>
      <nav>
        <div className="logo">OWB Pets</div>
        <div className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/Photos">Photos</Link>
          {session ? <Link href="/Member">Upload</Link> : ""}
          {session ? <Link href="/CreateUser">Create User</Link> : ""}
          {/* if there's a valid auth session display logout, else display login */}
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;

/*
The [...nextauth] in import statement means the app has dynamic routes for NextAuth.js.
In a Next.js application that use NextAuth.js, the /api/auth/signin route is not a physical file in the project. 
It's a route that is automatically handled by NextAuth.js. 
*/
