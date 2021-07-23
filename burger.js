

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