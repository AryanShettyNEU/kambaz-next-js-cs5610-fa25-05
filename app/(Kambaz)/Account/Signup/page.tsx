import Link from "next/link";
import { Button, FormControl, FormLabel } from "react-bootstrap";
export default function Signup() {
  return (
    <div
      id="wd-signup-screen"
      style={{
        maxWidth: 300,
      }}
    >
      <h3>Sign up</h3>
      <FormLabel htmlFor="wd-signup-username">Username</FormLabel>
      <FormControl
        id="wd-signup-username"
        placeholder="username"
        className="wd-username"
        defaultValue={"abcd"}
      />

      <FormLabel htmlFor="wd-signup-password" className="mt-3">
        Password
      </FormLabel>
      <FormControl
        id="wd-signup-password"
        placeholder="password"
        type="password"
        className="wd-password"
        defaultValue={"12345678"}
      />

      <FormLabel htmlFor="wd-re-enter-password" className="mt-3">
        Re-enter Password
      </FormLabel>
      <FormControl
        id="wd-re-enter-password"
        placeholder="verify password"
        type="password"
        className="wd-password-verify"
        defaultValue={"12345678"}
      />

      <Button className="w-100 my-3" href="Profile">
        Sign up{" "}
      </Button>
      <br />

      <Link href="Signin"> Sign in </Link>
    </div>
  );
}
