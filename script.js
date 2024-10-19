(function(){
const spanEl = document.querySelector("main h2 span");
const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
let index = 0;
let currentTxt = txtArr[index].split("");

    function writeTxt() {
        spanEl.textContent += currentTxt.shift();
        if (currentTxt.length !== 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        } else {
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }

    function deleteTxt() {
        currentTxt.pop();
        spanEl.textContent = currentTxt.join("");
        if (currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        } else {
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            console.log(currentTxt);
            writeTxt();
        }
    }
    writeTxt();
})();


const headerEl = document.querySelector("header");

window.addEventListener("scroll", () => {
    const browserScrollY = window.scrollY;
    headerEl.classList.toggle("active", browserScrollY > 0);
});


const animationMove = function (selector) {
    const targetEl = document.querySelector(selector);

    const browserScrollY = window.scrollY;

    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;

    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });

}

const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for (let i = 0; i < scrollMoveEl.length; i++){
    scrollMoveEl.addEventListener('click', function (e) {
        const target = this.dataset.target;
        animationMove(target);
    });
}