import Link from "next/link";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <div>
        <label htmlFor="wd-profile-username">Username</label>
      </div>
      <input
        id="wd-profile-username"
        defaultValue="alice"
        placeholder="username"
        className="wd-username"
      />
      <br />
      <br />
      <div>
        <label htmlFor="wd-profile-password">Password</label>
      </div>
      <input
        id="wd-profile-password"
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password"
      />
      <br />
      <br />
      <div>
        <label htmlFor="wd-firstname">First Name</label>
      </div>
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" />
      <br />
      <br />
      <div>
        <label htmlFor="wd-lastname">Last Name</label>
      </div>
      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
      />
      <br />
      <br />
      <div>
        <label htmlFor="wd-dob">Date of Birth</label>
      </div>
      <input defaultValue="2000-01-01" type="date" id="wd-dob" />
      <br />
      <br />
      <div>
        <label htmlFor="wd-email">Email</label>
      </div>
      <input defaultValue="alice@wonderland" type="email" id="wd-email" />
      <br />
      <br />
      <div>
        <label htmlFor="wd-role">Role</label>
      </div>
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option> <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <br />
      <Link href="Signin"> Sign out </Link>
    </div>
  );
}
