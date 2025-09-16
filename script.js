let globalCounter = 0;
const globalConstant = "I'm accessible everywhere!";

function demonstrateScope() {
    let localVariable = "I'm local!";
    globalCounter++;
    var functionScoped = "I'm function scoped!";
    displayOutput(`
        Global: ${globalConstant}<br>
        Local: ${localVariable}<br>
        Counter: ${globalCounter}<br>
        Var: ${functionScoped}
    `);
}

function calculateSum(a, b) {
    return a + b;
}
function calculateAndDisplay(a, b) {
    let result = calculateSum(a, b);
    displayOutput(`${a} + ${b} = ${result}`);
}

function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r},${g},${b})`;
    document.body.style.background = color;
    displayOutput(`Generated Color: ${color}`);
}

function validateInput() {
    let input = prompt("Enter some text:");
    if (!input) {
        displayOutput("Error: empty input");
    } else {
        displayOutput(`Valid input: ${input}`);
    }
}

function displayOutput(msg) {
    document.getElementById("output-content").innerHTML = msg;
}

function animateElement(type) {
    let el = document.getElementById("animation-target");
    el.classList.remove("bounce","shake","slide");
    void el.offsetWidth; // restart animation
    el.classList.add(type);
}

function toggleSpinner() {
    document.getElementById("controlled-spinner").classList.toggle("active");
}

function showModal() {
    document.getElementById("modal").style.display = "flex";
}
function hideModal() {
    document.getElementById("modal").style.display = "none";
}

function updateProgress() {
    let bar = document.getElementById("progress-bar");
    let text = document.getElementById("progress-text");
    let percent = Math.floor(Math.random() * 100) + 1;
    bar.style.width = percent + "%";
    text.textContent = "Progress: " + percent + "%";
}

function flipCard(card) {
    card.classList.toggle("flipped");
}
