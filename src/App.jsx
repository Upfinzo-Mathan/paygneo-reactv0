
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
    // Compute absolute base URL for assets (supports subpath hosting)
    const envBase = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
    const absoluteBase = new URL(envBase, window.location.origin).toString();
    const withBase = (path) => new URL(path.replace(/^\/+/, ''), absoluteBase).toString();
    // Expose for debugging
    window.__ASSET_BASE__ = absoluteBase;

    // Load external scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = (e) => {
          console.error('Failed to load script:', src, e);
          reject(e);
        };
        document.head.appendChild(script);
      });
    };

    // Rewrite assets that use "/assets/..." to respect base path (only when hosted on subpath)
    const rewriteAssetsToBase = () => {
      if (absoluteBase.endsWith('/')) {
        // When base is root '/', asset URLs are already correct, skip rewrite
        if (absoluteBase === `${window.location.origin}/`) return;
      }
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

    const loadScripts = async () => {
      try {
        rewriteAssetsToBase();

        // Load jQuery first
        await loadScript(withBase('assets/js/jquery.js'));

        // Load GSAP core, then plugins in sequence to guarantee availability
        await loadScript(withBase('assets/js/gsap.min.js'));
        await loadScript(withBase('assets/js/ScrollTrigger.min.js'));
        await loadScript(withBase('assets/js/ScrollToPlugin.min.js'));
        await loadScript(withBase('assets/js/motionpath.min.js'));

        // Register plugins if available (needed for home.js usage)
        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
        }

        // Load the rest that don't require strict ordering
        await Promise.all([
          loadScript(withBase('assets/js/bootstrap.bundle.min.js')),
          loadScript(withBase('assets/js/tilt.min.js')),
          loadScript(withBase('assets/js/spotlight_effect.js')),
          loadScript(withBase('assets/js/lottie.min.js')),
          loadScript(withBase('assets/js/owl.carousel.min.js')),
        ]);

        // Load Rive runtime (Canvas
        // 
        //  build to reduce GPU shader warnings)
        await loadScript('https://unpkg.com/@rive-app/canvas@latest');

        // Only initialize Rive if target canvases exist
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

        // Finally load site behaviors that expect GSAP + plugins to be ready
        await loadScript(withBase('assets/js/home.js'));
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();
  }, []);

  // Ensure ScrollTrigger measures after videos size themselves in hosted build
  useEffect(() => {
    const refresh = () => {
      if (window.ScrollTrigger && window.ScrollTrigger.refresh) {
        try { window.ScrollTrigger.refresh(); } catch (_) {}
      }
    };

    const prepareVideo = (video) => {
      if (!video) return;
      // Ensure autoplay inline behavior
      video.setAttribute('playsinline', '');
      video.setAttribute('muted', '');
      video.muted = true;
      // Refresh when metadata known (sizes)
      if (video.readyState >= 1) {
        refresh();
      } else {
        const onMeta = () => { refresh(); video.removeEventListener('loadedmetadata', onMeta); };
        video.addEventListener('loadedmetadata', onMeta);
      }
    };

    const hookup = () => {
      const payout = document.querySelector('.payout_text_video');
      const payments = document.querySelector('.payments_text_video');
      prepareVideo(payout);
      prepareVideo(payments);
      // Additional refresh after a tick for layout
      setTimeout(refresh, 100);
      setTimeout(refresh, 400);
    };

    // When libs ready (from Preloader) or on window load
    window.addEventListener('libs:ready', hookup, { once: true });
    window.addEventListener('load', hookup, { once: true });

    return () => {
      window.removeEventListener('libs:ready', hookup);
      window.removeEventListener('load', hookup);
    };
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
