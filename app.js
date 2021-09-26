
document.getElementById('meal-submit').addEventListener('click', function (){
    loadData();
}) 

function loadData(){
    const mealName = document.getElementById('meal-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearch(data)) 
}

const displaySearch = meals => {
    
}








































// const showSearchData = meals => {
//     console.log(meals);
// }


// const loadData = search => {
//     const mealName = document.getElementById("meal-input").value;
//     const searchResults = document.getElementById("search-results");
//     //searchResults.innerHTML = '';
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(error => {
            // const searchDetails = document.getElementById("meal-details");
            // const notFoundMessage = `
            // <h4 id= "error"> Sorry! "${mealName}" is not available right now.</h4>
            // `;
            // searchDetails.innerHTML= notFoundMessage;
            // const searchResults = document.getElementById("search-results");
            // searchResults.innerHTML = ''; 
            // document.getElementById("meal-input").value = '';
        // })

    // const displaySearch = meals =>{
    //     const mealsArray = meals.meals
    //     const searchResults = document.getElementById("search-results");
    //     mealsArray.forEach(meal => {
    //         const mealDiv = document.createElement("div");
    //         mealDiv.className = "mealDiv";
    //         const mealInfo = `
    //         <img onclick="displayDetails(${meal.idMeal})"src="${meal.strMealThumb} ">
    //         <br>
    //         <a onclick="displayDetails(${meal.idMeal})" href=#search-details>${meal.strMeal} </a>
    //         `;
    //         mealDiv.innerHTML = mealInfo;
    //         searchResults.appendChild(mealDiv);
    //         const errorMessage = document.getElementById("error")
    //         if(errorMessage != null){
    //             document.getElementById("error").innerText = "";
    //         }
    //         document.getElementById("meal-input").value = '';
    //     });
    //     }         
// }