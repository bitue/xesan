

const btn = document.querySelector('#click');
btn.addEventListener('click', function () {
    let block = document.getElementById("block")
    block.style.display = "block"

    //    nav.style.display="flex"
    //    nav.style.flexDirection="column"
    document.getElementById("nav").style.cssText = `
  display: flex; 
  flex-direction : column;
  
`;
    document.getElementById("ul").style.cssText = `
  display: flex; 
  flex-direction : column;
  
`;
    document.querySelector(".li").style.cssText = `
  margin: 20px 0px ; 
  padding:5px;
  
`;



});


// using dark theme

// const dark = document.getElementById("dark")
// dark.addEventListener("click", function(){
//   document.body.style.backgroundColor="black";
// });


// let colors =["yellow","red","green","blue","lime","orange"]
// let hexCode=["0","1","2","3","4","5","6","A","B","C","D","E","F"]




// const dark =document.getElementById("dark");
// dark.addEventListener("click",function(){
//     const num =rand(0,colors.length-1);
   
//     document.body.style.backgroundColor=colors[num];
    
    
// })