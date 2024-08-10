const userInput = document.querySelector('.inputText')
const btn = document.querySelector('.searchBtnArea button')
const itemBar = document.querySelector('.nameSection')

fetch ('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza').then((res) =>res.json()).then((data)=>{

    console.log(data.data.recipes[0].image_url)

    btn.addEventListener('click', ()=>{
        const menu = data.data.recipes
        const userInputValue = userInput.value.trim().toLowerCase()

        itemBar.innerHTML = ''

        const filterMenu = menu.filter((recipe)=> recipe.title.toLowerCase().includes(userInputValue))

        if (filterMenu.length === 0){

            item.innerHTML = "Recipe Not Found"
        } else{
            filterMenu.forEach((recipe)=>{
                const item = document.createElement('div')
                item.classList.add('item')
                item.innerHTML = 
                `<div class="item">
                    <div class="profile">
                        <img src="${recipe.image_url}" alt="">
                    </div>
                    <div class="recipe">
                        <p class="name">${recipe.title}</p>
                        <p class="description">${recipe.publisher}</p>
                    </div>
                </div>`
                itemBar.appendChild(item)



                // fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipe.id}?key=8d488d17-fae0-474f-a48f-b7eab7d8c578`).then((res)=> res.json()).then((data)=> {
          //   console.log(data.data);
            
          // })
          item.addEventListener('click', ()=> {
            const displayBar = document.querySelector('.recipeSection')
            console.log(displayBar);
            displayBar.innerHTML = ''
            const displayImg = document.createElement('div')
            displayImg.classList.add('display-image')
            displayImg.innerHTML = `<img src="${recipe.image_url}" alt="">`
            displayBar.appendChild(displayImg)   
            
            const displayFirstArea = document.createElement('div')
            displayFirstArea.classList.add('display-first-area')
            displayFirstArea.innerHTML = `<div class="time"><i class="fa-regular fa-clock"></i><spanclass="minutes">60<span> MINUTES</div>
            <div class="serving"><i class="fa-solid fa-people-group"></i> <span class="numberServe">4</span> SERVING</div>
            <div class="plusMinus"><i class="fa-solid fa-circle-plus"></i> <i class="fa-solid fa-circle-minus"></i></div>
            <div class="bookmarksArea"><i class="fa-regular fa-bookmark"></i></div>
            </div>`;
            displayBar.appendChild(displayFirstArea)   

            const recipeIngredients = document.createElement('div')
            recipeIngredients.classList.add('recipeIngredients')
            recipeIngredients.innerHTML = `<h3>Recipe ingredients</h3>
                    <div class="Ingredients">
                    <i class="fa-solid fa-check"></i><p>1 cup warm water</p>
                    <i class="fa-solid fa-check"></i><p>1 medium head cauliflower cut into florets</p>
                    </div>

                    <div class="Ingredients">
                    <i class="fa-solid fa-check"></i><p>1 egg</p>
                    <i class="fa-solid fa-check"></i><p>1/2 cup mozzarella shredded</p>
                    </div>

                    <div class="Ingredients">
                    <i class="fa-solid fa-check"></i><p>Salt and pepper to taste</p>
                    <i class="fa-solid fa-check"></i><p>1 cup chicken cooked and shredded</p>
                    </div>

                    <div class="Ingredients">
                    <i class="fa-solid fa-check"></i><p>1/2 cup barbecue sauce</p>
                    <i class="fa-solid fa-check"></i><p>3/4 cup mozzarella shredded</p>
                    </div>

                     <div class="Ingredients">
                    <i class="fa-solid fa-check"></i><p>Red onion to taste thinly sliced</p>
                    <i class="fa-solid fa-check"></i><p>Fresh cilantro to taste</p>
                    </div>                 
                 </div>

            </div>` 
                    
            displayBar.appendChild(recipeIngredients)                  
          })   

            })
        }
    })
})





// document.querySelector(".mainImage") = data.data.recipes[0].image_url