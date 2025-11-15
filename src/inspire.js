function getRandomQuote() {
  const quotes = [
    "Believe in yourself.",
    "Small steps every day.",
    "Discipline beats motivation.",
    "You are stronger than you think.",
    "Focus on progress, not perfection.",
  ];

  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

if (process.env.NODE_ENV !== "test") {
  console.log(getRandomQuote());
}

module.exports = { getRandomQuote };
