function PayoutServiceSection() {
    return (
        <section className="payout_service">
            <div className="container">
                <div className="payout_service_content">
                    <div className="payout_service_title">
                        <p className="fade-up">Payout Service Centric</p>
                        <h2 className="fade-up">Streamlined For Payout Ease <br />And Efficiency</h2>
                    </div>
                    <div className="payout_service_subcont">
                        <div className="fade-up">
                            <h3>Developer-Friendly Docs</h3>
                            <p>Clear, detailed guides for seamless integration and faster payout setup.</p>
                        </div>
                        <div className="fade-up">
                            <h3>Accelerated SDKs</h3>
                            <p>Pre-built SDKs for effortless and rapid payout implementation.</p>
                        </div>
                        <div className="fade-up">
                            <h3>Sandbox Testing Hub</h3>
                            <p>Ensure Seamless performance in a risk-free sandbox environment.</p>
                        </div>
                        <div className="payout_button fade-up">
                            <a className="btn" href="javascript:;">
                                <span className="text sound" data-sound="/assets/audio/sound.mp3">Get Started</span>
                                <div className="icon">
                                    <img src="/assets/images/right_arrow.svg" alt="Button Arrow" className="tele_img" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="payout_service_img">
                    <video className="payments_video" autoPlay loop muted>
                        <source src="/assets/video/Hexagon section.mp4" type="video/mp4" />
                    </video>    
                </div>
            </div>
        </section>
    );
}

export default PayoutServiceSection;
