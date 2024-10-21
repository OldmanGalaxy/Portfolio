import './navbar.css';
import Link from 'next/link';

export default function Navbar()
{
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-image-container">
                    <Link href="/" className="navbar-image-link">
                        <img src="/sign.png" className="navbar-image"/>
                    </Link>
                </div>
                <div className="navbar-links-container">
                    <div className="navbar-about-container">
                        <Link href="/about" className="navbar-about-link navbar-links">
                            <p className="navbar-about-text textbox">
                                ABOUT-ME
                            </p>
                        </Link>
                    </div>
                    <div className="navbar-projects-container">
                        <Link href="/projects" className="navbar-projects-link navbar-links">
                            <p className="navbar-projects-text textbox">
                                PROJECTS
                            </p>
                        </Link>
                    </div>
                    <div className="navbar-home-container">
                        <Link href="/" className="navbar-home-link navbar-links">
                            <p className="navbar-home-text textbox">
                                HOME
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}