// varaibles ---
let people;
let favPeople = [];

const container = document.querySelector('.container');
container.addEventListener('click', eventOpenBtn);

if (localStorage.getItem('people')) {
  const getPeopleData = localStorage.getItem('people');
  people = JSON.parse(getPeopleData);
  renderPersons(people);
} else {
  getDataFromSWAPI(initApp);
}

// execution --->

// getDataFromSWAPI(initApp);

// fisrst get data from SWAPI:

function getDataFromSWAPI(loadHandler) {
  const xhr = new XMLHttpRequest();
  const method = 'GET';
  const url = 'https://swapi.dev/api/people/';

  xhr.responseType = 'json';
  xhr.open(method, url, true);

  xhr.addEventListener('load', loadHandler);
  xhr.send();
}

function initApp(event) {
  const xhr = event.target;
  const data = xhr.response;

  people = data.results;

  localStorage.setItem('people', JSON.stringify(people));
  renderPersons(people);
}

function renderPersons(people) {
  const menu = document.querySelector('.menu');
  let html = people
    .map((item, index) => {
      return `
      <li class="item" id-key='${(item.id = index)}' '${(item.completed = false)}'>${
        item.name
      }
      <button id="btn" class="arrow-button"><i class="arrow"></i></button>
      <button class="favorite-button"><i class="fa fa-heart"></i></button>
      <div  class="item-info">
      <p>birth_year: ${item.birth_year}</p>
      <p>Mass: ${item.mass} kg</p>
      <p>Eye_color: ${item.eye_color}</p>
      <p>Gender: ${item.gender}</p>
      <p>Url: ${item.url}</p>
      </div>
      </li>
      `;
    })
    .join('');

  menu.innerHTML = html;
}

function addFav(personId) {
  let findPersonForaddFav = people.filter((item) => {
    return item.id === +personId;
  });

  if (!favPeople.some((item) => item.id === +personId)) {
    favPeople.push(findPersonForaddFav[0]);
  } else {
    removeFromFavs(personId);
    showFavPeople();
  }
}

function showFavPeople() {
  const favContainer = document.querySelector('.favContainer');
  let showFavPeople = favPeople
    .map((item) => {
      return `
    <li class="item" id-key='${item.id}'>${item.name}
    <button id="btn" class="arrow-button"><i class="arrow"></i></button>
    <button class="favbtn"><i class="fa fa-heart"></i></button>
    <div  class="item-info">
    <p>birth_year: ${item.birth_year}</p>
    <p>Mass: ${item.mass} kg</p>
    <p>Eye_color: ${item.eye_color}</p>
    <p>Gender: ${item.gender}</p>
    <p>Url: ${item.url}</p>
    </div>
    </li>
    `;
    })
    .join('');

  favContainer.innerHTML = showFavPeople;
  postDataToServer();
}

function removeFromFavs(personId) {
  favPeople = favPeople.filter((item) => {
    return item.id !== +personId;
  });
}

function eventOpenBtn(event) {
  const target = event.target;
  const listItem = target.parentElement;
  const openEl = document.querySelector('.open');

  if (target.classList.contains('arrow-button')) {
    if (openEl) {
      openEl.classList.remove('open');
    }
    if (openEl === listItem) {
      return;
    }
    listItem.classList.add('open');
  }

  let personId = event.target.parentElement.getAttribute('id-key');

  if (target.classList.contains('favorite-button')) {
    addFav(personId);
    showFavPeople();
    listItem.classList.toggle('active-fav-button');
  }
  if (target.classList.contains('favbtn')) {
    removeFromFavs(personId);
    showFavPeople();
    document
      .querySelector(`.item[id-key="${personId}"]`)
      .classList.remove('active-fav-button');
  }
}

function postDataToServer() {
  const post = new XMLHttpRequest();
  const method = 'POST';
  const url = 'https://api.npoint.io/849d375c31f4f5224457';
  const favPeopleString = JSON.stringify(favPeople);

  post.responseType = 'json';
  post.open(method, url);
  post.setRequestHeader('Content-Type', 'application/json');
  post.send(favPeopleString);
}
