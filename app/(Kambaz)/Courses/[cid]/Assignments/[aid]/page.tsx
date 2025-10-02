import {
  Button,
  FormCheck,
  FormControl,
  FormLabel,
  FormSelect,
} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
      <FormControl
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
        placeholder="Email"
      />

      <FormControl
        className="mt-4"
        as="textarea"
        id="wd-description"
        rows={12}
        cols={42}
        defaultValue={
          "The assignment is available online.\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n\n• Your full name and section\n• Links to each of the lab assignments Link to the Kanbas application\n• Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page."
        }
      />

      <br />
      <table cellPadding="8">
        <tbody>
          <tr>
            <td align="right" valign="top">
              <FormLabel htmlFor="wd-points">Points</FormLabel>
            </td>
            <td>
              <FormControl id="wd-points" type="number" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
            </td>
            <td>
              <FormSelect id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZ">QUIZ</option>
              </FormSelect>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <FormLabel htmlFor="wd-display-grade-as">
                Display Grade as
              </FormLabel>
            </td>
            <td>
              <FormSelect id="wd-display-grade-as">
                <option value="PERCENTAGE">Percentage</option>
                <option value="LETTER_GRADE">Letter Grade</option>
                <option value="ABSOLUTE">Absolute</option>
              </FormSelect>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <FormLabel htmlFor="wd-submission-type">
                Submission Type
              </FormLabel>
            </td>
            <td>
              <div className="border p-3 rounded">
                <FormSelect id="wd-submission-type">
                  <option value="ONLINE">Online</option>
                  <option value="OFFLINE">Offline</option>
                </FormSelect>
                <br />
                <p className="fw-bold">Online Entry Options</p>
                <div className="d-flex flex-row">
                  <FormCheck
                    type="checkbox"
                    name="checkbox-online-entry"
                    id="wd-text-entry"
                  />
                  <FormLabel htmlFor="wd-text-entry" className="ms-2">
                    Text Entry
                  </FormLabel>
                </div>
                <div className="d-flex flex-row">
                  <FormCheck
                    type="checkbox"
                    name="checkbox-online-entry"
                    id="wd-website-url"
                  />
                  <FormLabel htmlFor="wd-website-url" className="ms-2">
                    Website URL
                  </FormLabel>
                </div>
                <div className="d-flex flex-row">
                  <FormCheck
                    type="checkbox"
                    name="checkbox-online-entry"
                    id="wd-media-recordings"
                  />
                  <FormLabel htmlFor="wd-media-recordings" className="ms-2">
                    Media Recordings
                  </FormLabel>
                </div>
                <div className="d-flex flex-row">
                  <FormCheck
                    type="checkbox"
                    name="checkbox-online-entry"
                    id="wd-student-annotation"
                  />
                  <FormLabel htmlFor="wd-student-annotation" className="ms-2">
                    Student Annotation
                  </FormLabel>
                </div>
                <div className="d-flex flex-row">
                  <FormCheck
                    type="checkbox"
                    name="checkbox-online-entry"
                    id="wd-file-upload"
                  />
                  <FormLabel htmlFor="wd-file-upload" className="ms-2">
                    File Uploads
                  </FormLabel>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <p>Assign</p>
            </td>
            <td valign="bottom">
              <div className="border p-3 rounded">
                <div>
                  <FormLabel htmlFor="wd-assign-to" className="fw-bold">
                    Assign to
                  </FormLabel>
                  <br />
                  <FormControl
                    type="text"
                    defaultValue="Everyone"
                    id="wd-assign-to"
                  />
                </div>
                <br />
                <div>
                  <FormLabel htmlFor="wd-due-date" className="fw-bold">
                    {" "}
                    Due{" "}
                  </FormLabel>
                  <br />
                  <FormControl
                    type="date"
                    defaultValue="2024-05-13"
                    id="wd-due-date"
                  />
                </div>
                <br />
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <FormLabel
                          htmlFor="wd-available-from"
                          className="fw-bold"
                        >
                          Available from
                        </FormLabel>
                      </td>
                      <td>
                        <FormLabel
                          htmlFor="wd-available-until"
                          className="ms-2 fw-bold"
                        >
                          Until
                        </FormLabel>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <FormControl
                          type="date"
                          defaultValue="2024-05-06"
                          id="wd-available-from"
                        />
                      </td>
                      <td>
                        <FormControl
                          type="date"
                          defaultValue="2024-05-20"
                          id="wd-available-until"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div className="d-flex justify-content-end">
        <Button variant="secondary" className="me-1" id="wd-assignment-cancel">
          Cancel
        </Button>
        <Button variant="danger" id="wd-assignment-save">
          Save
        </Button>
      </div>
    </div>
  );
}
