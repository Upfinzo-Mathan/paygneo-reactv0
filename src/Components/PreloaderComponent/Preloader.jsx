import { useEffect, useState } from 'react';

function Preloader() {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsVisible(false), 500);
                    return 100;
                }
                return prev + 10;
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`preloader ${isVisible ? 'show' : ''}`}>
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