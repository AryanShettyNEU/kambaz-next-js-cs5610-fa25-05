import Link from "next/link";
import { Button, FormControl, FormLabel } from "react-bootstrap";
export default function Signin() {
  return (
    <div
      id="wd-signin-screen"
      style={{
        maxWidth: 300,
      }}
    >
      <h3>Sign in</h3>
      <FormLabel htmlFor="wd-signin-username">Username</FormLabel>
      <FormControl
        placeholder="username"
        id="wd-signin-username"
        className="wd-username"
        defaultValue={"abcd"}
      />

      <FormLabel htmlFor="wd-signin-password" className="mt-3">
        Password
      </FormLabel>
      <FormControl
        id="wd-signin-password"
        placeholder="password"
        type="password"
        className="wd-password"
        defaultValue={"12345678"}
      />

      <Button href="/Dashboard" id="wd-signin-btn" className="w-100 my-3">
        Sign in
      </Button>
      <br />
      <Link href="Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
