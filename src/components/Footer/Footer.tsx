import React from 'react';
import './Footer.scss';

export const Footer = () => {
    return (
        <div className="footer-wrapper">
            <footer>
                <div className="social-buttons">
                    <a
                        className="social-buttons_github"
                        href="https://github.com/NastasiaMitsina"
                        target="_blank"
                    >
                        Github
                    </a>
                    <a
                        className="social-buttons_linkedin"
                        href="https://www.linkedin.com/in/anastasiamitsina/"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                </div>
                <p>Anastasiya Mitsina</p>
            </footer>
        </div>
    )
}