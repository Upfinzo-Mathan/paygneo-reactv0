
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

        // Load vendor scripts that don't crash on missing elements
        await Promise.all([
          loadScript('/assets/js/bootstrap.bundle.min.js'),
          loadScript('/assets/js/tilt.min.js'),
          loadScript('/assets/js/spotlight_effect.js'),
          loadScript('/assets/js/lottie.min.js'),
          loadScript('/assets/js/owl.carousel.min.js'),
          // Use Rive canvas build to avoid WebGL shader warnings
          loadScript('https://unpkg.com/@rive-app/canvas@latest')
        ]);

        // Ensure full window load to guarantee all assets, fonts and React DOM are ready
        await new Promise((resolve) => {
          if (document.readyState === 'complete') {
            resolve();
          } else {
            window.addEventListener('load', resolve, { once: true });
          }
        });

        // Small extra paint delay
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

        // SAFE LOADER: hide preloader if present, ensure page is visible
        const preloader = document.querySelector('.preloader');
        if (preloader) {
          preloader.classList.remove('show');
          // remove from DOM shortly after to avoid blocking interactions
          setTimeout(() => preloader.parentNode?.removeChild(preloader), 300);
        }
        const page = document.querySelector('.page');
        if (page) {
          page.style.visibility = 'visible';
          page.style.opacity = '1';
        }

        // Initialize Rive animations safely (only if canvases exist)
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
              onLoad: () => payroll_riv.resizeDrawingSurfaceToCanvas(),
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
              onLoad: () => payout_riv.resizeDrawingSurfaceToCanvas(),
            });
          }

          if (expCanvas) {
            const exp_img = new window.rive.Rive({
              src: "/assets/riv/Four.riv",
              canvas: expCanvas,
              autoplay: true,
              stateMachines: "Four",
              useOffscreenRenderer: true,
              onLoad: () => exp_img.resizeDrawingSurfaceToCanvas(),
            });
          }
        }

        window.__externalScriptsLoaded = true;
      } catch (error) {
        console.error('Error loading scripts:', error);
        // Emergency fallback: remove preloader if it blocks the UI
        const preloader = document.querySelector('.preloader');
        if (preloader) preloader.parentNode?.removeChild(preloader);
      }
    };

    loadScripts();
  }, []);

  return (
    <>
      <Preloader />
      <div className="page" style={{ visibility: 'hidden', opacity: 0 }}>
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
