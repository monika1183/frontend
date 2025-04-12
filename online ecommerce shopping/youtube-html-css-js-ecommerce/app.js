const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "LEVIS",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/sub2.jpg",
      },
      {
        code: "maroon",
        img: "./img/sub3.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "ZARA",
    price: 149,
    colors: [
      {
        code: "black",
        img: "./img/sub1.jpg",
      },
      {
        code: "silver",
        img: "./img/sub4.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "GUCCI",
    price: 109,
    colors: [
      {
        code: "black",
        img: "./img/sub8.jpg",
      },
      {
        code: "red",
        img: "./img/sub7.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "H&M",
    price: 129,
    colors: [
      {
        code: "lightskyblue",
        img: "./img/sub9.jpg",
      },
      {
        code: "lightgreen",
        img: "./img/sub10.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "FABINDIA",
    price: 99,
    colors: [
      {
        code: "lavender",
        img: "./img/sub11.jpg",
      },
      {
        code: "lightpink",
        img: "./img/sub12.jpg",
        
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
