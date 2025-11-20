async function loadProducts(){
try{
let r=await fetch("https://fakestoreapi.com/products");
let data=await r.json();
data.forEach(p=>{
console.log("Product:",p.title);
console.log("Price:$"+p.price);
console.log("Image:",p.image);
console.log("------------------");
});
}catch(e){console.log("Failed to load products. Please try again.");}}
loadProducts();
