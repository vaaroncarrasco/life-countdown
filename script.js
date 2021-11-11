if ( !localStorage.getItem('deadline') ) {
  const inputYear = prompt('Insert the year you think you may die:', '2077');

  localStorage.setItem('deadline', inputYear);
}

const deadline = localStorage.getItem('deadline')

const countDownDate = new Date(`Jan 1, ${deadline}`).getTime();

const x = setInterval(function() {

  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "GAME OVER";
  }

}, 1000);

document.getElementById('btn').addEventListener('click', function() {
  localStorage.removeItem('deadline');
  location.reload()
})