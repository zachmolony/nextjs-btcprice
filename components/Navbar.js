import Link from "next/link";

const Navbar = () => (        
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
            <img src="coin.png" width="30" height="30" className="d-inline-block align-top" alt="" /> {' '}
            BTC Price Monitor
        </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
            <li className={"nav-item "}>
                <Link href="/"><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
            </li>
            <li className="nav-item">
                <Link href="/about"><a className="nav-link" href="#">About</a></Link>
            </li>
        </ul>
    </div>
    </nav>
)

export default Navbar; 