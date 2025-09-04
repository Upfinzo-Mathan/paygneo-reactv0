function PoweringSection() {
    return (
        <section className="powering_section">
            <div className="powering_title">
                <h2 className="fade-up">Gopayroll - Engine Behind Scaling Startups</h2>
                <p className="fade-up powering_section_subtitle">Automated. Accurate. Built to handle your next growth milestone.</p>
                <div className="rising-stars rising-stars-visible" 
                     style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}>
                    <div style={{ height: '2px', width: '2px' }}></div>
                    <div style={{ height: '2px', width: '2px' }}></div>
                    <div style={{ height: '1px', width: '1px' }}></div>
                </div>
            </div>
            <div className="powering-container">
                <div className="pow_img" data-step="1">
                    <img src="/assets/images/powering_img.svg" alt="Powering" />
                    <div className="pow-circle">
                        <div>
                            <div id="payment_process_card_img" className="mainImage"></div>
                            <div id="payment_process_card_img3" className="mainImage"></div>
                            <div id="payment_process_card_img2" className="mainImage"></div>
                        </div>
                    </div>
                </div>
                <div className="step_parent">
                    <div className="step" data-step="2">
                        <img src="/assets/images/step_text_one.svg" alt="Ellipse" style={{ marginLeft: '-40px', marginTop: '50px' }} />
                        <span className="spantag spantag_one">
                            <div className="arrow-left"></div>
                            <div className="loader-line"></div>
                        </span>
                        <div className="step_text_one step_mouse" data-img="payment_process_card_img">
                            <div className="step_bg">
                                <h2>Sync Employee & Pay Data</h2>
                                <p>Auto-sync employee details, attendance, and variable pay accurate and ready to process.</p>
                            </div>
                        </div>
                    </div>
                    <div className="step" data-step="3">
                        <img src="/assets/images/step_text_two.svg" alt="Ellipse" style={{ marginLeft: '10px', marginTop: '30px' }} />
                        <span className="spantag spantag_two">
                            <div className="arrow-left"></div>
                            <div className="loader-line"></div>
                        </span>
                        <div className="step_text_two step_mouse" data-img="payment_process_card_img3">
                            <div className="step_bg">
                                <h2>Payroll with Built-In Intelligence</h2>
                                <p>Run compliant, error-free payroll with automated calculations and smart validations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="step" data-step="4">
                        <img src="/assets/images/step_text_three.svg" alt="Ellipse" style={{ marginLeft: '-35px', marginTop: '-30px' }} />
                        <span className="spantag spantag_three">
                            <div className="arrow-left"></div>
                            <div className="loader-line"></div>
                        </span>
                        <div className="step_text_three step_mouse" data-img="payment_process_card_img2">
                            <div className="step_bg">
                                <h2>Disburse Payments & Stay Compliant</h2>
                                <p>Securely pay employees and manage all statutory filings from one unified platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PoweringSection;
