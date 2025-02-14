import React, { useRef } from "react";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Music() {
  const navigate = useNavigate();

  // Array of songs with only title and positioning information
  const songs = [
    { title: "Your smile when you get shy", left: "5%", top: "5%" },
    { title: "Your laugh/scream when I tickle you", left: "40%", top: "15%" },
    { title: "How you start hitting me when you laugh", left: "15%", top: "40%" },
    { title: "When you get overstimulated and become autistic (or is that me?)", left: "30%", top: "75%" },
    { title: "When you speak Nepali and try to 'japad' me", left: "5%", top: "65%" },
    { title: "When you are cold and you say 'Aachuu' it's very cute", left: "25%", top: "90%" },
    { title: "When you snore and drool and fart when you sleep with me", left: "35%", top: "50%" },
    { title: "The way you always are caring about your family and doing so much to help", left: "10%", top: "25%" },
    { title: "How driven you are about your life and career goals - very inspiring", left: "55%", top: "10%" },
    { title: "When you feed me food with your hands I ABSOLUTE LOVE THIS", left: "60%", top: "20%" },
    { title: "How you work so hard to have your dream aesthetic and make everything look so nice", left: "70%", top: "30%" },
    { title: "When you support me and my goals too", left: "80%", top: "40%" },
    { title: "When you get silly and start acting like a baby and doing crazy silly things I LOVE", left: "15%", top: "80%" },
    { title: "When you send me silly cat memes and say 'us' I love that", left: "45%", top: "60%" },
    { title: "When you sleep on the phone with me every night it makes me feel so close to you", left: "30%", top: "10%" },
    { title: "How much effort you go through to see me whenever I come - the effort and difficulty is not lost on me and I love you", left: "65%", top: "85%" },
    { title: "When we left Travis Scott and you took care of me when I was sleepy and crying and gave me food I'll always appreciate you for that", left: "50%", top: "50%" },
    { title: "How you work so hard to have your dream aesthetic and make everything look so nice", left: "20%", top: "30%" },
    { title: "When you put up with me even when you get really upset about having to ask for things and me not listening - I'm sorry and I'll be better for you", left: "75%", top: "65%" },
    { title: "When you get me delicious food I really appreciate it - and when you made me food it was very yummy I LOVE THAT SHIT", left: "35%", top: "85%" },
    { title: "Basically, I love everything about you and I'm very very lucky to have you and I am thankful for you everyday", left: "85%", top: "25%" },
  ];
  

  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px] sm:max-w-[800px] md:max-w-[1200px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 mt-4 drop-shadow-lg text-white text-center">
          21 Reasons why I love you
        </h1>

        <div
          ref={containerRef}
          className="relative w-full h-[40rem] rounded-lg overflow-hidden mt-8 mb-12"
        >
          {songs.map((song, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{ left: song.left, top: song.top }}
              drag
              dragConstraints={containerRef}
            >
              <div className="bg-white/30 backdrop-blur-lg rounded-xl p-4 flex items-center justify-center">
                <h2 className="text-white font-medium text-sm text-center whitespace-normal break-words">
                  {song.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="flex justify-center w-full mt-4 mb-4">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate("/recap")}
          >
            Still not satisfied?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Music;
