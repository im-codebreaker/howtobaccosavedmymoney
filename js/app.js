const startDateInput = document.getElementById('startDateInput');
const cigarettesByDayInput = document.getElementById('cigarettesByDayInput');
const packetPriceInput = document.getElementById('packetPriceInput');
const packetPriceContainer = document.getElementById('packetPrice');
const button = document.getElementById('button');
const brandsContainer = document.getElementById('brandsContainer');

brandsContainer.addEventListener('click', function (event) {
  console.log(event);
});
const xhr = new XMLHttpRequest();
xhr.open('GET', 'data/prices.json');
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const cigarettes = JSON.parse(xhr.responseText);
    cigarettes.brands.forEach((brand) => {
      createSvg(brand);
    });
  }
};

/**
 * This function taking a brand object as argument and create an img element with svg url and brand name as alt
 * @param {object} brand a brand of cigarettes
 */
const createSvg = (brand) => {
  const img = document.createElement('img');
  img.src = brand.url;
  img.alt = brand.name;
  brandsContainer.appendChild(img);
};

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
