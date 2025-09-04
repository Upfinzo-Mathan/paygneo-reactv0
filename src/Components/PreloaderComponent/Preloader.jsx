import { useEffect, useRef, useState } from 'react';

function Preloader() {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const startedRef = useRef(false);

    useEffect(() => {
        if (startedRef.current) return;
        startedRef.current = true;

        // Compute absolute base URL for assets (supports subpath hosting)
        const envBase = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
        const absoluteBase = new URL(envBase, window.location.origin).toString();
        const withBase = (path) => new URL(path.replace(/^\/+/, ''), absoluteBase).toString();
        window.__ASSET_BASE__ = absoluteBase;

        const loadScript = (src) => new Promise((resolve, reject) => {
            // prevent duplicate loads
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });

        const rewriteAssetsToBase = () => {
            if (absoluteBase === `${window.location.origin}/`) return;
            const fixUrl = (url) => {
                if (!url) return url;
                if (url.startsWith('/assets/')) return withBase(url.slice(1));
                return url;
            };
            document.querySelectorAll('img[src^="/assets/"], source[src^="/assets/"], video[src^="/assets/"], link[href^="/assets/"], script[src^="/assets/"], a[href^="/assets/"]').forEach((el) => {
                if (el.hasAttribute('src')) el.setAttribute('src', fixUrl(el.getAttribute('src')));
                if (el.hasAttribute('href')) el.setAttribute('href', fixUrl(el.getAttribute('href')));
            });
            document.querySelectorAll('video[poster^="/assets/"]').forEach((el) => {
                el.setAttribute('poster', fixUrl(el.getAttribute('poster')));
            });
        };

        const loadAll = async () => {
            try {
                rewriteAssetsToBase();

                // Ordered + grouped loads
                const ordered = [
                    withBase('assets/js/jquery.js'),
                    withBase('assets/js/gsap.min.js'),
                    withBase('assets/js/ScrollTrigger.min.js'),
                    withBase('assets/js/ScrollToPlugin.min.js'),
                    withBase('assets/js/motionpath.min.js'),
                ];
                const parallel = [
                    withBase('assets/js/bootstrap.bundle.min.js'),
                    withBase('assets/js/tilt.min.js'),
                    withBase('assets/js/spotlight_effect.js'),
                    withBase('assets/js/lottie.min.js'),
                    withBase('assets/js/owl.carousel.min.js'),
                ];
                const riveRuntime = 'https://unpkg.com/@rive-app/canvas@latest';
                const finalScripts = [withBase('assets/js/home.js')];

                const totalSteps = ordered.length + parallel.length + 1 /*rive*/ + finalScripts.length;
                let done = 0;
                const bump = () => {
                    done += 1;
                    const pct = Math.min(100, Math.round((done / totalSteps) * 100));
                    setProgress(pct);
                };

                for (const src of ordered) {
                    await loadScript(src);
                    // Register ScrollTrigger after core loads
                    if (src.includes('ScrollTrigger') && window.gsap && window.ScrollTrigger) {
                        window.gsap.registerPlugin(window.ScrollTrigger);
                    }
                    bump();
                }

                await Promise.all(parallel.map(s => loadScript(s).then(bump)));

                await loadScript(riveRuntime);
                bump();

                // Initialize Rive if canvases exist
                if (window.rive) {
                    const payrollCanvas = document.getElementById('payroll');
                    const payoutCanvas = document.getElementById('payout');
                    const expCanvas = document.getElementById('exp-anim');

                    if (payrollCanvas) {
                        const payroll_riv = new window.rive.Rive({
                            src: withBase('assets/riv/payroll.riv'),
                            canvas: payrollCanvas,
                            autoplay: true,
                            artboard: 'Payroll opt 1',
                            stateMachines: 'Payroll',
                            useOffscreenRenderer: true,
                            onLoad: () => payroll_riv.resizeDrawingSurfaceToCanvas(),
                        });
                    }
                    if (payoutCanvas) {
                        const payout_riv = new window.rive.Rive({
                            src: withBase('assets/riv/payout.riv'),
                            canvas: payoutCanvas,
                            autoplay: true,
                            artboard: 'Payout opt 1',
                            stateMachines: 'Payout',
                            useOffscreenRenderer: true,
                            onLoad: () => payout_riv.resizeDrawingSurfaceToCanvas(),
                        });
                    }
                    if (expCanvas) {
                        const exp_img = new window.rive.Rive({
                            src: withBase('assets/riv/Four.riv'),
                            canvas: expCanvas,
                            autoplay: true,
                            stateMachines: 'Four',
                            useOffscreenRenderer: true,
                            onLoad: () => exp_img.resizeDrawingSurfaceToCanvas(),
                        });
                    }
                }

                for (const src of finalScripts) {
                    await loadScript(src);
                    bump();
                }

                // Mark libraries ready
                window.__LIBS_READY__ = true;
                window.dispatchEvent(new Event('libs:ready'));

                setTimeout(() => setIsVisible(false), 300);
            } catch (e) {
                // Finish preloader to avoid blocking UI even if some script fails
                console.error('Preloader load error:', e);
                setProgress(100);
                setIsVisible(false);
            }
        };

        loadAll();
    }, []);

    // Keep element mounted; toggle visibility instead of unmounting
    return (
        <div className={`preloader ${isVisible ? 'show' : ''}`} style={{ display: isVisible ? 'flex' : 'none' }}>
            <img src="/assets/images/loader_blue.gif" alt="" style={{ width: '10%' }} />
            <div className="txt">
                <div id="playBtn" style={{ cursor: 'pointer' }} className="loader_music">
                    <p data-sound="/assets/audio/sound.mp3" className="sound">
                        Click here to turn <br />
                        on Music <br />
                    </p>
                    <button className="equalizer sound loader_music_icon" data-sound="/assets/audio/sound.mp3">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            <div className="preloader_inner">{progress}%</div>
        </div>
    );
}

export default Preloader;