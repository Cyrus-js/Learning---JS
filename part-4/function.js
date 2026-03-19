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

function processTeaOrder(teafunction) {
  return teafunction("earl grey");
}
function makeTea(typesOfTea) {
  return `maketea:${typesOfTea}`;
}
let finalorders = processTeaOrder(makeTea);
console.log(finalorders);
