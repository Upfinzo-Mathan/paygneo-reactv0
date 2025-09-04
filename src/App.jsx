
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
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        // Load jQuery first
        await loadScript('/assets/js/jquery.js');

        // Load GSAP core, then plugins in sequence to guarantee availability
        await loadScript('/assets/js/gsap.min.js');
        await loadScript('/assets/js/ScrollTrigger.min.js');
        await loadScript('/assets/js/ScrollToPlugin.min.js');
        await loadScript('/assets/js/motionpath.min.js');

        // Register plugins if available (needed for home.js usage)
        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
        }

        // Load the rest that don't require strict ordering
        await Promise.all([
          loadScript('/assets/js/bootstrap.bundle.min.js'),
          loadScript('/assets/js/tilt.min.js'),
          loadScript('/assets/js/spotlight_effect.js'),
          loadScript('/assets/js/lottie.min.js'),
          loadScript('/assets/js/owl.carousel.min.js'),
        ]);

        // Load Rive runtime
        await loadScript('https://unpkg.com/@rive-app/webgl2@latest');

        // Only initialize Rive if target canvases exist
        if (window.rive) {
          const payrollCanvas = document.getElementById('payroll');
          const payoutCanvas = document.getElementById('payout');
          const expCanvas = document.getElementById('exp-anim');

          if (payrollCanvas) {
            const payroll_riv = new window.rive.Rive({
              src: '/assets/riv/payroll.riv',
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
              src: '/assets/riv/payout.riv',
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
              src: '/assets/riv/Four.riv',
              canvas: expCanvas,
              autoplay: true,
              stateMachines: 'Four',
              useOffscreenRenderer: true,
              onLoad: () => exp_img.resizeDrawingSurfaceToCanvas(),
            });
          }
        }

        // Finally load site behaviors that expect GSAP + plugins to be ready
        await loadScript('/assets/js/home.js');
      } catch (error) {
        console.error('Error loading scripts:', error);
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
