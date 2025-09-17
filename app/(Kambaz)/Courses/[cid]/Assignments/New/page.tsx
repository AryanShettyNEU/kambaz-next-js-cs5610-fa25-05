export default function NewAssignment() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h3>Assignment Name</h3>
      </label>
      <input id="wd-name" />
      <br />
      <br />
      <textarea id="wd-description" rows={9} cols={42} />
      <br />
      <table cellPadding="8">
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" />
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
                <option value="ABSOLUTE">Absolute</option>
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
                <input type="text" id="wd-assign-to" />
              </div>
              <br />
              <div>
                <label htmlFor="wd-due-date"> Due </label>
                <br />
                <input type="date" id="wd-due-date" />
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
                      <input type="date" id="wd-available-from" />
                    </td>
                    <td>
                      <input type="date" id="wd-available-until" />
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
