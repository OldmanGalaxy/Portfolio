import './contact.css';

export default function Contact() {
    return (
        <>
        <div className="contact-container">
            <div className="title-container">
                Contact Me:
            </div>
            <div className="email-container">
                purvkabaria@gmail.com
            </div>
            <div className="mobile-container">
                +917984735374
            </div>
            <div className="linkedin-container">
                <a href="https://www.linkedin.com/in/purv-kabaria-38b377201/">
                    LinkedIn
                </a>
            </div>
            <div className="resume-container">
                <a href="https://drive.google.com/file/d/1n34i3rwhJOr-0iFR5sGzWkUuOuGkLmLG/view?usp=drive_link">
                    Resume
                </a>
            </div>
            <div className="leetcode-container">
                <a href="https://leetcode.com/u/oldmangalaxy/">
                    LeetCode
                </a>
            </div>
        </div>
        </>
    );
}