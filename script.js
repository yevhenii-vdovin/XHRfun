// // // varaibles ---
// // let people = localStorage.getItem('people')
// //   ? JSON.parse(localStorage.getItem('people'))
// //   : null;

// // // let favPeople = [];
// // let favPeople = localStorage.getItem('favPeople')
// //   ? JSON.parse(localStorage.getItem('favPeople'))
// //   : [];

// // const container = document.querySelector('.container');
// // const input = document.querySelector('.input');
// // const searchPeopleClass = document.querySelector('.search-people');

// // container.addEventListener('click', eventHandler);

// // if (people) {
// //   renderPersons(people);
// // } else {
// //   getDataFromSWAPI(initApp);
// // }

// // if (favPeople) {
// //   showFavPeople();
// // }

// // // execution --->

// // // fisrst get data from SWAPI:

// // function getDataFromSWAPI(loadHandler) {
// //   const xhr = new XMLHttpRequest();
// //   const method = 'GET';
// //   const url = 'https://swapi.dev/api/people/';

// //   xhr.responseType = 'json';
// //   xhr.open(method, url, true);

// //   xhr.addEventListener('load', loadHandler);
// //   xhr.send();
// // }

// // function initApp(event) {
// //   const xhr = event.target;
// //   const data = xhr.response;

// //   people = data.results;
// //   renderPersons(people);
// //   // activeFavBtn();

// //   localStorage.setItem('people', JSON.stringify(people));
// // }

// // function renderPersons(people) {
// //   const menu = document.querySelector('.menu');

// //   let html = people
// //     .map((item, index) => {
// //       return `
// //       <li class="item" id-key='${item.id ? item.id : (item.id = index)}'>${
// //         item.name
// //       }
// //       <button class="arrow-button"><i class="arrow"></i></button>
// //       <button class="favorite-button" ><i class="fa fa-heart"></i></button>
// //       <div  class="item-info">
// //       <p>birth_year: ${item.birth_year}</p>
// //       <p>Mass: ${item.mass} kg</p>
// //       <p>Eye_color: ${item.eye_color}</p>
// //       <p>Gender: ${item.gender}</p>
// //       <p>Url: ${item.url}</p>
// //       </div>
// //       </li>
// //       `;
// //     })
// //     .join('');

// //   console.log(people);
// //   menu.innerHTML = html;
// //   activeFavBtn();
// // }

// // function handleFav(personId) {
// //   let findPersonForaddFav = people.filter((item) => {
// //     return item.id === +personId;
// //   });

// //   if (!favPeople.some((item) => item.id === +personId)) {
// //     favPeople.push(findPersonForaddFav[0]);
// //   } else {
// //     removeFromFavs(personId);
// //   }

// //   showFavPeople();
// //   localStorage.setItem('favPeople', JSON.stringify(favPeople));
// // }

// // function showFavPeople() {
// //   const favContainer = document.querySelector('.favContainer');
// //   let showFavPeople = favPeople
// //     .map((item) => {
// //       return `
// //     <li class="item item-fav active-fav-button" id-key='${item.id}'>${item.name}
// //     <button class="arrow-button"><i class="arrow"></i></button>
// //     <button class="favorite-button"><i class="fa fa-heart"></i></button>
// //     <div  class="item-info">
// //     <p>birth_year: ${item.birth_year}</p>
// //     <p>Mass: ${item.mass} kg</p>
// //     <p>Eye_color: ${item.eye_color}</p>
// //     <p>Gender: ${item.gender}</p>
// //     <p>Url: ${item.url}</p>
// //     </div>
// //     </li>
// //     `;
// //     })
// //     .join('');

// //   favContainer.innerHTML = showFavPeople;
// //   activeFavBtn();
// // }

// // function removeFromFavs(personId) {
// //   favPeople = favPeople.filter((item) => {
// //     return item.id !== +personId;
// //   });
// //   localStorage.setItem('favPeople', JSON.stringify(favPeople));
// // }
// // // start ->  event section
// // function eventHandler(event) {
// //   const target = event.target;
// //   const listItem = target.parentElement;
// //   const openEl = document.querySelector('.open');

// //   if (target.classList.contains('arrow-button')) {
// //     if (openEl) {
// //       openEl.classList.remove('open');
// //     }
// //     if (openEl === listItem) {
// //       return;
// //     }
// //     listItem.classList.add('open');
// //   }

