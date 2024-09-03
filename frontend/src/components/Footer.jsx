import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="footer">
            <footer>
                <h4>©2024 FIFA Dual Tracker</h4>
                <Link to="/add" className="add-link">Add Your FIFA Reults</Link>
            </footer>
        </div>
    )
}

export default Footer;