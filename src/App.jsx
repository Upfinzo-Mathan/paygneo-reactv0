
import './App.css'
import { useEffect } from 'react'
import Preloader from './Components/PreloaderComponent/Preloader'
import { Navigation } from './Components/NavigationComponent'
import {
  BannerSection,
  ProductSection,
  PayoutServiceSection,
  SecurePrivateSection,
  PayoutTextSection,
  PaymentWorkflowSection,
  PaymentsTextSection,
  PoweringSection,
  PaymentProcessSection,
  SupportSection,
  ReachOutSection,
  Footer
} from './Components/SectionComponent'
import {
  CursorEffect,
  BeamEffect,
  AudioPlayer
} from './Components/SmallComponent'

function App() {
  useEffect(() => {
    // Load external scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        // Avoid duplicate script injections (e.g., due to React StrictMode double-invocation)
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
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
    };

    const loadScripts = async () => {
      try {
        // Run only once per page load
        if (window.__externalScriptsLoaded) return;
        // Load jQuery first
        await loadScript('/assets/js/jquery.js');
        
        // 1) Load GSAP core and plugins FIRST
        await loadScript('/assets/js/gsap.min.js');
        await loadScript('/assets/js/ScrollTrigger.min.js');
        await loadScript('/assets/js/ScrollToPlugin.min.js');
        await loadScript('/assets/js/motionpath.min.js');

        // 2) Register GSAP plugins BEFORE any animation scripts run
        if (window.gsap) {
          const plugins = [];
          if (window.ScrollTrigger) plugins.push(window.ScrollTrigger);
          if (window.ScrollToPlugin) plugins.push(window.ScrollToPlugin);
          if (window.MotionPathPlugin) plugins.push(window.MotionPathPlugin);
          try {
            if (plugins.length) {
              window.gsap.registerPlugin(...plugins);
            }
          } catch (e) {
            // ignore plugin registration errors, continue
          }
        }

        // 3) Load remaining vendor scripts (order-safe)
        await Promise.all([
          loadScript('/assets/js/bootstrap.bundle.min.js'),
          loadScript('/assets/js/tilt.min.js'),
          loadScript('/assets/js/spotlight_effect.js'),
          loadScript('/assets/js/lottie.min.js'),
          loadScript('/assets/js/owl.carousel.min.js'),
          loadScript('https://unpkg.com/@rive-app/webgl2@latest')
        ]);

        // 4) Ensure full window load to guarantee all assets, fonts and React DOM are ready
        await new Promise((resolve) => {
          if (document.readyState === 'complete') {
            resolve();
          } else {
            window.addEventListener('load', resolve, { once: true });
          }
        });

        // 5) Small extra paint delay
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

        // 6) Load site animation logic LAST
        try {
          await loadScript('/assets/js/home.js');
        } catch (e) {
          console.error('Failed loading home.js', e);
        }

        // 7) Safety: if preloader overlay is still present after 5s, remove it
        setTimeout(() => {
          const preloader = document.querySelector('.preloader');
          if (preloader) {
            preloader.parentNode?.removeChild(preloader);
          }
        }, 5000);

        // Initialize Rive animations
        if (window.rive) {
          const payrollCanvas = document.getElementById("payroll");
          const payoutCanvas = document.getElementById("payout");
          const expCanvas = document.getElementById("exp-anim");

          if (payrollCanvas) {
            const payroll_riv = new window.rive.Rive({
              src: "/assets/riv/payroll.riv",
              canvas: payrollCanvas,
              autoplay: true,
              artboard: "Payroll opt 1",
              stateMachines: "Payroll",
              useOffscreenRenderer: true,
              onLoad: () => {
                payroll_riv.resizeDrawingSurfaceToCanvas();
              },
            });
          }

          if (payoutCanvas) {
            const payout_riv = new window.rive.Rive({
              src: "/assets/riv/payout.riv",
              canvas: payoutCanvas,
              autoplay: true,
              artboard: "Payout opt 1",
              stateMachines: "Payout",
              useOffscreenRenderer: true,
              onLoad: () => {
                payout_riv.resizeDrawingSurfaceToCanvas();
              },
            });
          }

          if (expCanvas) {
            const exp_img = new window.rive.Rive({
              src: "/assets/riv/Four.riv",
              canvas: expCanvas,
              autoplay: true,
              stateMachines: "Four",
              useOffscreenRenderer: true,
              onLoad: () => {
                exp_img.resizeDrawingSurfaceToCanvas();
              },
            });
          }
        }

        window.__externalScriptsLoaded = true;
      } catch (error) {
        console.error('Error loading scripts:', error);
        // Remove preloader as emergency fallback
        const preloader = document.querySelector('.preloader');
        if (preloader) preloader.parentNode?.removeChild(preloader);
      }
    };

    loadScripts();
  }, []);

  return (
    <>
      <Preloader />
      <div className="page">
        <main className="smooth-scroll">
          <CursorEffect />
          <Navigation />
          <BannerSection />
          <ProductSection />
          <PayoutServiceSection />
          <SecurePrivateSection />
          <PayoutTextSection />
          <PaymentWorkflowSection />
          <PaymentsTextSection />
          <PoweringSection />
          <PaymentProcessSection />
          <SupportSection />
          <ReachOutSection />
        </main>
        <Footer />
        <AudioPlayer />
      </div>
      <BeamEffect />
    </>
  )
}

export default App
