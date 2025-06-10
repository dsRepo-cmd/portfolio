import React, { useEffect, useState } from "react";

interface Keyframe {
  percentage: number;
  translateX: number;
  translateY: number;
  scale: number;
}

interface Firefly {
  id: number;
  rotationSpeed: number;
  flashDuration: number;
  flashDelay: number;
  keyframes: Keyframe[];
}

const FireflyAnimation: React.FC = () => {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  const quantity: number = 15;

  useEffect(() => {
    // Generate fireflies with random properties
    const generateFireflies = (): Firefly[] => {
      const flies: Firefly[] = [];
      for (let i = 0; i < quantity; i++) {
        const steps: number = Math.floor(Math.random() * 12) + 16;
        const rotationSpeed: number = Math.floor(Math.random() * 10) + 8;
        const flashDuration: number = Math.floor(Math.random() * 6000) + 5000;
        const flashDelay: number = Math.floor(Math.random() * 8000) + 500;

        // Generate keyframe positions
        const keyframes: Keyframe[] = [];
        for (let step = 0; step <= steps; step++) {
          const percentage: number = step * (100 / steps);
          const translateX: number = Math.random() * 100 - 50;
          const translateY: number = Math.random() * 100 - 50;
          const scale: number = Math.random() * 0.75 + 0.25;

          keyframes.push({
            percentage,
            translateX,
            translateY,
            scale,
          });
        }

        flies.push({
          id: i,
          rotationSpeed,
          flashDuration,
          flashDelay,
          keyframes,
        });
      }
      return flies;
    };

    setFireflies(generateFireflies());
  }, []);

  // Generate CSS for keyframes
  const generateKeyframes = (firefly: Firefly): string => {
    const keyframeString: string = firefly.keyframes
      .map(
        (kf: Keyframe) =>
          `${kf.percentage}% { transform: translateX(${kf.translateX}vw) translateY(${kf.translateY}vh) scale(${kf.scale}); }`
      )
      .join(" ");

    return `@keyframes move${firefly.id} { ${keyframeString} }`;
  };

  const allKeyframes: string = fireflies.map(generateKeyframes).join(" ");

  return (
    <div className=" dark:bg-[#201e30] overflow-hidden">
      <style>{`
        ${allKeyframes}
        
        @keyframes drift {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes flash {
          0%, 30%, 100% {
            opacity: 0;
            box-shadow: 0 0 0vw 0vw yellow;
          }
          5% {
            opacity: 1;
            box-shadow: 0 0 2vw 0.4vw yellow;
          }
        }
        
        .firefly {
          position: fixed;
          left: 50%;
          top: 50%;
          width: 0.4vw;
          height: 0.4vw;
          margin: -0.2vw 0 0 9.8vw;
          animation: ease 200s alternate infinite;
          pointer-events: none;
        }
        
        .firefly::before,
        .firefly::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform-origin: -10vw;
        }
        
        .firefly::before {
          background: black;
          opacity: 0.4;
          animation: drift ease alternate infinite;
        }
        
        .firefly::after {
          background: white;
          opacity: 0;
          box-shadow: 0 0 0vw 0vw yellow;
          animation: drift ease alternate infinite, flash ease infinite;
        }
        
        ${fireflies
          .map(
            (firefly: Firefly) => `
          .firefly:nth-child(${firefly.id + 1}) {
            animation-name: move${firefly.id};
          }
          .firefly:nth-child(${firefly.id + 1})::before {
            animation-duration: ${firefly.rotationSpeed}s;
          }
          .firefly:nth-child(${firefly.id + 1})::after {
            animation-duration: ${firefly.rotationSpeed}s, ${
              firefly.flashDuration
            }ms;
            animation-delay: 0ms, ${firefly.flashDelay}ms;
          }
        `
          )
          .join("")}
      `}</style>

      {fireflies.map((firefly: Firefly) => (
        <div key={firefly.id} className="firefly" />
      ))}
    </div>
  );
};

export default FireflyAnimation;
