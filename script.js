'use strict';

const person = document.querySelector('.person');
const right = document.querySelector('.right');
const favoriteBtn = document.querySelector('.favorite-button');
const showItemBtn = document.querySelector('.menu');

let test = [];

getDatarequest();

function getDatarequest() {
  const xhr = new XMLHttpRequest(),
    method = 'GET',
    url = 'https://swapi.dev/api/people/';

  xhr.open(method, url, true);

  xhr.responseType = 'json';

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log('error load');
    } else {
      let resData = xhr.response.results;
      test = resData;
      console.log(test);
      addTolocalStogare(test);
    }
  };

  xhr.send();
}

function addTolocalStogare(test) {
  localStorage.setItem('test', JSON.stringify(test));
  renderPersons(test);
}

function getFromLocalStorage() {
  let row = localStorage.getItem('test');
  if (row) {
    test = JSON.parse(row);
  }
}
getFromLocalStorage();

function renderPersons(test) {
  let html = test
    .map((item, index) => {
      return `
        <li class="item" id-key='${(item.id = index)}'>${item.name}
        <button  class="arrow-button"><i class="arrow down"></i></button>
        <button  class="favorite-button"><i class="fa fa-heart" style="font-size:12px"></i></button>
        <div  class="item-info hidden">
        <p>birth_year: ${item.birth_year}</p>
        <p>Mass: ${item.mass} kg</p>
        <p>Eye_color: ${item.eye_color}</p>
        <p>Gender: ${item.gender}</p> 
        <p>Url: ${item.url}</p> 
        </li>
        

        </div>
        `;
    })
    .join('');
  console.log(test);
  person.innerHTML = html;
}

// function deleteTodo(test) {
//   test = test.filter(function (item) {
//     return item.id !== todoID;
//   });

//   addTolocalStogare(test);
// }

function toggleDocs(event) {
  event.target.parentElement
    .querySelector('.item-info')
    .classList.toggle('hidden');

  event.target.parentElement
    .querySelector('.item-info')
    .classList.toggle('hidden2');

  event.target.parentElement
    .querySelector('.arrow-button')
    .classList.toggle('up');
}

showItemBtn.addEventListener('click', toggleDocs);

// function taggleFavorites(event) {
//   let todoId = event.target.parentElement.getAttribute('id-key');
//   if (target.classList.contains('favorite-button')) {
//     deleteTodo(todoId);
//   }
// }

// right.addEventListener('click', taggleFavorites);

// function toggleDocs(event) {
//   event.target.parentElement.querySelector('.item-info').classList.toggle('up');
// }

// const transformIt = (e) => {
//   var element = document.getElementsByClassName('arrow');
//   element[0].classList.toggle('up');
// };

// document.getElementsByClassName('arrow').addEventListener('click', transformIt);
