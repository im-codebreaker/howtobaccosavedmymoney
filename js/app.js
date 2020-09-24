const startDateInput = document.getElementById('startDateInput');
const cigarettesByDayInput = document.getElementById('cigarettesByDayInput');
const packetPriceInput = document.getElementById('packetPriceInput');
const button = document.getElementById('button');

const saveMoneyAndTime = (dDay, startDay, cigarettesByDay, packetPrice) => {
  const intervalInSeconds = Math.floor((dDay - startDay) / 1000);
  const intervalInDays = Math.floor(intervalInSeconds / 86400);
  const priceByCigarette = (packetPrice * cigarettesByDay) / 20;

  const displayDaysMoneyAndCigarettes = (
    intervalInDays,
    cigarettesByDay,
    priceByCigarette
  ) => {
    const moneySaved = intervalInDays * priceByCigarette;
    const cigarettesSaved = cigarettesByDay * intervalInDays;
    const div = document.createElement('div');
    div.innerHTML = `<p>Good Job ${intervalInDays} days without smoking,<span> you did without ${cigarettesSaved} cigarettes and saved ${moneySaved} euros </span></p>`;
    results.appendChild(div);
  };

  displayDaysMoneyAndCigarettes(
    intervalInDays,
    cigarettesByDay,
    priceByCigarette
  );
};
button.addEventListener('click', function (event) {
  const startDay = new Date(startDateInput.value);
  const dDay = new Date();
  const cigarettesByDay = cigarettesByDayInput.value;
  const packetPrice = packetPriceInput.value;

  results.innerHTML = '';
  saveMoneyAndTime(dDay, startDay, cigarettesByDay, packetPrice);
});
