const quotes = [
    "Believe you can and you're halfway there.",
    "Do one thing every day that scares you.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The best way to predict the future is to invent it."
  ];
  
  const generateBtn = document.getElementById('generateBtn');
  const quoteElement = document.getElementById('quote');
  
  generateBtn.addEventListener('click', () => {
    // Random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
  
    // Random background color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  });