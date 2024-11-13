

const fetchBooks = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
    
.then(resBooks => {
    console.log(resBooks);

    if (resBooks.ok) {
        return resBooks.json();
    }
})
.then(resBooks => {
    const row = document.getElementById("card-container");

    console.log(resBooks);
    resBooks.forEach(element => {

      const col = document.createElement("div");
      col.className = "col my-4 ";
      const img = document.createElement("img");
      img.className = "img-card";
      img.style.width = "100%";
      img.src = element.img;
      const titleCard = document.createElement("h2");
      titleCard.className = "title-card display-4 fs-3 fw-bold";
      titleCard.innerText = element.title;
      const btnCard = document.createElement("button");
      btnCard.className = "btn btn-dark me-2";
      btnCard.innerText = "Buy";
      const btnDelete = document.createElement("button");
      btnDelete.className = "btn btn-info";
      btnDelete.innerText = "Remove";
      const pPrice = document.createElement("p");
      pPrice.className = "fw-lighter fs-2"
      pPrice.innerText = element.price + "$";

      
      row.appendChild(col);
      col.appendChild(img);
      col.appendChild(titleCard);
      col.appendChild(btnCard);
      col.appendChild(btnDelete);
      titleCard.appendChild(pPrice);


      btnDelete.addEventListener ("click", function() {
        row.removeChild(col)
      })
    });
  })
  .catch(err => console.log(err));
};


const cartShopUl = document.querySelector("ul");
const addLi = document.createElement("li");








window.onload = () => {
fetchBooks();
};
