function step(name){return new Promise((res,rej)=>setTimeout(()=>Math.random()<0.85?res(name+" done"):rej(name+" failed"),1000+Math.random()*1000));}
async function runPipeline(){
console.log("Start Pipeline");
try{
console.log("Step 1:",await step("Order taken"));
console.log("Step 2:",await step("Food prepared"));
console.log("Step 3:",await step("Package ready"));
console.log("Step 4:",await step("Out for delivery"));
console.log("Delivery completed!");
}catch(e){console.log("Pipeline failed!",e);}}
runPipeline();
