function Navbar(){
    return(
        <div className="navbar">
            <header>
                <h3><a href="/">Logo</a></h3>
                <nav>
                    <ul className="ul-container">
                        <li><a href="/">Home</a></li>
                        <li><a href="/add">Add Results</a></li>
                        <li><a href="/statistics">Statictics</a></li>
                        <li><a href="/table">Table</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;