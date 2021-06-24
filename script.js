// // varaibles ---
// let people = localStorage.getItem('people')
//   ? JSON.parse(localStorage.getItem('people'))
//   : null;

// // let favPeople = [];
// let favPeople = localStorage.getItem('favPeople')
//   ? JSON.parse(localStorage.getItem('favPeople'))
//   : [];

// const container = document.querySelector('.container');
// const input = document.querySelector('.input');
// const searchPeopleClass = document.querySelector('.search-people');

// container.addEventListener('click', eventHandler);

// if (people) {
//   renderPersons(people);
// } else {
//   getDataFromSWAPI(initApp);
// }

// if (favPeople) {
//   showFavPeople();
// }

// // execution --->

// // fisrst get data from SWAPI:

// function getDataFromSWAPI(loadHandler) {
//   const xhr = new XMLHttpRequest();
//   const method = 'GET';
//   const url = 'https://swapi.dev/api/people/';

//   xhr.responseType = 'json';
//   xhr.open(method, url, true);

//   xhr.addEventListener('load', loadHandler);
//   xhr.send();
// }

// function initApp(event) {
//   const xhr = event.target;
//   const data = xhr.response;

//   people = data.results;
//   renderPersons(people);
//   // activeFavBtn();

//   localStorage.setItem('people', JSON.stringify(people));
// }

// function renderPersons(people) {
//   const menu = document.querySelector('.menu');

//   let html = people
//     .map((item, index) => {
//       return `
//       <li class="item" id-key='${item.id ? item.id : (item.id = index)}'>${
//         item.name
//       }
//       <button class="arrow-button"><i class="arrow"></i></button>
//       <button class="favorite-button" ><i class="fa fa-heart"></i></button>
//       <div  class="item-info">
//       <p>birth_year: ${item.birth_year}</p>
//       <p>Mass: ${item.mass} kg</p>
//       <p>Eye_color: ${item.eye_color}</p>
//       <p>Gender: ${item.gender}</p>
//       <p>Url: ${item.url}</p>
//       </div>
//       </li>
//       `;
//     })
//     .join('');

//   console.log(people);
//   menu.innerHTML = html;
//   activeFavBtn();
// }

// function handleFav(personId) {
//   let findPersonForaddFav = people.filter((item) => {
//     return item.id === +personId;
//   });

//   if (!favPeople.some((item) => item.id === +personId)) {
//     favPeople.push(findPersonForaddFav[0]);
//   } else {
//     removeFromFavs(personId);
//   }

//   showFavPeople();
//   localStorage.setItem('favPeople', JSON.stringify(favPeople));
// }

// function showFavPeople() {
//   const favContainer = document.querySelector('.favContainer');
//   let showFavPeople = favPeople
//     .map((item) => {
//       return `
//     <li class="item item-fav active-fav-button" id-key='${item.id}'>${item.name}
//     <button class="arrow-button"><i class="arrow"></i></button>
//     <button class="favorite-button"><i class="fa fa-heart"></i></button>
//     <div  class="item-info">
//     <p>birth_year: ${item.birth_year}</p>
//     <p>Mass: ${item.mass} kg</p>
//     <p>Eye_color: ${item.eye_color}</p>
//     <p>Gender: ${item.gender}</p>
//     <p>Url: ${item.url}</p>
//     </div>
//     </li>
//     `;
//     })
//     .join('');

//   favContainer.innerHTML = showFavPeople;
//   activeFavBtn();
// }

// function removeFromFavs(personId) {
//   favPeople = favPeople.filter((item) => {
//     return item.id !== +personId;
//   });
//   localStorage.setItem('favPeople', JSON.stringify(favPeople));
// }
// // start ->  event section
// function eventHandler(event) {
//   const target = event.target;
//   const listItem = target.parentElement;
//   const openEl = document.querySelector('.open');

//   if (target.classList.contains('arrow-button')) {
//     if (openEl) {
//       openEl.classList.remove('open');
//     }
//     if (openEl === listItem) {
//       return;
//     }
//     listItem.classList.add('open');
//   }

//   let personId = event.target.parentElement.getAttribute('id-key');

//   const itemMainIdKey = document.querySelector(`.item[id-key="${personId}"]`);

//   if (target.classList.contains('favorite-button')) {
//     handleFav(personId);
//     itemMainIdKey.classList.toggle('active-fav-button');
//   }

//   activeFavBtn();
// }

// // start -> search section
// input.onkeyup = searchHandler;
// function searchHandler() {
//   let inputValue = input.value.toUpperCase();

//   let searchPeople = people.filter((item) => {
//     return item.name.toUpperCase().includes(inputValue);
//   });

//   renderPersons(searchPeople);
// }

// function activeFavBtn() {
//   document.querySelectorAll('.item').forEach((item) => {
//     let attrFromPeople = item.getAttribute('id-key');

//     document.querySelectorAll('.item-fav').forEach((itemfav) => {
//       let attrFromFavpeople = itemfav.getAttribute('id-key');

//       if (attrFromPeople === attrFromFavpeople) {
//         item.classList.add('active-fav-button');
//       }
//     });
//   });
// }

// end <- search section

