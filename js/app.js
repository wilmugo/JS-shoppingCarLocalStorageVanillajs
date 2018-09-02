//Variables
const courses = document.querySelector('#courses-list');

//Listeners

eventListeners();

function eventListeners() {
  courses.addEventListener('click', addCourseToShopCar);
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
  console.log(course);
}
