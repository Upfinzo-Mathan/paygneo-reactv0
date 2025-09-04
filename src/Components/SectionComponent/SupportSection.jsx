function SupportSection() {
    return (
        <section className="support_section">
            <div className="container">
                <div className="support_title">
                    <h2 className="fade-up">Exceptional Support For Your Success</h2>
                    <p className="sub_title fade-up">Streamlined transactions enhancing efficiency and customer satisfaction</p>
                    <div className="support_button fade-up">
                        <a className="btn sound" href="javascript:void(0)" data-sound="/assets/audio/sound.mp3">
                            <span className="text">Get Started</span>
                            <div className="icon">
                                <img src="/assets/images/arrow_right.svg" alt="Button Arrow" className="tele_img" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="support_sec_content">
                    <iframe src='https://my.spline.design/expetionalsupporthud-bgdFUBhOaKDDfRcbW8ZlcFhN/' 
                            frameBorder='0' width='100%' height='100%' title="Support Content"></iframe>
                </div>
            </div>
        </section>
    );
}

export default SupportSection;
