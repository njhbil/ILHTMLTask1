const products = [
  { name: 'Laptop', price: 1000, active: true },
  { name: 'Mouse', price: 20, active: false },
  { name: 'Keyboard', price: 50, active: true }
];

const activeProducts = products.filter((p) => p.active);
const productNames = activeProducts.map((p) => p.name.toUpperCase());
const totalPrice = activeProducts.reduce((total, p) => total + p.price, 0);

console.log(activeProducts);
console.log(productNames);
console.log(totalPrice);

// nyoba data lain
const products2 = [
  { name: 'Hp', price: 3000, active: true },
  { name: 'Charger', price: 150, active: true },
  { name: 'Casing', price: 50, active: false }
];

const aktif2 = products2.filter((p) => p.active);
const nama2 = aktif2.map((p) => p.name.toUpperCase());
const total2 = aktif2.reduce((total, p) => total + p.price, 0);

console.log(nama2);
console.log(total2);
