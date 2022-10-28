import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop:'100px' }}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">React Quiz</div>
                <div className="footer_copyright">  
                MADE BY 
                <a href="https://github.com/PullambhatlaPoojitha" target="_blank"           rel="noopener noreferrer"> Poojitha Pullambhatla 
                </a>
                
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;