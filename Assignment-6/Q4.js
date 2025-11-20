let A=new Promise((res,rej)=>setTimeout(()=>Math.random()<0.9?res("Server A done"):rej("A failed"),2000));
let B=new Promise((res,rej)=>setTimeout(()=>Math.random()<0.9?res("Server B done"):rej("B failed"),3000));
Promise.all([A,B]).then(()=>console.log("Deployment completed for all servers")).catch(console.error);
Promise.race([A,B]).then(r=>console.log("Fastest response:",r)).catch(console.error);
