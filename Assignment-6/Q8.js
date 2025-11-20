function submitOrder(){return new Promise((res,rej)=>setTimeout(()=>Math.random()<0.5?res("Order Success"):rej("Order Failed"),500));}
async function processOrder(){
for(let i=1;i<=3;i++){
try{let r=await submitOrder();console.log("Attempt",i,r);return;}catch(e){console.log("Attempt",i,"Failed");}}
throw "Order could not be processed";}
processOrder().catch(console.error);
