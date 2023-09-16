

//Exercise 2a
//EVentent Listener.......
// const div1 = document.getElementById("d1");
// const div2 = document.getElementById("d2");

// div1.addEventListener("click",function(){
//     console.log("Hi frem " + div1.id)
// })

// div2.addEventListener("click",function(){
//     console.log("Hi frem " + div2.id)
// })

//Exercise 2b
//Event Bubbling........ nb target vs Event listener direkte ref! 
// const div = document.getElementById("outer")
// div.addEventListener("click", function(yes){
//     if(yes.target && yes.target.id){
//         console.log("Hi from " + yes.target.id);
//     }
// })


//Exercise 2C
//Event Bubbling inkl skriv til p-tag fremfor consol.
const div = document.getElementById("outer")
div.addEventListener("click", function(fugl){
    if(fugl.target && fugl.target.id){
        document.getElementById("output").innerText = "Hi from " + fugl.target.id;
    }
})








