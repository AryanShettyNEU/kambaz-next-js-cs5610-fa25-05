import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Monu</span>
              <span className="wd-last-name"> Smart</span>
            </td>
            <td className="wd-login-id">0012345666</td>
            <td className="wd-section">S106</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-06</td>
            <td className="wd-total-activity">12:22:36</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">David </span>
              <span className="wd-last-name">Bones</span>
            </td>
            <td className="wd-login-id">0112345666</td>
            <td className="wd-section">S116</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-09</td>
            <td className="wd-total-activity">10:30:37</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Natasha </span>
              <span className="wd-last-name">Romanoff</span>
            </td>
            <td className="wd-login-id">01923495669</td>
            <td className="wd-section">S217</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-11-09</td>
            <td className="wd-total-activity">14:21:37</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Ash </span>
              <span className="wd-last-name">Ketchum</span>
            </td>
            <td className="wd-login-id">01333495669</td>
            <td className="wd-section">S428</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-11-01</td>
            <td className="wd-total-activity">08:21:37</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
