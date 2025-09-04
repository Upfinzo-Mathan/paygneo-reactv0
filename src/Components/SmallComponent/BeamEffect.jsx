import { useEffect } from 'react';

function BeamEffect() {
    useEffect(() => {
        const container = document.getElementById('beam-container');
        let lastSpawn = 0;
        const spawnInterval = 600; // ms between beams

        function createBeam() {
            const beam = document.createElement('div');
            beam.classList.add('beam');
            beam.style.left = `${Math.random() * window.innerWidth}px`;
            container.appendChild(beam);

            beam.addEventListener('animationend', () => {
                const x = beam.offsetLeft;

                // Visual explosion
                const explosion = document.createElement('div');
                explosion.classList.add('explosion');
                explosion.style.left = `${x - 10}px`;
                explosion.style.top = `calc(100vh - 250px)`;
                container.appendChild(explosion);

                beam.remove();

                setTimeout(() => explosion.remove(), 500);
            });
        }

        // Loop function using requestAnimationFrame
        function animationLoop(timestamp) {
            if (timestamp - lastSpawn > spawnInterval) {
                createBeam();
                lastSpawn = timestamp;
            }
            requestAnimationFrame(animationLoop);
        }

        requestAnimationFrame(animationLoop);

        return () => {
            // Cleanup if needed
        };
    }, []);

    return (
        <div id="beam-container" style={{
            position: 'fixed',
            width: '100%',
            height: 'calc(100% - 150px)',
            zIndex: -1,
            top: 0,
            opacity: 0.3
        }}>
            <style>{`
                .beam {
                    position: absolute;
                    width: 2px;
                    height: 100px;
                    background: linear-gradient(to bottom, #4c04b9, rgba(0, 136, 255, 0));
                    animation: fall 2s linear forwards;
                    opacity: 0.8;
                    z-index: 1;
                    background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), color-stop(75%, #3c25f0), to(#0f05c7));
                    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #01a6ff 75%, #5101fe 100%);
                }

                @keyframes fall {
                    0% { transform: translateY(-150px); }
                    100% { transform: translateY(60vh); }
                }

                .explosion {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    pointer-events: none;
                    background: radial-gradient(circle, #5e00ff 0%, rgba(94, 50, 255, 0) 100%);
                    animation: explode 0.5s ease-out forwards;
                    z-index: 1;
                }

                @keyframes explode {
                    0% { transform: scale(0.5); opacity: 1; z-index: 1; }
                    100% { transform: scale(3); opacity: 0; z-index: 0; }
                }
            `}</style>
        </div>
    );
}

export default BeamEffect;
