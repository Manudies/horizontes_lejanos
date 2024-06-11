import React from 'react';
import './footer.css';
import imageAni from '../../assets/153530190.jpg';
import imageManu from '../../assets/138526079.jpg';
import imageLander from '../../assets/163399446.jpg';
import imageBego from '../../assets/bego.jpeg';

const Footer = () => {
    const year = new Date().getFullYear();
    const creators = [
        { id: 1, name: 'Ani', avatar: imageAni, url: 'https://github.com/onluani' },
        { id: 2, name: 'Manu', avatar: imageManu, url: 'https://github.com/Manudies' },
        { id: 3, name: 'Lander', avatar: imageLander, url: 'https://github.com/landerar' },
        { id: 4, name: 'Bego', avatar: imageBego, url: 'https://github.com/begofv' }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <button className="scroll-to-top" onClick={scrollToTop}>
                ↑
            </button>
            <div className="copyright">&copy; {year} Guardians of React </div>
            <div className="creators">
                {creators.map(creator => (
                    <a key={creator.id} href={creator.url} target="_blank" rel="noopener noreferrer" className="creator-link">
                        <div className="creator">
                            <img src={creator.avatar} alt={creator.name} className="creator-avatar" />
                            <span className="creator-name">{creator.name}</span>
                        </div>
                    </a>
                ))}
            </div>
        </footer>
    );
}

export default Footer;