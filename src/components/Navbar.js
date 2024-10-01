import React, {useState, useEffect} from 'react';
import '../index.css';

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [scrolledSection, setScrolledSection] = useState('');

    useEffect(() => {
        
        const handleScroll = () => {
            setScrollY(window.scrollY);
            const aboutOffset = document.getElementById('about').offsetTop - 69;
            const projectsOffset = document.getElementById('projects').offsetTop - 69;
            const contactOffset = document.getElementById('contact').offsetTop - 69;
            const card1 = document.getElementById('card1');

            if (scrollY < aboutOffset) {
                setScrolledSection('home');
            }else if (scrollY < projectsOffset) {
                setScrolledSection('about')
            }else if (scrollY < contactOffset) {
                setScrolledSection('projects')
                
            }else {
                setScrolledSection('contact')
              
            }

            if (scrollY  >= projectsOffset - 450){
                card1.className = 'stacking-card card-1';
                document.body.style.backgroundColor = '#fff';
            }else{
                card1.className = 'default-card card-1';
                document.body.style.backgroundColor = '#f4f3fa';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    // Pomyslec nad navlinks

    return (
        <div className={`Navbar ${scrollY > 0 ? 'scrolled' : ''} ${scrollY > 50 ? 'shadow' : ''}`}>
            <div className={`line ${scrollY > 0 ? 'scrolled' : ''}`}></div>
            <a href='/' style={{textDecoration: 'none'}} className={`logo-div ${scrollY > 0 ? 'scrolled': ''}`}>
                Łukasz Harkot
            </a>
            <div className={`navlinks ${scrollY > 0 ? 'scrolled' : ''}`}>
                <a href='#home' style={{marginRight: '30px', position:'relative'}} className={scrolledSection === 'home' ? 'active' : 'navlink'}><span className={`pre-link ${scrollY > 0 ? 'scrolled' : ''}`}>01</span>/ Home</a>
                <a href='#about' style={{marginRight: '30px', position:'relative'}} className={scrolledSection === 'about' ? 'active' : 'navlink'}><span className={`pre-link ${scrollY > 0 ? 'scrolled' : ''}`}>02</span>/ About Me</a>
                <a href='#projects' style={{marginRight: '30px', position:'relative'}} className={scrolledSection === 'projects' ? 'active' : 'navlink'}><span className={`pre-link ${scrollY > 0 ? 'scrolled' : ''}`}>03</span>/ Projects</a>
                <a href='#contact' style={{position:'relative'}} className={scrolledSection === 'contact' ? 'active' : 'navlink'}><span className={`pre-link ${scrollY > 0 ? 'scrolled' : ''}`}>04</span>/ Contact</a>
                
            </div>
        </div>
    );
};

export default Navbar;