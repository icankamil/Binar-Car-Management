class Component {
    constructor() {
this.burger = document.getElementById("burger")
this.section = document.getElementById("main-content")
this.offcanvas = document.getElementById("offcanvasScrolling")
this.content = document.getElementById("section-content")
this.addBtn = document.getElementById("addNewCar")
this.deleteBtn = document.querySelectorAll(".delete")
this.yesPrompt = document.querySelector(".ya")
this.card = document.getElementById("cars")
this.btnContainer = document.getElementById("sidebar__blue")
this.btns = this.btnContainer.getElementsByClassName("sidebar--btn")
this.modal=document.getElementById('exampleModalCenter')
this.alertz = document.getElementById('alert-success')
this.updateBtn = document.getElementById('updatecar')
this.bs = bootstrap.Modal
    }

     clickBurger(){
      let section = this.section
      let content = this.content
      let addBtn = this.addBtn
      this.burger.addEventListener("click", function() {
        section.classList.toggle("rel--margin__offcanvas")
        section.classList.toggle("rel--margin")
        content.classList.toggle("rel--margin__offcanvas--right")
        addBtn.classList.toggle("rel--margin__offcanvas--right")
        })
    }

     clickCard(){
      let section = this.section
      let offcanvas = this.offcanvas
      let content = this.content
      let addBtn = this.addBtn
      this.card.addEventListener("click", function() {
       section.classList.toggle("rel--margin__offcanvas")
       section.classList.toggle("rel--margin")
       offcanvas.classList.toggle("show")
       content.classList.toggle("rel--margin__offcanvas--right")
       addBtn.classList.toggle("rel--margin__offcanvas--right")
        })
    }

     activeHover(){
// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < this.btns.length; i++) {
  this.btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
    }

     bindComponent(){
//check if element modal is existed or not
if(this.modal != null) {
  var exampleModal = document.getElementById('exampleModalCenter')
  exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('id')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    // Update the modal's content.
    // Create a class attribute:
  const att = document.createAttribute("id");
  
  // Set the value of the class attribute:
  att.value = recipient;
  // Add the class attribute to the first h1:
  const yes = exampleModal.querySelector('.ya');
  yes.setAttributeNode(att);
  })
  }
    }

     deleteCar(){
      let bs = this.bs
      let modalz = this.modal
      if(this.yesPrompt != null){
        this.yesPrompt.addEventListener("click", function() {
          let card = document.getElementById(this.getAttribute('id'))
          let xhr = new XMLHttpRequest();
        xhr.open('DELETE', `${window.location.protocol}//${window.location.host}/Car/${this.getAttribute('id')}`, true);
        xhr.onreadystatechange = function() {
            if (this.status == 200 && this.readyState == 4) {
                console.log(this.response);
                //dismiss modal
                let modal = bs.getInstance(modalz)
                modal.hide()
                //remove deleted card
                card.remove()
                //show alert with message from json response and then dismiss it
                let alert = document.getElementById('alert')
                alert.classList.remove('d-none')
                alert.classList.add('d-block')
                alert.innerHTML = this.response
                setTimeout(function(){ alert.classList.remove('d-block'); alert.classList.add('d-none'); }, 3000);
        
        
          };//end onreadystate
        }
        xhr.send();
        })
        }
    }


 alertify(){
let alertz = this.alertz
//check if element alert success is existed or not
if( alertz != null) {
  setTimeout(function(){
    alertz.classList.add('d-none')
//clear query string from url browser
window.history.pushState({}, document.title, window.location.pathname);
}, 3000)
}
}

 updateCar(){
//check if element updatecar is existed or not
if(this.updateBtn != null) {
  this.updateBtn.addEventListener("click", function() {
    try {
      //check if form is valid or not
      document.getElementById('update').checkValidity()
      let xhr = new XMLHttpRequest();
      xhr.open('PUT', `${window.location.protocol}//${window.location.host}/Car/${this.getAttribute('value')}`, true);
      //send form data
      let form = document.getElementById('update')
      let formData = new FormData(form);
      console.log(formData)
      xhr.send(formData);
      //redirect to home page with success message
      xhr.onreadystatechange = function() {
          if (this.status == 200 && this.readyState == 4) {
              window.location.href = `${window.location.protocol}//${window.location.host}/?success=${this.response}`
        }else{
          window.location.href = `${window.location.protocol}//${window.location.host}/?message=Gagal mengupdate data, silakan cek kembali jangan sampai ada data yang kosong`
        }
      }
    } catch (error) {
      console.log(error)
    }
   
    })
}
}
}