function PayoutTextSection() {
    return (
        <section className="payout_text paygneo_text_sec">
            <div className="container">
                <section className="scroller-section">
                    <video className="payments_video payout_text_video" autoPlay loop muted>
                        <source src="/assets/video/Payout.mp4" type="video/mp4" />
                    </video>
                </section>
                <div className="rising-stars rising-stars-visible" 
                     style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}>
                    <div style={{ height: '2px', width: '2px' }}></div>
                    <div style={{ height: '2px', width: '2px' }}></div>
                    <div style={{ height: '1px', width: '1px' }}></div>
                </div>
            </div>
        </section>
    );
}

export default PayoutTextSection;
