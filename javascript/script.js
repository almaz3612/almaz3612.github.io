document.querySelector('button').onclick = myclick;

function myclick(){
   // console.log("work");
    //get input
    let text1 = document.querySelector('.i-1').value;
    console.log(text1);
    document.querySelector(".out").innerHTML = text1;
}
const b = {
    1: "kot",
    2: "lisa",
    3: "volk",
    four: "love"
}
function a1() {
console.table(b);
}
function a2() {
    console.warn ("я буду сильно скучать по ней в армии");
}
console.group("Test task");
a2();
a1();
console.groupEnd();
 alert("Катя, я тебя очень сильно люблю!")