function PaymentProcessSection() {
    return (
        <div className="payment_process_section">
            <div className="container">
                <h2 className="fade-up">Powering Payout And Payroll Across industries</h2>
                <p className="sub_title fade-up">Scalable Payout and Payroll Solutions for Every Industry, Anywhere.</p>
                <div className="rising-stars rising-stars-visible" style={{ top: '-124px' }}>
                    <div style={{ height: '2px', width: '2px' }}></div>
                    <div style={{ height: '2px', width: '2px' }}></div>
                    <div style={{ height: '1px', width: '1px' }}></div>
                </div>
                <div className="payment_process_card_part">
                    <div className="owl-carousel owl-theme payment_card">
                        <div className="item">
                            <div className="payment_process_card payout_card_1">
                                <div id="payment_process_card_img">
                                    <video id="bgVideo" autoPlay loop muted>
                                        <source src="/assets/video/powering_payment/ecommerce.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div className="payment_process_card_content">
                                    <h4>E-Commerce Solutions</h4>
                                    <p>Fast, secure transactions with automated vendor settlements and refunds.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="payment_process_card star_icon_payout payout_card_2">
                                <div id="payment_process_card_img">
                                    <video id="bgVideo" autoPlay loop muted>
                                        <source src="/assets/video/powering_payment/education.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div className="payment_process_card_content">
                                    <h4>Education Solutions</h4>
                                    <p>Simplify fee collections, staff payroll, and scholarship disbursements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="payment_process_card payout_card_3">
                                <div id="payment_process_card_img">
                                    <video id="bgVideo" autoPlay loop muted>
                                        <source src="/assets/video/powering_payment/fintech.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div className="payment_process_card_content">
                                    <h4>Fintech</h4>
                                    <p>Real-time disbursements, commissions, and payroll for scalable fintech operations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="payment_process_card payout_card_1">
                                <div id="payment_process_card_img">
                                    <video id="bgVideo" autoPlay loop muted>
                                        <source src="/assets/video/powering_payment/freelance.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div className="payment_process_card_content">
                                    <h4>Freelance</h4>
                                    <p>Instant payments, income tracking, and seamless client billing support.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="payment_process_card payout_card_1">
                                <div id="payment_process_card_img">
                                    <video id="bgVideo" autoPlay loop muted>
                                        <source src="/assets/video/powering_payment/financial.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div className="payment_process_card_content">
                                    <h4>Financial Services</h4>
                                    <p>Automate claims, commissions, and recurring payments with complete compliance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentProcessSection;