// //   let personId = event.target.parentElement.getAttribute('id-key');

// //   const itemMainIdKey = document.querySelector(`.item[id-key="${personId}"]`);

// //   if (target.classList.contains('favorite-button')) {
// //     handleFav(personId);
// //     itemMainIdKey.classList.toggle('active-fav-button');
// //   }

// //   activeFavBtn();
// // }

// // // start -> search section
// // input.onkeyup = searchHandler;
// // function searchHandler() {
// //   let inputValue = input.value.toUpperCase();

// //   let searchPeople = people.filter((item) => {
// //     return item.name.toUpperCase().includes(inputValue);
// //   });

// //   renderPersons(searchPeople);
// // }

// // function activeFavBtn() {
// //   document.querySelectorAll('.item').forEach((item) => {
// //     let attrFromPeople = item.getAttribute('id-key');

// //     document.querySelectorAll('.item-fav').forEach((itemfav) => {
// //       let attrFromFavpeople = itemfav.getAttribute('id-key');

// //       if (attrFromPeople === attrFromFavpeople) {
// //         item.classList.add('active-fav-button');
// //       }
// //     });
// //   });
// // }

// // end <- search section

// //__________________________________________

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

// // execution --->

if (people) {
  renderPersons(people);
} else {
  // xhr('GET', 'https://swapi.dev/api/people/', initApp);
  // xhr('GET', 'https://api.npoint.io/849d375c31f4f5224457', initAppFav);

  load('GET', 'https://swapi.dev/api/people/').then(function (data) {
    people = data.results;
    renderPersons(people);
    localStorage.setItem('people', JSON.stringify(people));
  });
  load('GET', 'https://api.npoint.io/849d375c31f4f5224457').then(function (
    data
  ) {
    favPeople = data;
    showFavPeople();
    localStorage.setItem('favPeople', JSON.stringify(favPeople));
  });
}

if (favPeople) {
  showFavPeople();
}

function load(method, url, data) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(error(xhr.status));
        }
      }
    };
    xhr.onerror = function () {
      reject(error('error'));
    };
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);
  });
}

// function xhr(method, url, callback, data) {
//   const xhr = new XMLHttpRequest();

//   xhr.responseType = 'json';
//   xhr.addEventListener('load', callback);
//   xhr.open(method, url);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.send(data ? JSON.stringify(data) : null);
// }

// function initApp(event) {
//   // function initApp(data) <- data.results
//   const xhr = event.target;
//   const data = xhr.response;
//   people = data.results;
//   renderPersons(people);
//   // localStorage.setItem('people', JSON.stringify(people));
// }

// function initAppFav(event) {
//   const xhr = event.target;
//   favPeople = xhr.response;
//   showFavPeople();
//   activeFavBtn();
//   // localStorage.setItem('favPeople', JSON.stringify(favPeople));
// }

// // render function - people

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

// // function Add to Favourite people (handle)

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

// // render Favourite people

function showFavPeople() {
  const favContainer = document.querySelector('.favContainer');
  let showFavPeople = favPeople
    .map((item) => {
      return `
    <li class="item active-fav-button" id-key='${item.id}'>${item.name}
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

// // function remove from Favourite section

function removeFromFavs(personId) {
  favPeople = favPeople.filter((item) => {
    return item.id !== +personId;
  });
  localStorage.setItem('favPeople', JSON.stringify(favPeople));
}

// // event handler

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
    // xhr(
    //   'POST',
    //   'https://api.npoint.io/849d375c31f4f5224457',
    //   initAppFav,
    //   favPeople
    // );
    localStorage.setItem('favPeople', JSON.stringify(favPeople));
    load(
      'POST',
      'https://api.npoint.io/849d375c31f4f5224457',
      JSON.stringify(favPeople)
    );
  }
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

// // function active favourite button

function activeFavBtn() {
  const listPersons = document.querySelectorAll('.item');

  listPersons.forEach(function (item) {
    let personId = item.getAttribute('id-key');
    const isPersonFav = favPeople.some(function (item) {
      return item.id === +personId;
    });
    if (isPersonFav) {
      item.classList.add('active-fav-button');
    }
  });
}
