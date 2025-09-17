import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <div>
        <label htmlFor="wd-signup-username">Username</label>
      </div>
      <input
        id="wd-signup-username"
        placeholder="username"
        className="wd-username"
        defaultValue={"abcd"}
      />
      <br />
      <br />
      <div>
        <label htmlFor="wd-signup-password">Password</label>
      </div>
      <input
        id="wd-signup-password"
        placeholder="password"
        type="password"
        className="wd-password"
        defaultValue={"12345678"}
      />
      <br />
      <br />
      <div>
        <label htmlFor="wd-re-enter-password">Re-enter Password</label>
      </div>
      <input
        id="wd-re-enter-password"
        placeholder="verify password"
        type="password"
        className="wd-password-verify"
        defaultValue={"12345678"}
      />
      <br />
      <br />
      <Link href="Profile"> Sign up </Link>
      <br />

      <Link href="Signin"> Sign in </Link>
    </div>
  );
}
