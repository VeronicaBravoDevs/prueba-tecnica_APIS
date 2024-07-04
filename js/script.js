const busqueda = document.getElementById('searchInput');

const cardContainer = document.getElementById('cardContainer');

const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');

const randomUser = async () => {
  const response = await fetch('https://randomuser.me/api/?results=10');
  const randomData = await response.json();
  const randomUsers = randomData.results;

  randomUsers.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
  
      <img src="${user.picture.thumbnail}" alt="imagen ${user.name.first} ${user.name.last}">
      <h2><strong>${user.name.first} ${user.name.last}</strong></h2>
 
      <p>Edad: ${user.dob.age} años</p>
      <p>Ubicación: ${user.location.city}, ${user.location.country}</p>
      <p>Redes: 
        <a href="mailto:${user.email}"><i class="fa-solid fa-envelope"></i></a>
        <a href="https://www.instagram.com/${user.login.username}"><i class="fa-brands fa-square-instagram"></i></a>
      </p>
    `;
    card.addEventListener('click', () => openModal(user));
    cardContainer.appendChild(card);
  });
};


async function openModal(user) {
  modalContent.innerHTML = `
  
    <img src="${user.picture.large}" alt="imagen ${user.name.first} ${user.name.last}">
    <div>
    <p><strong>${user.name.first} ${user.name.last}</strong></p>
    <p>Genero: ${user.gender}</p>
    <p>Email: ${user.email}</p>
    <p>Tel: ${user.phone}</p>
    </div>
  `;

  const quoteResponse = await fetch('https://api.quotable.io/random');
  const quoteData = await quoteResponse.json();
  const quote = quoteData.content;
  const author = quoteData.author;

  const quoteElement = document.createElement('p');
  quoteElement.innerHTML = `"${quote}" - ${author}`;
  modalContent.appendChild(quoteElement);

  modal.style.display = 'block';
}

busqueda.addEventListener('input', () => {
  const consulta = busqueda.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const name = card.querySelector('strong').textContent.toLowerCase();
    if (name.includes(consulta)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

modal.addEventListener('click', ( ) => {
  
    modal.style.display = 'none';
  
});

randomUser();


