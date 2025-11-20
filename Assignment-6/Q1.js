// Q1 – Async Coffee Maker
function boilWater(){return new Promise((res,rej)=>setTimeout(()=>Math.random()<0.9?res("Water boiled"):rej("Boil failed"),1000));}
function brewCoffee(){return new Promise((res,rej)=>setTimeout(()=>Math.random()<0.9?res("Coffee brewed"):rej("Brew failed"),1000));}
function pourCup(){return new Promise((res,rej)=>setTimeout(()=>Math.random()<0.9?res("Poured into cup"):rej("Pour failed"),1000));}
boilWater().then(r=>{console.log(r);return brewCoffee();})
.then(r=>{console.log(r);return pourCup();})
.then(r=>{console.log(r);console.log("Coffee ready for the team!");})
.catch(e=>console.error("Error:",e));
