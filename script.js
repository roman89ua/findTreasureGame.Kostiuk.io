// random numbers for location the treasures
let width = 900;
let height = 600;
let clicks = 0;
let randomNumber = function(size) {
    return Math.floor(Math.random() * size);
}
let target = {
    x: randomNumber(width),
    y: randomNumber(height)
};

document.getElementById('map').click = function(event) {

}