import './Footer.css';

export default function Footer({footerText, className, children}) {
    return(
        <footer className={className}>
            <p className="footer-text">{footerText}</p>
            {children}
        </footer>
    );
}