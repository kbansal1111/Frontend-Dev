console.log("Start");
setTimeout(()=>console.log("Timeout (macrotask)"),0);
Promise.resolve().then(()=>console.log("Promise (microtask)"));
console.log("End");
// Microtasks run before macrotasks because event loop processes microtask queue first.
