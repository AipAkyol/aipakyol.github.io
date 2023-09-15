document.querySelector("img").addEventListener("click",  () => {
    alert("Ouch! Stop poking me!");
});

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/arthur-morgan.png") {
    myImage.setAttribute("src", "images/arthur-morgan-2.png");
  } else {
    myImage.setAttribute("src", "images/arthur-morgan.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        myHeading.textContent = `Arthur Morgan can't salute you if you don't give him your name`;
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Arthur Morgan salutes you, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Arthur Morgan salutes you, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};