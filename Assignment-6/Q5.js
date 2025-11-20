// Callback hell
function design(cb){setTimeout(()=>{console.log("Design");cb();},1000);}
function build(cb){setTimeout(()=>{console.log("Build");cb();},1000);}
function test(cb){setTimeout(()=>{console.log("Test");cb();},1000);}
function deploy(cb){setTimeout(()=>{console.log("Deploy");cb();},1000);}
function celebrate(cb){setTimeout(()=>{console.log("Celebrate");cb();},1000);}
design(()=>{build(()=>{test(()=>{deploy(()=>{celebrate(()=>{});});});});});

// async/await version
function step(msg){return new Promise(res=>setTimeout(()=>{console.log(msg);res();},1000));}
async function pipeline(){await step("Design");await step("Build");await step("Test");await step("Deploy");await step("Celebrate");}
pipeline();
// async/await improves readability by removing deep nesting.
