import './WebsiteImage.css';


// Image Component
export default function WebsiteImage({src, alt, className}) {
    return(
        <img src={src} className={className} alt={alt} />
    );
}