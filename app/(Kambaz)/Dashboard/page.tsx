import Link from "next/link";
import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/1234"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/reactjs.jpg"
                  width="100%"
                  height={160}
                  alt="react-image"
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1234 React JS
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/2234"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/python.jpg"
                  width="100%"
                  height={160}
                  alt="python-image"
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {" "}
                    CS2234 Programming Basics With Python{" "}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Learn Programming Basics in Python
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/2234"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/nlp.jpg"
                  width="100%"
                  height={160}
                  alt="python-image"
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {" "}
                    CS3234 Natural Language Processing{" "}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Understand how machines process and generate human language
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/4234"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/ml.jpg"
                  width="100%"
                  height={160}
                  alt="ml-image"
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {" "}
                    CS4234 Machine Learning{" "}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Core algorithms and applications of machine learning
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/5234"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/db.jpg"
                  width="100%"
                  height={160}
                  alt="db-image"
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {" "}
                    CS5234 Database Systems{" "}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Learn relational and NoSQL database concepts
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/6234"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cloud.jpg"
                  width="100%"
                  height={160}
                  alt="cloud-image"
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {" "}
                    CS6234 Cloud Computing{" "}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Building and deploying scalable apps on the cloud
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/7234"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cyber-security.jpg"
                  width="100%"
                  height={160}
                  alt="cyber-security-image"
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {" "}
                    CS7234 Cybersecurity{" "}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Learn to secure systems against cyber threats
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/8234"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/dataviz.jpg"
                  width="100%"
                  height={160}
                  alt="dataviz-image"
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {" "}
                    CS8234 Data Visualization{" "}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Telling stories with data using charts and dashboards
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
