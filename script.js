const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const newQuoteButton = document.querySelector('#new-quote');
const statusElement = document.querySelector('#status');
const quoteCard = document.querySelector('.quote-card');

async function getNewQuote() {
  newQuoteButton.disabled = true;
  quoteCard.classList.add('is-loading');
  statusElement.textContent = 'Finding a fresh quote…';

  try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    if (!response.ok) throw new Error('Quote service unavailable');

    const data = await response.json();
    quoteElement.textContent = data.quote;
    authorElement.textContent = `— ${data.author}`;
    statusElement.textContent = 'A new perspective, just for you';
  } catch (error) {
    statusElement.textContent = 'Could not load a quote. Please try again.';
    console.error(error);
  } finally {
    newQuoteButton.disabled = false;
    quoteCard.classList.remove('is-loading');
  }
}

newQuoteButton.addEventListener('click', getNewQuote);
