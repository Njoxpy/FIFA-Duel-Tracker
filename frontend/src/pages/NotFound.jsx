import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="not-found-wall">
        <h3 className="not-found-heading">Not Found</h3>
        <p className="not-found-paragraph">
          Soryy the page you were looking was not found, return to{" "}
          <Link to="/">Homepage</Link>{" "}
        </p>
      </div>
    </>
  );
}

export default NotFound;
