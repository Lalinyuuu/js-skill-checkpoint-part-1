// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
//ให้เขียนฟังก์ชันชื่อ calculateTotalPrice ที่รับ products และ promotionCode เป็น Argument  
function calculateTotalPrice (products, promotionCode) {
  let total = 0 ;
  for (let i = 0; i <  products.length ; i++) {
    total += products[i].price * products [i].quantity;
  }
  // 20& กับ 50% 
  // 20 % = ? ซื้อ 100 ลด 20 ...  100*0.8=80 = เค
  // 50% 100*0.5=50  
  if (promotionCode === "SALE20") {
    total *= 0.8;
  } else if (promotionCode === "SALE50") {
    total *= 0.5;
  }
 
  return total;

  
}
console.log(calculateTotalPrice(products,""))
console.log(calculateTotalPrice(products, "SALE20"));
console.log(calculateTotalPrice(products, "SALE50"))