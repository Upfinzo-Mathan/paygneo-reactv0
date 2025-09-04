
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
        
        // Load other scripts
        await Promise.all([
          loadScript('/assets/js/bootstrap.bundle.min.js'),
          loadScript('/assets/js/tilt.min.js'),
          loadScript('/assets/js/spotlight_effect.js'),
          loadScript('/assets/js/gsap.min.js'),
          loadScript('/assets/js/ScrollTrigger.min.js'),
          loadScript('/assets/js/ScrollToPlugin.min.js'),
          loadScript('/assets/js/motionpath.min.js'),
          loadScript('/assets/js/lottie.min.js'),
          loadScript('/assets/js/owl.carousel.min.js'),
          loadScript('/assets/js/home.js'),
          loadScript('https://unpkg.com/@rive-app/webgl2@latest')
        ]);

        // Initialize Rive animations
        if (window.rive) {
          const payroll_riv = new window.rive.Rive({
            src: "/assets/riv/payroll.riv",
            canvas: document.getElementById("payroll"),
            autoplay: true,
            artboard: "Payroll opt 1",
            stateMachines: "Payroll",
            useOffscreenRenderer: true,
            onLoad: () => {
              payroll_riv.resizeDrawingSurfaceToCanvas();
            },
          });

          const payout_riv = new window.rive.Rive({
            src: "/assets/riv/payout.riv",
            canvas: document.getElementById("payout"),
            autoplay: true,
            artboard: "Payout opt 1",
            stateMachines: "Payout",
            useOffscreenRenderer: true,
            onLoad: () => {
              payout_riv.resizeDrawingSurfaceToCanvas();
            },
          });

          const exp_img = new window.rive.Rive({
            src: "/assets/riv/Four.riv",
            canvas: document.getElementById("exp-anim"),
            autoplay: true,
            stateMachines: "Four",
            useOffscreenRenderer: true,
            onLoad: () => {
              exp_img.resizeDrawingSurfaceToCanvas();
            },
          });
        }
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
