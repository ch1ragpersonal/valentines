import React, { useEffect, useRef, useState } from 'react';
import { gsap, CSSRulePlugin } from 'gsap/all';
import '../index.css';
import { ArrowLeft, ArrowRight } from "./icons";
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(CSSRulePlugin);

function Letter() {
  const envelopeRef = useRef(null);
  const letterRef = useRef(null);
  const celebrationRef = useRef(null);
  const navigate = useNavigate();

  // Track if the letter is open and if celebration is active.
  const [isOpen, setIsOpen] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    const flap = CSSRulePlugin.getRule(".envelope:before");

    // Timeline for opening/closing the envelope & letter.
    const t1 = gsap.timeline({
      paused: true,
      onComplete: () => setIsOpen(true),
      onReverseComplete: () => setIsOpen(false)
    });
    t1.to(flap, {
      duration: 0.5,
      cssRule: { rotateX: 180 },
    })
      .set(flap, { cssRule: { zIndex: 10 } })
      .to(letterRef.current, {
        scale: 0.8,
        translateY: -200,
        duration: 0.9,
        ease: "back.inOut(1.5)",
      })
      .set(letterRef.current, { zIndex: 40 })
      .to(letterRef.current, {
        duration: 0.7,
        ease: "back.out(0.4)",
        translateY: -5,
        translateZ: 250,
      });

    // (Unused timeline placeholder – you might add further animation here)
    const t2 = gsap.timeline({ paused: true });

    const openCard = () => {
      t1.play();
      t2.play();
    };

    const closeCard = (e) => {
      e.stopPropagation();
      t1.reverse();
      t2.reverse();
      setCelebrate(false); // turn off celebration when closing
    };

    const envelopeElement = envelopeRef.current;
    const closeButton = letterRef.current.querySelector(".close");

    envelopeElement.addEventListener("click", openCard);
    closeButton.addEventListener("click", closeCard);

    return () => {
      envelopeElement.removeEventListener("click", openCard);
      closeButton.removeEventListener("click", closeCard);
    };
  }, []);

  // When celebration is toggled on, run our GSAP animations.
  useEffect(() => {
    if (celebrate) {
      runCelebration();
    } else if (celebrationRef.current) {
      // Remove any celebration children if celebration is turned off.
      celebrationRef.current.innerHTML = '';
    }
  }, [celebrate]);

  // This function creates hearts and fireworks elements, then animates them.
  const runCelebration = () => {
    const container = celebrationRef.current;
    if (!container) return;
    container.innerHTML = ''; // Clear previous elements

    const numHearts = 50;
    const numFireworks = 40;
    const numPopper = 30;

    // Create and animate hearts.
    for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerText = "❤️";
      container.appendChild(heart);
      gsap.fromTo(
        heart,
        {
          opacity: 0,
          scale: 0,
          x: Math.random() * window.innerWidth,
          y: window.innerHeight,
        },
        {
          opacity: 1,
          scale: 1,
          y: Math.random() * window.innerHeight / 2,
          duration: 3,
          ease: "power1.out",
          repeat: -1,
          delay: Math.random() * 2,
        }
      );
    }

    // Create and animate fireworks.
    for (let i = 0; i < numFireworks; i++) {
      const firework = document.createElement("div");
      firework.classList.add("firework");
      firework.innerText = "🎆";
      container.appendChild(firework);
      gsap.fromTo(
        firework,
        {
          opacity: 0,
          scale: 0,
          x: Math.random() * window.innerWidth,
          y: window.innerHeight,
        },
        {
          opacity: 1,
          scale: 1,
          y: Math.random() * window.innerHeight / 2,
          duration: 2,
          ease: "power1.out",
          repeat: -1,
          delay: Math.random() * 2,
        }
      );
    }
    for (let i = 0; i < numPopper; i++) {
      const popper = document.createElement("div");
      popper.classList.add("popper");
      popper.innerText = "🎉";
      container.appendChild(popper);
      gsap.fromTo(
        popper,
        {
          opacity: 0,
          scale: 0,
          x: Math.random() * window.innerWidth,
          y: window.innerHeight,
        },
        {
          opacity: 1,
          scale: 1,
          y: Math.random() * window.innerHeight / 2,
          duration: 2,
          ease: "power1.out",
          repeat: -1,
          delay: Math.random() * 2,
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center relative">
      <div className="w-[90%] max-w-[400px]">
        <div className="flex-grow flex items-center justify-center h-[400px] relative">
          <div className="letter-container">
            <div className="content">
              <div className="envelope" ref={envelopeRef}></div>
              <div className="letter" ref={letterRef}>
                <div className="body">
                  <span className="close">x</span>
                  <div className="message">
                    Hi my love, I love you very much and I am sorry for all of the heartache I have caused you.
                    I would be honored if you were my Valentine. So... will you be my valentine?
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="mt-4 text-center">
                  <label className="inline-flex items-center px-4 py-2 bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={celebrate} 
                      onChange={(e) => setCelebrate(e.target.checked)} 
                      className="w-4 h-4 text-white border border-white/50 rounded-sm"
                    />
                    Yes!
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full">
        <button
          className="mx-auto px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
          onClick={() => navigate('/recap')}
        >
           Back
        </button>
      </div>
      </div>
      {/* Celebration container fills the screen when active */}
      {celebrate && (
        <div ref={celebrationRef} className="celebration-container"></div>
      )}
    </div>
  );
}

export default Letter;
