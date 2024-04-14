const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = 'http://localhost:3000/minions1/';

async function fetchHandler() {   
  try {
    const response = await fetch(url);
    const data = await response.json();
    const index = Math.floor(Math.random() * data.length); // Генерируем случайный индекс от 0 до длины массива
    console.log(data[index].url);
    image.src = data[index].url;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  fetchHandler();
});
