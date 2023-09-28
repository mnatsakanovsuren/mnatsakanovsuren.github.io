function updateCountdown(targetDate) {
  const now = new Date();
  const target = new Date(targetDate);
  const distance = target - now;

  if (distance > 0) {
    // const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // document.getElementById('months').textContent = months.toString().padStart(2, '0');
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }
}

const targetDate = '2023-10-15T12:00:00Z'; // Set your target date in ISO 8601 format
updateCountdown(targetDate);

// Update the countdown every second
setInterval(() => {
  updateCountdown(targetDate);
}, 1000);
