import { Link } from "react-router";

export default function Header(){
    

    return (
        <nav className="flex py-10 px-10 justify-between items-center">
                <div className="logo-par">
                    <Link to={'/'}>
                        <h2 className="text-xl">!NDIA</h2>
                    </Link>
                </div>
                <div className="nav">
                    <ul className="flex gap-10">
                        <li><Link to={'/'} className="menu_hover">Home</Link></li>
                        <li><a className="menu_hover" href="#slides_parent">Heritage Sites</a></li>
                        <li><a className="menu_hover" href="#explore-fiji">Travel With us</a></li>
                        <li><a className="menu_hover" href="#gallery">Gallery</a></li>
                        <li><a className="menu_hover" href="#fiji-holyday">Our Pride</a></li>
                        <li><a className="menu_hover" href="#blog">Blog</a></li>
                    </ul>
                </div>
                <div className="toggle-btn">
                    <ul className="flex gap-10">
                        <Link to={"/auth/login"} className="text-teal-500 font-medium cursor-pointer hover:text-teal-700 border-1 px-4 py-2">LogIn/SignUp</Link>
                    </ul>
                </div>
    </nav>
    )
}