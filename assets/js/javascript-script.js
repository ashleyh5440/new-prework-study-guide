const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const jQueryBox = document.getElementById("jquery-box");
const nodeJsBox = document.getElementById("node-box");
const oopBox = document.getElementById("oop-box");
const expressBox = document.getElementById("express-box");
const mysqlBox = document.getElementById("mysql-box");
const mongoBox = document.getElementById("mongo-box");
const reactBox = document.getElementById("react-box");
const webpackBox = document.getElementById("webpack-box");

//info boxes
const box1Info = document.getElementById("box1-info");
const box2Info = document.getElementById("box2-info");
const box3Info = document.getElementById("box3-info");
const box4Info = document.getElementById("box4-info");
const box5Info = document.getElementById("box5-info");
const box6Info = document.getElementById("box6-info");
const box7Info = document.getElementById("box7-info");
const jQueryBoxInfo = document.getElementById("jquery-info");
const nodeInfo = document.getElementById("node-info");
const oopInfo = document.getElementById("oop-info");
const expressInfo = document.getElementById("express-info");
const mysqlInfo = document.getElementById("mysql-info");
const mongoInfo = document.getElementById("mongo-info");
const reactInfo = document.getElementById("react-info");
const webpackInfo = document.getElementById("webpack-info");

//back buttons
const backBtn1 = document.getElementById("back-btn1");
const backBtn2 = document.getElementById("back-btn2");
const backBtn3 = document.getElementById("back-btn3");
const backBtn4 = document.getElementById("back-btn4");
const backBtn5 = document.getElementById("back-btn5");
const backBtn6 = document.getElementById("back-btn6");
const backBtn7 = document.getElementById("back-btn7");

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

//function for back buttons
function handleBackBtnClick() {
    document.querySelector(".initial").classList.remove("hidden");
    box1Info.classList.add("hidden");
    box2Info.classList.add("hidden");
    box3Info.classList.add("hidden");
    box4Info.classList.add("hidden");
    box5Info.classList.add("hidden");
    box6Info.classList.add("hidden");
    box7Info.classList.add("hidden");
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

box6.addEventListener("click", function () {
    showBoxInfo(box6Info);
});

box7.addEventListener("click", function () {
    showBoxInfo(box7Info);
});

//listeners for js helper boxs
jQueryBox.addEventListener('click', function() {
    if (jQueryBoxInfo.classList.contains('hidden')) {
        jQueryBoxInfo.classList.remove('hidden');
    } else {
        jQueryBoxInfo.classList.add('hidden');
    }
});

nodeJsBox.addEventListener('click', function() {
    if (nodeInfo.classList.contains('hidden')) {
        nodeInfo.classList.remove('hidden');
    } else {
        nodeInfo.classList.add('hidden');
    }
});

oopBox.addEventListener('click', function() {
    if (oopInfo.classList.contains('hidden')) {
        oopInfo.classList.remove('hidden');
    } else {
        oopInfo.classList.add('hidden');
    }
});

expressBox.addEventListener('click', function() {
    if (expressInfo.classList.contains('hidden')) {
        expressInfo.classList.remove('hidden');
    } else {
        expressInfo.classList.add('hidden');
    }
});

mysqlBox.addEventListener('click', function() {
    if (mysqlInfo.classList.contains('hidden')) {
        mysqlInfo.classList.remove('hidden');
    } else {
        mysqlInfo.classList.add('hidden');
    }
});

mongoBox.addEventListener('click', function() {
    if (mongoInfo.classList.contains('hidden')) {
        mongoInfo.classList.remove('hidden');
    } else {
        mongoInfo.classList.add('hidden');
    }
});

reactBox.addEventListener('click',  function() {
    if (reactInfo.classList.contains('hidden')) {
        reactInfo.classList.remove('hidden');
    } else {
        reactInfo.classList.add('hidden');
    }
});

webpackBox.addEventListener('click', function() {
    if (webpackInfo.classList.contains('hidden')) {
        webpackInfo.classList.remove('hidden');
    } else {
        webpackInfo.classList.add('hidden');
    }
});

backBtn1.addEventListener("click", handleBackBtnClick);
backBtn2.addEventListener("click", handleBackBtnClick);
backBtn3.addEventListener("click", handleBackBtnClick);
backBtn4.addEventListener("click", handleBackBtnClick);
backBtn5.addEventListener("click", handleBackBtnClick);
backBtn6.addEventListener("click", handleBackBtnClick);
backBtn7.addEventListener("click", handleBackBtnClick);

