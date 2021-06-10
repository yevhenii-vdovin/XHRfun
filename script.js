getDataLoad();
function getDataLoad() {
  const xhr = new XMLHttpRequest(),
    method = 'GET',
    url = 'https://swapi.dev/api/people/';

  xhr.open(method, url, true);

  xhr.responseType = 'json';

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log('error load');
    } else {
      let opp = xhr.response;
      let pop = opp.results;
      console.log(pop);

      localStorage.setItem('pop', JSON.stringify(pop));
      pop = JSON.parse(localStorage.getItem('pop'));
      renderPersons(pop);
      console.log(typeof pop);
      console.log(pop);
      // toggle();
      // toggle();
    }
  };

  xhr.send();
}
// function addTolocalStogare() {
//   localStorage.setItem('test', JSON.stringify(test));
// }

// function getFromLocalStorage() {
//   let row = localStorage.getItem(test);
//   let data = JSON.parse(row);
//   console.log(data);
//   // toggle();
// }

function renderPersons(pop) {
  console.log(pop);
  const menu = document.querySelector('.menu');
  let html = pop
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
  // const arrowBtn = document.querySelector('arrow-button');
  // document.addEventListener('click', function () {
  //   console.log('happy');
  // });
  // addTolocalStogare();
  // toggle(pop);
}
// const arrowBtn = document.querySelector('.arrow-button');
// function toggle() {
// function toggleDocs(event) {
//   event.target.parentElement
//     .querySelector('.item-info')
//     .classList.toggle('hidden');

//   event.target.parentElement
//     .querySelector('.item-info')
//     .classList.toggle('hidden-after');

//   event.target.parentElement
//     .querySelector('.arrow-button')
//     .classList.toggle('up');
// }

function toggle() {
  const menu = document.querySelector('.menu');
  menu.addEventListener('click', toggleDocs);

  // document.querySelectorAll('.arrow-button').forEach((item) => {
  //   item.addEventListener('click', toggleDocs);
  // });

  // document.querySelectorAll('.favorite-button').forEach((item) => {
  //   item.addEventListener('click', addToFav);
  // });

  function toggleDocs(event) {
    const target = event.target;
    const listItem = target.parentElement;
    const openEl = document.querySelector('.open');
    const upEl = document.querySelector('.up');

    if (target.classList.contains('arrow-button')) {
      if (openEl && upEl) {
        openEl.classList.remove('open');
        upEl.classList.remove('up');
      }
      listItem.classList.add('open');
      listItem.classList.add('up');
      if (openEl && upEl) {
        openEl.classList.remove('open');
        upEl.classList.remove('up');
      }
    }
  }

  // event.target.classList.toggle('hidden');

  // event.target.classList.toggle('hidden-after');

  // event.target.parentElement
  //   .querySelector('.arrow-button')
  //   .classList.toggle('up');

  //   let todoId = event.target.parentElement.getAttribute('id-key');
  //   if (event.target.type === 'checkbox') {
  //     console.log('mega');
  //   }
  //   console.log(todoId);
  // }
}
toggle();
function addToFav() {
  console.log('super');
  favoriteClass.innerHTML = 'hello';
}

// function heart() {
//   const parent = this.parentNode;
//   parent.remove();
//   favoriteClass.appendChild(parent);
// }

// function toggle() {
//   const arrowBtn = document.querySelector('.arrow-button');
//   function toggleEvent(event) {
//     let todoId = event.target.parentElement.getAttribute('id-key');
//     console.log(todoId);

//     if (event.target.classList.contains('arrow-button')) {
//       event.target.parentElement
//         .querySelector('.item-info')
//         .classList.toggle('hidden');
//     }
//   }

//   arrowBtn.addEventListener('click', toggleEvent);
// }
// document.addEventListener('click', toggleDocs);
// }
// toggle();

// const arrowBtn = document.querySelector('.arrow');
// arrowBtn.addEventListener('click', function () {
//   console.log('happy');
// });
