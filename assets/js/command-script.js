const screen1 = document.getElementById("box1");
const screen2 = document.getElementById("box2");
const previousBtn = document.getElementById("previous-btn");
const continueBtn = document.getElementById("continue-btn")
const homeBtn = document.getElementById("home-btn")
let currentScreen = 0

continueBtn.addEventListener("click", function() {
    if (currentScreen < )
})


// home button listener
homeBtn.addEventListener("click", function() {
    window.location.href = 'index.html'
  })

//function to show box information
function showBoxInfo(boxInfo) {
    document.querySelector(".initial").classList.add("hidden");
    boxInfo.classList.remove("hidden");
    currentBox = boxInfo;
}
