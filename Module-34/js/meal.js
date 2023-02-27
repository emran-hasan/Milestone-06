const loadMeal = (searchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => displayMeal(data.meals))
}

const displayMeal = meals=>{
    const mealContainer = document.getElementById('meal-container')
    mealContainer.innerHTML ="";
        meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div')
        mealDiv.classList.add("col")
        mealDiv.innerHTML = `
        <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions}</p>
                  <!-- Button trigger modal -->
                  <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                    Details
                  </button>
                </div>
              </div>
        `
        mealContainer.appendChild(mealDiv)
    });
}
const searchMeal = ()=>{
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    loadMeal(searchText);
}


const loadMealDetail = idMeal =>{
 const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
 console.log(url);
 fetch(url)
 .then(res => res.json())
 .then(data => showMealDetails(data.meals[0]))
}

const showMealDetails = (meal) =>{
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealDetails = document.getElementById('mealDetailsBody')
    mealDetails.innerHTML = `
    <img class='img-fluid' src='${meal.strMealThumb}'>
    `

}

loadMeal('fish')
