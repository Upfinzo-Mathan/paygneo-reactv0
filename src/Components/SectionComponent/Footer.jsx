function Footer() {
    return (
        <footer className="footer">
            <video loop muted autoPlay style={{ width: '100%', height: '100%' }}>
                <source src="/assets/video/paygneo_footer_video.webm" type="video/webm" />
                <source src="/assets/video/paygneo_footer_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="footer-top-content">
                <div className="footer-top">
                    <div className="flex-container container">
                        <div className="footer-logo">
                            <img src="/assets/images/Paygneo logo_footer.svg" alt="Paygneo Logo" />
                        </div>
                        <ul className="footer-menu">
                            <li><a className="text-nowrap" href="#">Payment</a></li>
                            <li><a className="text-nowrap" href="#">AI Banking</a></li>
                            <li><a className="text-nowrap" href="#">Policies</a></li>
                            <li><a className="text-nowrap" href="#">Contact Us</a></li>
                        </ul>
                        <div className="social-icons">
                            <a href="#"><img src="/assets/images/Facebook.svg" alt="Facebook" /></a>
                            <a href="#"><img src="/assets/images/instagram.svg" alt="Instagram" /></a>
                            <a href="#"><img src="/assets/images/Linkedin.svg" alt="LinkedIn" /></a>
                            <a href="#"><img src="/assets/images/Twitter.svg" alt="Twitter" /></a>
                        </div>
                        <form className="subscribe">
                            <div id="toggleInput">
                                <img src="/assets/images/footer_@.svg" alt="footer_@" />
                            </div>              
                            <input type="email" id="emailInput" placeholder="Enter your email" required />
                            <button className="sound subscribe_btn" href="javascript:void(0)" data-sound="/assets/audio/sound.mp3">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © 2025 Paygneo. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
