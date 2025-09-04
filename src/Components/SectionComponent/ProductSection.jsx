function ProductSection() {
    return (
        <section className="product-section">
            <video className="product_bg_video" autoPlay loop muted>
                <source src="/assets/video/product_sec_bg.mov" type="video/mp4" />
            </video>
            <div className="container">
                <div className="carousel-container">
                    <div className="product-top-text">
                        <h2 className="fade-up">
                            <span>
                                Our Products
                                <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1224 0.466962L10.6059 13.1047L0.822076 19.0708L12.0492 21.3659L17.7612 32.7407L19.2778 20.1029L29.0616 14.1369L17.8344 11.8418L12.1224 0.466962Z" fill="#15BFFD"/>
                                </svg>
                            </span>
                        </h2>
                        <p className="product-subtext fade-up">
                            <span>
                                Fast, Secure, and Future-Ready
                                <svg width="12" height="14" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1224 0.466962L10.6059 13.1047L0.822076 19.0708L12.0492 21.3659L17.7612 32.7407L19.2778 20.1029L29.0616 14.1369L17.8344 11.8418L12.1224 0.466962Z" fill="#15BFFD"/>
                                </svg>
                            </span>
                        </p>
                        <div className="rising-stars rising-stars-visible">
                            <div style={{ height: '2px', width: '2px' }}></div>
                            <div style={{ height: '2px', width: '2px' }}></div>
                            <div style={{ height: '1px', width: '1px' }}></div>
                        </div>
                    </div>
                    <div className="owl-carousel owl-theme products">
                        <div className="item item-1 et-js-tilt pn_product1">
                            <div className="product-card product_card_one">
                                <div className="circle-img">
                                    <div className="top-circle-img">
                                        <img src="/assets/images/products/purple-curve.svg" alt="curve" />
                                    </div>
                                    <div className="center-circle-img">
                                        <img src="/assets/images/products/purple-center.svg" alt="center-img" />
                                    </div>
                                </div>
                                <h3>
                                    Neopay Partner
                                    <span className="harizondal-line"
                                          style={{ background: 'linear-gradient(72.06deg, #EF97FD 35.12%, rgba(172, 151, 253, 0.01) 284.18%)' }}></span>
                                </h3>
                                <p>Unleash Seamless Vendor Pay with Digital Precision.</p>
                            </div>
                        </div>
                        <div className="item item-2 et-js-tilt pn_product2">
                            <div className="product-card product_card_two">
                                <div className="circle-img">
                                    <div className="top-circle-img">
                                        <img src="/assets/images/products/red-curve.svg" alt="curve" />
                                    </div>
                                    <div className="center-circle-img" style={{ border: '1px solid rgba(208, 75, 82, 1)' }}>
                                        <img src="/assets/images/products/red-center.svg" alt="center-img" />
                                    </div>
                                </div>
                                <h3>
                                    Paygwave
                                    <span className="harizondal-line"
                                          style={{ background: 'linear-gradient(72.11deg, #D35151 34.19%, rgba(1, 148, 254, 0) 284.92%)' }}></span>
                                </h3>
                                <p>Powering Bulk Payments with Precision and Speed for Modern Enterprises.</p>
                            </div>
                        </div>
                        <div className="item item-3 et-js-tilt pn_product3">
                            <div className="product-card product_card_three">
                                <div className="circle-img">
                                    <div className="top-circle-img">
                                        <img src="/assets/images/products/green-curve.svg" alt="curve" />
                                    </div>
                                    <div className="center-circle-img" style={{ border: '1px solid rgba(21, 191, 253, 1)' }}>
                                        <img src="/assets/images/products/green-center.svg" alt="center-img" />
                                    </div>
                                </div>
                                <h3>
                                    Neo Transfer
                                    <span className="harizondal-line"
                                          style={{ background: 'linear-gradient(72.11deg, #32FDE8 34.19%, rgba(1, 148, 254, 0) 284.92%)' }}></span>
                                </h3>
                                <p>Effortless and timely payouts that ensure smooth business operations.</p>
                            </div>
                        </div>
                        <div className="item item-4 et-js-tilt">
                            <div className="product-card product_card_four">
                                <div className="circle-img">
                                    <div className="top-circle-img">
                                        <img src="/assets/images/products/blue-curve.svg" alt="curve" />
                                    </div>
                                    <div className="center-circle-img" style={{ border: '1px solid #3F53D8' }}>
                                        <img src="/assets/images/products/blue-center.svg" alt="center-img" />
                                    </div>
                                </div>
                                <h3>
                                    Gopayroll
                                    <span className="harizondal-line"
                                          style={{ background: 'linear-gradient(72.11deg, #3F53D8 34.19%, rgba(1, 148, 254, 0) 284.92%)' }}></span>
                                </h3>
                                <p>Simplifying payroll with automated, accurate processing every time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductSection;
