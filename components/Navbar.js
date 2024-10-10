import './navbar.css';
import Link from 'next/link';

export default function Navbar()
{
    return (
        <>
            <div class="navbar-container">
                <div class="navbar-image-container">
                    <Link href="/" class="navbar-image-link">
                        <img src="/sign.png" class="navbar-image"/>
                    </Link>
                </div>
                <div class="navbar-links-container">
                    <div class="navbar-about-container">
                        <Link href="/about" class="navbar-about-link navbar-links">
                            <p class="navbar-about-text textbox">
                                ABOUT-ME
                            </p>
                        </Link>
                    </div>
                    <div class="navbar-projects-container">
                        <Link href="/projects" class="navbar-projects-link navbar-links">
                            <p class="navbar-projects-text textbox">
                                PROJECTS
                            </p>
                        </Link>
                    </div>
                    <div class="navbar-home-container">
                        <Link href="/" class="navbar-home-link navbar-links">
                            <p class="navbar-home-text textbox">
                                HOME
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}