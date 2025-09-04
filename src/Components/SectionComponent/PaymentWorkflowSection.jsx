function PaymentWorkflowSection() {
    return (
        <div className="payment_workflow_section">
            <div className="container">
                <div className="payment_workflow_top">
                    <div className="payment_workflow_title">
                        <div className="payment_workflow_content">
                            <h2 className="fade-up">Next-Gen Solutions For All <span className="hash_content"></span> Models</h2>
                            <p className="subtitle_payment_workflow fade-up">
                                Energize your business with immediate payouts, removing any delays.
                            </p>
                            <div className="support_button fade-up">
                                <a className="btn sound" href="javascript:void(0)" data-sound="/assets/audio/sound.mp3">
                                    <span className="text">Get Started</span>
                                    <div className="icon">
                                        <img src="/assets/images/arrow_right.svg" alt="Button Arrow" className="tele_img" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="payment_workflow_grid">
                        <div className="payout_content_icon fade-up">
                            <div className="payout_icon">
                                <img src="/assets/images/workflow_icon_1.svg" alt="" />
                            </div>
                            <div className="payout_content">
                                <p>AI-Driven<br /> Payout Planner</p>
                            </div>
                        </div>
                        <div className="payout_content_icon fade-up">
                            <div className="payout_icon">
                                <img src="/assets/images/workflow_icon_2.svg" alt="" />
                            </div>
                            <div className="payout_content">
                                <p>Transaction Assistance<br />Hub</p>
                            </div>
                        </div>
                        <div className="payout_content_icon fade-up">
                            <div className="payout_icon">
                                <img src="/assets/images/workflow_icon_3.svg" alt="" />
                            </div>
                            <div className="payout_content">
                                <p>Instant Payout <br /> Monitoring</p>
                            </div>
                        </div>
                        <div className="payout_content_icon fade-up">
                            <div className="payout_icon">
                                <img src="/assets/images/workflow_icon_4.svg" alt="" />
                            </div>
                            <div className="payout_content">
                                <p>Enterprise Bulk<br /> Payouts</p>
                            </div>
                        </div>
                        <div className="payout_content_icon fade-up">
                            <div className="payout_icon">
                                <img src="/assets/images/workflow_icon_5.svg" alt="" />
                            </div>
                            <div className="payout_content">
                                <p>Dynamic Payout <br /> Configurations</p>
                            </div>
                        </div>
                        <div className="payout_content_icon fade-up">
                            <div className="payout_icon">
                                <img src="/assets/images/workflow_icon_6.svg" alt="" />
                            </div>
                            <div className="payout_content">
                                <p>Unified API <br /> Integration </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="payout_workflow_image">
                    <div className="row g-0">
                        <div className="col-lg-4 card_1">
                            <div className="paygneo_card_1">
                                <video id="video_workflow_1" preload="none" loading="lazy" className="payments_video" 
                                       poster="/assets/images/next_gen/card_1.png" loop muted>
                                    <source src="/assets/video/next_gen/Secure.mp4" type="video/mp4" />
                                </video>  
                                <div className="image_overlay"></div>
                                <div className="paygneo_card_content">
                                    <div className="content_center">
                                        <h4>Efficiency & Speed</h4> 
                                        <p>Paygneo enables instant or scheduled payouts, reducing operational overhead and ensuring faster settlement for recipients across the globe</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 card_2">
                            <div className="paygneo_card_1 center_line">
                                <video id="video_workflow_2" preload="none" loading="lazy" className="payments_video" 
                                       poster="/assets/images/next_gen/card_2.jpg" loop muted>
                                    <source src="/assets/video/next_gen/Hand.mp4" type="video/mp4" />
                                </video>  
                                <div className="image_overlay"></div>
                                <div className="paygneo_card_content">
                                    <div className="content_center">
                                        <h4>Cost Effectiveness</h4>
                                        <p>Paygneo's competitive pricing and transparent fee structures, you gain more value with every transaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 card_3">
                            <div className="paygneo_card_1">
                                <video height="100%" width="100%" id="video_workflow_3" preload="none" loading="lazy" 
                                       className="payments_video" poster="/assets/images/next_gen/card_3.png" loop muted>
                                    <source src="/assets/video/next_gen/shield.mp4" type="video/mp4" />
                                </video>  
                                <div className="image_overlay"></div>
                                <div className="paygneo_card_content">
                                    <div className="content_center">
                                        <h4>Enterprise-Grade Security</h4> 
                                        <p>Our platform is built on industry-leading security protocols, including end-to-end encryption, real-time fraud detection</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentWorkflowSection;
