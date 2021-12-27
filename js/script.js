let home = document.querySelector("a[href='#Home']");
home.classList.add("active");
window.onscroll = function () {
  (function changenavbar() {
    let i = window.scrollY,
      home = document.querySelector("a[href='#Home']"),
      about = document.querySelector("a[href='#About']"),
      port = document.querySelector("a[href='#Portfolio']"),
      serv = document.querySelector("a[href='#Services']"),
      price = document.querySelector("a[href='#Prices']"),
      team = document.querySelector("a[href='#Team']"),
      blog = document.querySelector("a[href='#Blog']"),
      contact = document.querySelector("a[href='#Contact']"),
      phone = document.getElementById("Phone"),
      email = document.getElementById("Email"),
      address = document.getElementById("Address");

    if (i < 500) {
      changeclass(home);
    } else if (i >= 500 && i < 1200) {
      changeclass(about);
    } else if (i >= 1200 && i < 2500) {
      changeclass(port);
    } else if (i >= 2500 && i < 4300) {
      changeclass(serv);
    } else if (i >= 4300 && i < 5600) {
      changeclass(price);
    } else if (i >= 5600 && i < 6500) {
      changeclass(team);
    } else if (i >= 6500 && i < 7400) {
      changeclass(blog);
    } else {
      changeclass(contact);
    }
    if (i > 7000) {
      phone.style.animationPlayState = "running";
      email.style.animationPlayState = "running";
      address.style.animationPlayState = "running";
    } else {
      phone.style.animationPlayState = "paused";
      email.style.animationPlayState = "paused";
      address.style.animationPlayState = "paused";
    }
  })();
  (function headerchanges() {
    let header = document.getElementById("header");
    let gotop = document.getElementById("gotop");
    if (scrollY !== 0) {
      header.classList.remove("trans");
      gotop.style.display = "block";
    } else {
      header.classList.add("trans");
      gotop.style.display = "none";
    }
  })();
};

function changeclass(notactive) {
  let active = document.querySelector(".active");
  if (notactive != active) {
    active.classList.remove("active");
    notactive.classList.add("active");
  }
}
