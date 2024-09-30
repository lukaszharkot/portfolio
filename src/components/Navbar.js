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

    return (
        <div className={`Navbar ${scrollY > 0 ? 'scrolled' : ''} ${scrollY > 50 ? 'shadow' : ''}`}>
            <div className={`line ${scrollY > 0 ? 'scrolled' : ''}`}></div>
            <div className={`logo-div ${scrollY > 0 ? 'scrolled': ''}`}>
                Łukasz Harkot
            </div>
            <div className={`navlinks ${scrollY > 0 ? 'scrolled' : ''}`}>
                <a style={{marginRight: '20px'}}><b>01</b> About Me</a>
                <a style={{marginRight: '20px'}}><b>02</b> Projects</a>
                <a><b>03</b> Contact</a>
                
            </div>
        </div>
    );
};

export default Navbar;