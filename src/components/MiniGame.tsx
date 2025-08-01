import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideUp } from "../animations/framerConfig";

// Simple Flappy Bird clone using Canvas
export default function MiniGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState<number>(() => Number(localStorage.getItem("minigame-score")) || 0);
  const [best, setBest] = useState<number>(() => Number(localStorage.getItem("minigame-best")) || 0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Game variables
    let birdY = 150, birdV = 0, gravity = 0.6, jump = -8;
    let pipes: { x: number; gapY: number }[] = [];
    let frame = 0, localScore = 0, gameOver = false;

    function reset() {
      birdY = 150; birdV = 0; pipes = []; frame = 0; localScore = 0; gameOver = false;
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, 320, 400);
      // Background
      ctx.fillStyle = "#e0f2fe";
      ctx.fillRect(0, 0, 320, 400);

      // Bird
      ctx.fillStyle = "#2563eb";
      ctx.beginPath();
      ctx.arc(60, birdY, 16, 0, 2 * Math.PI);
      ctx.fill();

      // Pipes
      for (let i = 0; i < pipes.length; i++) {
        ctx.fillStyle = "#22d3ee";
        ctx.fillRect(pipes[i].x, 0, 40, pipes[i].gapY - 60);
        ctx.fillRect(pipes[i].x, pipes[i].gapY + 60, 40, 400 - pipes[i].gapY - 60);
      }

      // Score
      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 24px sans-serif";
      ctx.fillText(localScore.toString(), 150, 40);
    }

    function update() {
      birdV += gravity;
      birdY += birdV;
      if (birdY > 384) { gameOver = true; }
      if (birdY < 0) { birdY = 0; birdV = 0; }

      // Pipes
      if (frame % 90 === 0) {
        pipes.push({ x: 320, gapY: 100 + Math.random() * 200 });
      }
      for (let i = 0; i < pipes.length; i++) {
        pipes[i].x -= 2;
        // Collision
        if (
          pipes[i].x < 76 && pipes[i].x + 40 > 44 &&
          (birdY < pipes[i].gapY - 60 || birdY > pipes[i].gapY + 60)
        ) {
          gameOver = true;
        }
        // Score
        if (pipes[i].x + 40 === 60) {
          localScore++;
        }
      }
      pipes = pipes.filter(p => p.x > -40);
    }

    function loop() {
      if (!gameOver) {
        update();
        draw();
        frame++;
        requestAnimationFrame(loop);
      } else {
        setScore(localScore);
        setBest(prev => {
          const newBest = Math.max(prev, localScore);
          localStorage.setItem("minigame-best", newBest.toString());
          return newBest;
        });
        localStorage.setItem("minigame-score", localScore.toString());
        if (ctx) {
          ctx.fillStyle = "#f87171";
          ctx.font = "bold 24px sans-serif";
          ctx.fillText("Game Over!", 90, 200);
          ctx.font = "16px sans-serif";
          ctx.fillText("Click to play again", 90, 230);
        }
      }
    }

    reset();
    draw();

    function handleJump() {
      if (gameOver) {
        setPlaying(false);
        setTimeout(() => setPlaying(true), 100);
      } else {
        birdV = jump;
      }
    }

    canvas.addEventListener("mousedown", handleJump);
    canvas.addEventListener("touchstart", handleJump);

    loop();

    return () => {
      canvas.removeEventListener("mousedown", handleJump);
      canvas.removeEventListener("touchstart", handleJump);
    };
  }, [playing]);

  return (
    <section id="minigame" className="py-24 bg-transparent flex flex-col items-center">
      <motion.h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300" variants={slideUp} initial="hidden" whileInView="visible">
        Mini-Game: Flappy Bird
      </motion.h2>
      <motion.div className="glass p-6 rounded-xl flex flex-col items-center" variants={slideUp} initial="hidden" whileInView="visible">
        <canvas ref={canvasRef} width={320} height={400} className="rounded-lg border mb-4" />
        <div className="flex gap-8 mb-2">
          <span className="text-blue-700 dark:text-blue-300 font-semibold">Score: {score}</span>
          <span className="text-blue-700 dark:text-blue-300 font-semibold">Best: {best}</span>
        </div>
        {!playing && (
          <button
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            onClick={() => setPlaying(true)}
          >
            Play
          </button>
        )}
        <p className="text-xs text-gray-500 mt-2">Click or tap to jump!</p>
      </motion.div>
    </section>
  );
}