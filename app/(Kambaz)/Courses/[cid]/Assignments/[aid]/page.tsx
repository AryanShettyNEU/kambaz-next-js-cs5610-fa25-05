export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h3>Assignment Name</h3>
      </label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        rows={9}
        cols={42}
        defaultValue={
          "The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."
        }
      />
      <br />
      <table cellPadding="8">
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZ">QUIZ</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="PERCENTAGE">Percentage</option>
                <option value="LETTER_GRADE">Letter Grade</option>
                <option value="LETTER_GRADE">Letter Grade</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="ONLINE">Online</option>
                <option value="OFFLINE">Offline</option>
              </select>
              <br />
              <p style={{ marginBottom: 0 }}>Online Entry Options</p>
              <div>
                <input
                  type="checkbox"
                  name="checkbox-online-entry"
                  id="wd-text-entry"
                />
                <label htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="checkbox-online-entry"
                  id="wd-website-url"
                />
                <label htmlFor="wd-website-url">Website URL</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="checkbox-online-entry"
                  id="wd-media-recordings"
                />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="checkbox-online-entry"
                  id="wd-student-annotation"
                />
                <label htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="checkbox-online-entry"
                  id="wd-file-upload"
                />
                <label htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <p>Assign</p>
            </td>
            <td valign="bottom">
              <div style={{ marginTop: "1rem" }}>
                <label htmlFor="wd-assign-to">Assign to</label>
                <br />
                <input type="text" defaultValue="Everyone" id="wd-assign-to" />
              </div>
              <br />
              <div>
                <label htmlFor="wd-due-date"> Due </label>
                <br />
                <input type="date" defaultValue="2024-05-13" id="wd-due-date" />
              </div>
              <br />
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td>
                      <label htmlFor="wd-available-until">Until</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="date"
                        defaultValue="2024-05-06"
                        id="wd-available-from"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        defaultValue="2024-05-20"
                        id="wd-available-until"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button id="wd-assignment-cancel">Cancel</button>&nbsp;
        <button id="wd-assignment-save">Save</button>
      </div>
    </div>
  );
}
