import Link from "next/link";
import { Button, FormControl, FormLabel, FormSelect } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{ maxWidth: 300 }}>
      <h3>Profile</h3>
      <FormLabel htmlFor="wd-profile-username">Username</FormLabel>
      <FormControl
        id="wd-profile-username"
        defaultValue="alice"
        placeholder="username"
        className="wd-username"
      />
      <FormLabel className="mt-2" htmlFor="wd-profile-password">
        Password
      </FormLabel>
      <FormControl
        id="wd-profile-password"
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password"
      />

      <FormLabel className="mt-2" htmlFor="wd-firstname">
        First Name
      </FormLabel>
      <FormControl
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
      />

      <FormLabel className="mt-2" htmlFor="wd-lastname">
        Last Name
      </FormLabel>

      <FormControl
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
      />

      <FormLabel className="mt-2" htmlFor="wd-dob">
        Date of Birth
      </FormLabel>
      <FormControl defaultValue="2000-01-01" type="date" id="wd-dob" />

      <FormLabel className="mt-2" htmlFor="wd-email">
        Email
      </FormLabel>
      <FormControl defaultValue="alice@wonderland" type="email" id="wd-email" />

      <FormLabel className="mt-2" htmlFor="wd-role">
        Role
      </FormLabel>
      <FormSelect defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option> <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormSelect>

      <Button variant="danger" className="mt-3 w-100" href="Signin">
        {" "}
        Sign out{" "}
      </Button>
    </div>
  );
}
