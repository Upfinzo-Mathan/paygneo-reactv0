import { useState } from 'react';

function Navigation() {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    return (
        <header className="header" id="navbar">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="header_cont">
                        <div className="logo">
                            <a className="navbar-brand" href="">
                                <img src="/assets/images/paygneo_logo.svg" alt="Paygneo Logo" />
                            </a>
                        </div>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            onClick={toggleOffcanvas}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`offcanvas offcanvas-end ${isOffcanvasOpen ? 'show' : ''}`} 
                             tabIndex="-1" 
                             id="offcanvasNavbar"
                             aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <a className="navbar-brand-mobile" href="">
                                    <img src="/assets/images/paygneo_logo.svg" alt="Paygneo Logo" />
                                </a>
                                <button 
                                    type="button" 
                                    className="btn-close text-reset" 
                                    onClick={toggleOffcanvas}
                                    aria-label="Close"
                                ></button>
                            </div>

                            <div className="offcanvas-body">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">
                                    <li className="nav-item">
                                        <a className="nav-link list-menu list-menu-home sound" 
                                           data-sound="/assets/audio/sound.mp3" 
                                           href="">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link list-menu list-menu-home sound" 
                                           data-sound="/assets/audio/sound.mp3" 
                                           href="javascript:;">Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link list-menu list-menu-home sound" 
                                           data-sound="/assets/audio/sound.mp3" 
                                           href="javascript:;">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link list-menu list-menu-about sound" 
                                           data-sound="/assets/audio/sound.mp3" 
                                           href="javascript:;">Contact</a>
                                    </li>
                                </ul>
                                <div className="connect_btn">
                                    <a href="javascript:;" className="cta-btn sound" data-sound="/assets/audio/sound.mp3">Connect</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navigation;
