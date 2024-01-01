const box1 = document.getElementById("pwd-box");
const box2 = document.getElementById("ls-box");
const box3 = document.getElementById("cd-box");
const box4 = document.getElementById("cd..box");
const box5 = document.getElementById("mkdir-box");
const box6 = document.getElementById("rm-rf-box");
const box7 = document.getElementById("touch-box");
const box8 = document.getElementById("start-box");
const box9 = document.getElementById("status-box");
const box10 = document.getElementById("checkout-box");
const box11 = document.getElementById("clone-box");
const box12 = document.getElementById("pull-box");
const box13 = document.getElementById("push-box");
const box14 = document.getElementById("add-box");
const box15 = document.getElementById("commit-box");

//info-boxes
const box1Info = document.getElementById("pwd-info");
const box2Info = document.getElementById("ls-info");
const box3Info = document.getElementById("cd-info");
const box4Info = document.getElementById("cd..info");
const box5Info = document.getElementById("mkdir-info");
const box6Info = document.getElementById("rm-rf-info");
const box7Info = document.getElementById("touch-info");
const box8Info = document.getElementById("start-info");
const box9Info = document.getElementById("status-info");
const box10Info = document.getElementById("checkout-info");
const box11Info = document.getElementById("clone-info");
const box12Info = document.getElementById("pull-info");
const box13Info = document.getElementById("push-info");
const box14Info = document.getElementById("add-info");
const box15Info = document.getElementById("commit-info");

function showBoxInfo(boxInfo) {
  boxInfo.classList.remove("hidden");
  currentBox = boxInfo;
}

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

box6.addEventListener("click", function () {
  showBoxInfo(box6Info);
});

box7.addEventListener("click", function () {
  showBoxInfo(box7Info);
});

box8.addEventListener("click", function () {
  showBoxInfo(box8Info);
});

box9.addEventListener("click", function () {
  showBoxInfo(box9Info);
});

box10.addEventListener("click", function () {
  showBoxInfo(box10Info);
});

box11.addEventListener("click", function () {
  showBoxInfo(box11Info);
});

box12.addEventListener("click", function () {
  showBoxInfo(box12Info);
});

box13.addEventListener("click", function () {
  showBoxInfo(box13Info);
});

box14.addEventListener("click", function () {
  showBoxInfo(box14Info);
});

box15.addEventListener("click", function () {
  showBoxInfo(box15Info);
});

const homeBtn = document.getElementById("home-button")

// home button listener
homeBtn.addEventListener("click", function() {
    window.location.href = 'index.html'
  })