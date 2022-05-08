import confetti from "canvas-confetti";

export const runConfetti = () => {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 },
  });
};
