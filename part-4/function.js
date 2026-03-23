function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let order = makeTea("Green Tea");
// console.log(order);

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder();
}
let finalorder = orderTea();
// console.log(finalorder);

const calculateTotal = (price, quantity) => {
  return price * quantity;
  //or i can remove curly bracec and return and write const calculateTotal = (price, quantity) => price * quantity // DIRECTLY
};
let totalCost = calculateTotal(200, 300);
// console.log(totalCost);

function processTeaOrder(fn) {
  return fn(`earl grey`);
}
function makeTea(giveme) {
  return `make tea:${giveme}`;
}

let orders = processTeaOrder(makeTea);
console.log(orders);

function getjuice(ready) {
  return ready(`orange`);
}
function makejuice(making) {
  return `ready:${making} juice`;
}
finals = getjuice(makejuice);
// console.log(finals);
function playSong(fn) {
  return fn(`Twinkle Twinkle`);
}
function singIt(singing) {
  return `sing:${singing}`;
}

let song = playSong(singIt);
// console.log(song);

function createTeaMaker(name) {
  return function (teaType) {
    return `making ${teaType} tea for mr.${name}`;
  };
}
let teaMaker = createTeaMaker("hitesh");
// console.log(teaMaker("green"));
