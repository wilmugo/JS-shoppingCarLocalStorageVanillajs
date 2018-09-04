//Variables
const courses = document.querySelector('#courses-list'),
  contentOfShoppingCar = document.querySelector('#cart-content tbody'),
  clearCar = document.querySelector('#clear-cart');

//Listeners

eventListeners();

function eventListeners() {
  //event manager for add course item to shopping cart
  courses.addEventListener('click', addCourseToShopCar);

  //event manager for remove item to shopping cart
  contentOfShoppingCar.addEventListener('click', removeItemmToShopCar);

  //event manager for clear the entire items of shopping cart
  clearCar.addEventListener('click', clearAllItemShoppingCart);
}

//Functions

// function to management the event to add course to shopping car
function addCourseToShopCar(e) {
  //prevent default action in click event
  e.preventDefault();
  // delegate event to target the link to have class add-to-cart
  if (e.target.classList.contains('add-to-cart')) {
    //save entire info of course you click add in a variable courseItem
    const courseItem = e.target.parentElement.parentElement;
    //read the values of courseItem
    getInfoOfCourse(courseItem);
  }
}

// function to extract info to course you click
function getInfoOfCourse(course) {
  //create object with info of course
  const infoCourse = {
    image: course.querySelector('img').src,
    title: course.querySelector('h4').textContent,
    price: course.querySelector('.price span').textContent,
    id: course.querySelector('a').getAttribute('data-id')
  };

  //function for add object into shopping car
  addItemToCar(infoCourse);
}

// add and render item course in shopping car
function addItemToCar(course) {
  // create <tr>
  const row = document.createElement('tr');

  //render row in table
  row.innerHTML = `
    <tr>
      <td>
        <img src = "${course.image}" width=100>
      </td>
      <td>${course.title}</td>
      <td>${course.price}</td>
      <td>
        <a href="#" class="remove" data-id="${course.id}">X</a>
      </td>
    </tr>
  `;

  //add row to tbody content
  contentOfShoppingCar.appendChild(row);

  //add item in localstorage
  addItemInLocalStorage(course);
}

//romeve item click in X in shopping cart
function removeItemmToShopCar(e) {
  if (e.target.classList.contains('remove')) {
    e.target.parentElement.parentElement.remove();
  }
}

// remove all items in shopping cart
function clearAllItemShoppingCart() {
  while (contentOfShoppingCar.firstChild) {
    contentOfShoppingCar.removeChild(contentOfShoppingCar.firstChild);
  }
}

function addItemInLocalStorage(item) {
  //save array courses in courses
  let courses = getItemFromLocalStorage();
  //add item in array courses
  courses.push(item);
  //save in localstorage that json to string
  localStorage.setItem('courses', JSON.stringify(courses));
}

// helper to get info from localstorage
function getItemFromLocalStorage() {
  let courses;

  if (localStorage.getItem('courses') === null) {
    courses = [];
  } else {
    courses = JSON.parse(localStorage.getItem('courses'));
  }
  return courses;
}
