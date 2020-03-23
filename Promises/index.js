const inventory = {
  sunglasses : 10,
  pants : 1088,
  bags : 1344 
}

console.log('Promises');

const myExecutor = (res, rej) => {
  if(inventory.sunglasses > 0){
    res('Sunglasses order processed.');
  }else{
    rej('That item is sold out.');
  }
}

const orderSunglasses = () => {
  return new Promise(myExecutor);
}
const orderPromise = orderSunglasses();

orderPromise
.then((res) => {
  let num = 0;
  setInterval(() => {
    console.log(`Order ${num}: ${res}`);
    num++;
  }, 2000);
})
.catch((err) => console.log(err));

console.log("end");
console.log("Promises Update");