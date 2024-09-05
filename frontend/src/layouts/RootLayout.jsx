import { Outlet, Link } from "react-router-dom";

function RootLayout() {
  return (
    <div className="navbar">
      <header>
        <h3>
          <a href="/" className="logo">
            FIFA Duel
          </a>
        </h3>
        <nav>
          <ul className="ul-container">
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/add" className="nav-item">
                Add Results
              </Link>
            </li>
            <li>
              <Link to="/statistics" className="nav-item">
                Statictics
              </Link>
            </li>
            <li>
              <Link to="/table" className="nav-item">
                Table
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}

export default RootLayout;
