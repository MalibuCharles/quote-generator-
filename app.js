let quotes = [
"Love isn't something natural. Rather it requires discipline, concentration, patience, faith, and the overcoming of narcissism. It isn't a feeling, it is a practice.",
"Love has nothing to do with what you are expect to get — only with what you are expecting to give — which is everything.",
"Where there is great love, there are always miracles.",
"Have enough courage to trust love one more time and always one more time.",
"When you realize you want to spend the rest of your life with sombody, you want the rest of your life to start as soon as possible.",
"Love is that condition in which the happiness of another person is essential to your own.",
"I love you not only for what you are, but for what I am when I am with you.",
"I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
"To love and be loved is to feel the sun from both sides.",
"Life is the flower for which love is the honey."
]

function getQuote(){
    let randomNumber = Math.floor(Math.random()* quotes.length);
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
}