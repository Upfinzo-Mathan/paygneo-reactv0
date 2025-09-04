function BannerSection() {
    return (
        <section className="banner_section">
            <div className="container">
                <div className="banner_content">
                    <h3 className="banner_fadeInUp delay-0.5s">Pay Smart. Pay Fast.</h3>
                    <h1 className="banner_fadeInUp delay-1s">
                        End-to-End <span>Payout & Payroll</span> <br />
                        Solutions for Digital Era.
                    </h1>
                    <div className="buttons banner_fadeInUp delay-1.5s">
                        <button className="explore_btn sound" data-sound="/assets/audio/sound.mp3">Explore</button>
                        <button className="reachout_btn sound" data-sound="/assets/audio/sound.mp3">Reach out</button>
                    </div>
                </div>
                <div className="banner_img banner_fadeInUp delay-2s">
                    <video className="product_bg_vide banner-js-tilt" autoPlay loop muted>
                        <source src="/assets/video/Hero section.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="rising-stars rising-stars-visible" 
                 style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}>
                <div style={{ height: '2px', width: '2px' }}></div>
                <div style={{ height: '2px', width: '2px' }}></div>
                <div style={{ height: '1px', width: '1px' }}></div>
            </div>
        </section>
    );
}

export default BannerSection;
