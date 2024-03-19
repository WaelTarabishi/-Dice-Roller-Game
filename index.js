const Rolling = () => {
  const numOfDice = document.getElementById("numOfDice").value;
  const diecResult = document.getElementById("diecResult");
  const diceImages = document.getElementById("diceImages");
  const element = document.querySelector(".container");
  const images = [];
  const values = [];
  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dices_images/${value}.png" />`);
  }

  diecResult.textContent = `dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
  element.classList.add("containerjs");
};
