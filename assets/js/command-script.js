const screen1 = document.getElementById("box1");
const screen2 = document.getElementById("box2");
const previousBtn = document.getElementById("previous-btn");
const continueBtn = document.getElementById("continue-btn")
const homeBtn = document.getElementById("home-btn")
let currentScreen = 0

continueBtn.addEventListener("click", function() {
    if (currentScreen < pages.length - 1) {
        // if not on last page, switch to the next
        const nextPageIndex = currentPageIndex + 1;
        showPage(nextPageIndex);
      } else {
        // if on the last page, go to linked html file
        window.location.href = "html-file-name.html"; 
      }
    });)
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
