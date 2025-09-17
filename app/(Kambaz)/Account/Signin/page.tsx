import Link from "next/link";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <div>
        <label htmlFor="wd-signin-username">Username</label>
      </div>
      <input
        placeholder="username"
        id="wd-signin-username"
        className="wd-username"
        defaultValue={"abcd"}
      />
      <br />
      <br />
      <div>
        <label htmlFor="wd-signin-password">Password</label>
      </div>
      <input
        id="wd-signin-password"
        placeholder="password"
        type="password"
        className="wd-password"
        defaultValue={"12345678"}
      />
      <br />
      <br />
      <Link href="/Dashboard" id="wd-signin-btn">
        Sign in
      </Link>
      <br />
      <Link href="Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
