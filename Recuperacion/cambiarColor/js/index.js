const button = document.querySelector('button');
const h1 = document.getElementById('colorTexto');
const modoColor = document.getElementById('modoColor');

const coloresSimples = [
  "red", "blue", "green", "yellow", "orange", "purple", "pink",
  "teal", "brown", "black", "white", "gray", "cyan", "magenta"
];

button.addEventListener('click', () => {
  let colorHex;
  
  if (modoColor.value === "hex") {
    const color = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    colorHex = `#${color}`;
  } else {
    colorHex = coloresSimples[Math.floor(Math.random() * coloresSimples.length)];
  }

  document.body.style.backgroundColor = colorHex;
  button.style.backgroundColor = colorHex;
  h1.textContent = `BACKGROUND COLOR: ${colorHex}`;
});
