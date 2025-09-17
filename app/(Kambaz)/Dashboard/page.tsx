import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.jpg"
              width={200}
              height={150}
              alt="react-image"
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link href="/Courses/2234" className="wd-dashboard-course-link">
            <Image
              src="/images/python.jpg"
              width={200}
              height={150}
              alt="python-image"
            />
            <div>
              <h5> CS2234 Programming Basics With Python </h5>
              <p className="wd-dashboard-course-title">
                Learn Programming Basics in Python
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link href="/Courses/2234" className="wd-dashboard-course-link">
            <Image
              src="/images/nlp.jpg"
              width={200}
              height={150}
              alt="python-image"
            />
            <div>
              <h5> CS3234 Natural Language Processing </h5>
              <p className="wd-dashboard-course-title">
                Understand how machines process and generate human language
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4234" className="wd-dashboard-course-link">
            <Image
              src="/images/ml.jpg"
              width={200}
              height={150}
              alt="ml-image"
            />
            <div>
              <h5> CS4234 Machine Learning </h5>
              <p className="wd-dashboard-course-title">
                Core algorithms and applications of machine learning
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <Link href="/Courses/5234" className="wd-dashboard-course-link">
            <Image
              src="/images/db.jpg"
              width={200}
              height={150}
              alt="db-image"
            />
            <div>
              <h5> CS5234 Database Systems </h5>
              <p className="wd-dashboard-course-title">
                Learn relational and NoSQL database concepts
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <Link href="/Courses/6234" className="wd-dashboard-course-link">
            <Image
              src="/images/cloud.jpg"
              width={200}
              height={150}
              alt="cloud-image"
            />
            <div>
              <h5> CS6234 Cloud Computing </h5>
              <p className="wd-dashboard-course-title">
                Building and deploying scalable apps on the cloud
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link href="/Courses/7234" className="wd-dashboard-course-link">
            <Image
              src="/images/cyber-security.jpg"
              width={200}
              height={150}
              alt="cyber-security-image"
            />
            <div>
              <h5> CS7234 Cybersecurity </h5>
              <p className="wd-dashboard-course-title">
                Learn to secure systems against cyber threats
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/8234" className="wd-dashboard-course-link">
            <Image
              src="/images/dataviz.jpg"
              width={200}
              height={150}
              alt="dataviz-image"
            />
            <div>
              <h5> CS8234 Data Visualization </h5>
              <p className="wd-dashboard-course-title">
                Telling stories with data using charts and dashboards
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
