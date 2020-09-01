window.addEventListener('DOMContentLoaded', event => {
  addButton = document.getElementsByClassName('modal')
  
  addButton.addEventListener('click', event => {
    addButton.addClass('is-active')
  });
})


// $("#showModal").click(function () {
//   $(".modal").addClass("is-active");
// });

// $(".modal-close").click(function () {
//   $(".modal").removeClass("is-active");
// });