//__________________________________________

// // varaibles ---
let people = localStorage.getItem('people')
  ? JSON.parse(localStorage.getItem('people'))
  : null;

let favPeople = localStorage.getItem('favPeople')
  ? JSON.parse(localStorage.getItem('favPeople'))
  : [];

const container = document.querySelector('.container');
const input = document.querySelector('.input');

container.addEventListener('click', eventHandler);

if (people) {
  renderPersons(people);
} else {
  getAxiosData();
}

if (favPeople) {
  showFavPeople();
}

// execution --->

// fisrst get data from SWAPI:

// function getDataFromSWAPI(loadHandler) {
//   const xhr = new XMLHttpRequest();
//   const method = 'GET';
//   const url = 'https://swapi.dev/api/people/';

//   xhr.responseType = 'json';
//   xhr.open(method, url, true);

//   xhr.addEventListener('load', loadHandler);
//   xhr.send();
// }

// function initApp(event) {
//   const xhr = event.target;
//   const data = xhr.response;

//   people = data.results;
//   renderPersons(people);

//   // localStorage.setItem('people', JSON.stringify(people));
// }

// function getDataFromAPI(loadHandler) {
//   const xhr = new XMLHttpRequest();
//   const method = 'GET';
//   const url = 'https://api.npoint.io/849d375c31f4f5224457/';

//   xhr.responseType = 'json';
//   xhr.open(method, url, true);
//   xhr.addEventListener('load', loadHandler);
//   xhr.send();
// }

// function initAppFav(event) {
//   const xhr = event.target;
//   favPeople = xhr.response;
//   showFavPeople();

//   // localStorage.setItem('people', JSON.stringify(people));
// }

// function postDataToServer() {
//   const post = new XMLHttpRequest();
//   const method = 'POST';
//   const url = 'https://api.npoint.io/849d375c31f4f5224457';
//   const favPeopleString = JSON.stringify(favPeople);

//   post.responseType = 'json';
//   post.open(method, url);
//   post.setRequestHeader('Content-Type', 'application/json');
//   post.send(favPeopleString);
// }

function getAxiosData() {
  let one = 'https://swapi.dev/api/people/';
  let two = 'https://api.npoint.io/11233c7e7a5c3d042f66/';

  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);

  axios
    .all([requestOne, requestTwo])
    .then(
      axios.spread((...responses) => {
        const requestOne = responses[0];
        people = requestOne.data.results;
        console.log(people);
        const requestTwo = responses[1];
        favPeople = requestTwo.data;
        console.log(favPeople);
        renderPersons(people);
        showFavPeople();
      })
    )
    .catch((errors) => {
      console.error(errors);
    });
}

function postDataToServer() {
  axios.post('https://api.npoint.io/11233c7e7a5c3d042f66/', favPeople);
}

// render function - people

function renderPersons(people) {
  const menu = document.querySelector('.menu');
  let html = people
    .map((item, index) => {
      return `
      <li class="item" id-key='${item.id ? item.id : (item.id = index)}'>${
        item.name
      }
      <button class="arrow-button"><i class="arrow"></i></button>
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
  activeFavBtn();
}

// function Add to Favourite people (handle)

function handleFav(personId) {
  let findPersonForaddFav = people.filter((item) => {
    return item.id === +personId;
  });

  if (!favPeople.some((item) => item.id === +personId)) {
    favPeople.push(findPersonForaddFav[0]);
  } else {
    removeFromFavs(personId);
  }
  showFavPeople();
}

// render Favourite people

function showFavPeople() {
  const favContainer = document.querySelector('.favContainer');
  let showFavPeople = favPeople
    .map((item) => {
      return `
    <li class="item item-fav active-fav-button" id-key='${item.id}'>${item.name}
    <button class="arrow-button"><i class="arrow"></i></button>
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

  favContainer.innerHTML = showFavPeople;
  activeFavBtn();
}

// function remove from Favourite section

function removeFromFavs(personId) {
  favPeople = favPeople.filter((item) => {
    return item.id !== +personId;
  });
  // localStorage.setItem('favPeople', JSON.stringify(favPeople));
}

// event handler

function eventHandler(event) {
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

  let personId = listItem.getAttribute('id-key');

  const itemMainIdKey = document.querySelector(`.item[id-key="${personId}"]`);

  if (target.classList.contains('favorite-button')) {
    itemMainIdKey.classList.toggle('active-fav-button');
    handleFav(personId);
  }
  postDataToServer();
}

// search section
input.onkeyup = searchHandler;
function searchHandler() {
  let inputValue = input.value.toUpperCase();

  let searchPeople = people.filter((item) => {
    return item.name.toUpperCase().includes(inputValue);
  });

  renderPersons(searchPeople);
}

// function active favourite button

function activeFavBtn() {
  document.querySelectorAll('.item').forEach((item) => {
    let attrFromPeople = item.getAttribute('id-key');

    document.querySelectorAll('.item-fav').forEach((itemfav) => {
      let attrFromFavpeople = itemfav.getAttribute('id-key');

      if (attrFromPeople === attrFromFavpeople) {
        item.classList.add('active-fav-button');
      }
    });
  });
}
