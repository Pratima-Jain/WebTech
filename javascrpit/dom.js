console.log("yoo!!");
// ! Document object Model
// it is a tree like representation of our html document
// here, each tag is known as Node.
// DOM is responsible for making our webpage interactive and dynamic

// ? DOM Selectors 
//  -> document.getElementById("id name")
//  -> document.getElementsByClassName("class name ")
//  -> document.getElementsByTagName("")
//  -> document.querySelector()
//  -> document.querySelectorAll()

// -----> document.getElementById("id name")
// let e = document.getElementById("box")
// console.log(e)
// e.style.backgroundColor = "brown";


// -----> document.getElementsByClassName("class name ")
// let containers = document.getElementsByClassName("container");
// console.log(containers);  // HTMLCollection(3) [article.conatiner, article.conatiner, article.conatiner]


// ! HTMLCollection is an impure array
// console.log(Array.isArray(containers));


// -----> document.getElementsByTagName("")
// let elements = document.getElementsByTagName("div")
// console.log(elements);     //HTMLCollection(3) [div,div,div]


// -----> document.querySelector()
// let ele1 = document.querySelector('div, #box, .conatainer');
// console.log(ele1);


// -----> document.querySelectorAll()
// let ele2 = document.querySelectorAll('div, #box, .conatainer');
// console.log(ele2);       //NodeList(4) [div,div,div]

// ! NodeList is an impure array
// console.log(Array.isArray(ele2));


// ? DOM MAINPULATION 
// const mainTag = document.querySelector("#main-container");
// console.log(mainTag)

// let h3Tag = document.createElement("h3")  // <h3></h3>
// let pTag = document.createElement("p")  // <p></p>
// let aTag = document.createElement("a")  // <a></a>


// aTag.href = "https://amazon.com";
// aTag.target="_blank"



// h3Tag.textContent = "helooooo!!!"
// pTag.textContent = "wooooooooo!"
// pTag.innerHTML = "<em>yayaayyy!!!</em>"
// aTag.textContent = "Amazon"


// console.log(h3Tag)  //<h3>helooooo!!!</h3>
// console.log(pTag)  //<h3>helooooo!!!</h3>
// console.log(aTag) 


// mainTag.appendChild(h3Tag);
// mainTag.appendChild(pTag);

// mainTag.append(h3Tag, pTag, aTag)



//? EVENTS ---> actions performed by the user 
// ex: click, scroll, dblclick, load, mouseenter,mouseout,mousemove... 

//! 2 ways to apply events
// 1) using event attribute
// 2) using addEventListener() method <------------ RECOMMENDED


function singleClick() {
    console.log("btn clicked once");
}
function doubleClick() {
    console.log("btn clicked twice!!");
}
function hoverBtn() {
    console.log("yooo!!");
}

//2) USING addEventListener("event,CallbackFn") method  <------RECOMMENDED

const h3Tag = document.createElement("h3");
h3Tag.textContent = "Click hereeee";
h3Tag.style.color = "brown";

h3Tag.addEventListener("click", () => {
    console.log("wooooo!!!");
});
document.body.append(h3Tag);

// const box = document.querySelector("#box");
// console.log(box);

// box.addEventListener("click", ()=>{
//     console.log("i am divvvvvvv!!!");
// });

// ! RAINBOW TASK
const elements =document.querySelectorAll("section");
console.log(elements);

elements.forEach((x)=>{
x.addEventListener("mouseenter",()=>{
    x.style.color=x.textContent;
});
x.addEventListener("mouseout",()=>{
    x.style.color="black";
});

})



