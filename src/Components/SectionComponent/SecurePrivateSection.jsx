function SecurePrivateSection() {
    return (
        <section className="secure_private">
            <div className="secure_private_title">
                <h2 className="fade-up">Accurate Payout Workflow</h2>
                <p className="fade-up">Streamline complex payout processes into a single, seamless flow.</p>
                <div className="rising-stars rising-stars-visible">
                    <div style={{ height: '2px', width: '2px' }}></div>
                    <div style={{ height: '2px', width: '2px' }}></div>
                    <div style={{ height: '1px', width: '1px' }}></div>
                </div>
            </div>
            <div className="secure_private_content">
                <video className="secure_private_bg_video" autoPlay loop muted>
                    <source src="/assets/video/accurate_pay_video.mov" type="video/mp4" />
                </video>
            </div>
        </section>
    );
}

export default SecurePrivateSection;
