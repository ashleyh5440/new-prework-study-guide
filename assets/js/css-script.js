const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");

//info boxes
const box1Info = document.getElementById("box1-info");
const box2Info = document.getElementById("box2-info");
const box3Info = document.getElementById("box3-info");
const box4Info = document.getElementById("box4-info");
const box5Info = document.getElementById("box5-info");

//back buttons
const backBtn1 = document.getElementById("back-btn1");
const backBtn2 = document.getElementById("back-btn2");
const backBtn3 = document.getElementById("back-btn3");
const backBtn4 = document.getElementById("back-btn4");
const backBtn5 = document.getElementById("back-btn5");

const homeBtn = document.getElementById("home-btn")

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
//function for back button
function handleBackBtnClick() {
    document.querySelector(".initial").classList.remove("hidden");
    box1Info.classList.add("hidden");
    box2Info.classList.add("hidden");
    box3Info.classList.add("hidden");
    box4Info.classList.add("hidden");
    box5Info.classList.add("hidden");
}
//calls function to show box info for each box
box1.addEventListener("click", function () {
    showBoxInfo(box1Info);
});

box2.addEventListener("click", function () {
    showBoxInfo(box2Info);
});

box3.addEventListener("click", function () {
    showBoxInfo(box3Info);
});

box4.addEventListener("click", function () {
    showBoxInfo(box4Info);
});

box5.addEventListener("click", function () {
    showBoxInfo(box5Info);
});

backBtn1.addEventListener("click", handleBackBtnClick);
backBtn2.addEventListener("click", handleBackBtnClick);
backBtn3.addEventListener("click", handleBackBtnClick);
backBtn4.addEventListener("click", handleBackBtnClick);
backBtn5.addEventListener("click", handleBackBtnClick);