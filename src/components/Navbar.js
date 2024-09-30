import React, {useState, useEffect} from 'react';
import '../index.css';

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Pomyslec nad navlinks

    return (
        <div className={`Navbar ${scrollY > 0 ? 'scrolled' : ''} ${scrollY > 50 ? 'shadow' : ''}`}>
            <div className={`line ${scrollY > 0 ? 'scrolled' : ''}`}></div>
            <div className={`logo-div ${scrollY > 0 ? 'scrolled': ''}`}>
                Łukasz Harkot
            </div>
            <div className={`navlinks ${scrollY > 0 ? 'scrolled' : ''}`}>
                <a style={{marginRight: '20px'}}>About Me</a>
                <a style={{marginRight: '20px'}}>Projects</a>
                <a>Contact</a>
                
            </div>
        </div>
    );
};

export default Navbar;