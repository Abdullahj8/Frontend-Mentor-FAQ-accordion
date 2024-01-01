let button = document.querySelectorAll('.section div');
button.forEach(element => {
  element.addEventListener("click", ()=> {
    element.classList.toggle("active");
  })
  console.log(element)
});