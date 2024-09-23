
//function and arrow
function myfun1(){
    let arg = Object.values(arguments);
    console.log(arg[0]);
    // console.log(this);
}
myfun1("hello", 40, true);
var arrowFun = ()=>{
    console.log(this);
}
arrowFun();


let objc = {
    name:"vinoth",
    age:31,
    print: function(){
        let point1 = ()=>{
            console.log(this)
        }
        point1();
    }
}
objc.print();


//Async and await
function funAwait(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("Await is over");
            // res({mesg: "Async promises success.!"})
            rej({mesg: "Async promises error.!"})
        }, 2000)
    })
}

funAwait()
.then(rs => console.log("Success: " + rs))
.catch(err => console.log("Err: " + err.mesg))

async function funAsync(){
    try{
        let res = await fetch("https://github.com/vinothCuteUI?tab=repositories");
        console.log(res);
    }
    catch(err){
        console.log(err.mesg)
    }
}
funAsync();

(function(){
    console.log("Self invoke")
})();



