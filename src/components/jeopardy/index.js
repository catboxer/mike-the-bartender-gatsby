/* 
    Jeopardy
    
    Write an async function 
        that uses fetch() to fetch 4 categories 
        from https://jservice.io/api/categories
        parameters: count, offset
        
    Display the categories
        in a simplified 4x5 Jeopardy Board 
        using CSS Grid
*/

const getQuestions = async (count,offset) => {
  const response = await fetch(`https://jservice.io/api/categories?count=${count}&offset=${offset}`);
  const categories = await response.json();
  return(categories)
} 
function getClueHtml(clueValue) {
  return `<div class="my-category-clue" style="grid-row-start: ${clueValue}/100+1)">$${clueValue}</div>`

  
}
function getCategoryHtml(category){
  return `
        <div class="my-category-title" style="grid-row-start: 1">${category.title}</div>
        ${getClueHtml(100)}
        ${getClueHtml(200)}
        ${getClueHtml(300)}
        ${getClueHtml(400)}
         ${getClueHtml(500)}
        ${getClueHtml(600)}
        ${getClueHtml(700)}
        ${getClueHtml(800)}
         ${getClueHtml(900)}
    `
}
const createboardDiv = getQuestions(9).then((categories)=> {
document.body.innerHTML = `<h1 class="heading">Jeopardy</h1><div class="board">${categories.map(getCategoryHtml).join("")}</div>`;

})

window.document.addEventListener("DOMContentLoaded", createboardDiv)