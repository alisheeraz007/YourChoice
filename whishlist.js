var whishlist1 = [];

let list1 = localStorage.getItem("whishlist")

// this Condition
list1 !== null ? whishlist1=JSON.parse(list1) : whishlist1 =[];
// console.log(whishlist1)
// for(let i = 0; i < whishlist1.length; i++){

//     if(whishlist1[i].quantity === 0){
//         whishlist1.splice(i,1)
//     }
// }
function whishlistDisplay(){
    var whishlistDiv = document.getElementById("whishlistMainDiv");
    var table = document.getElementById("whishlistTable")
    if(whishlist1.length === 0){
        whishlistDiv.innerHTML= "No Item Selected!."
    }else{
        table.innerHTML = `<tr><th>Selected Item</th><th>Name</th><th>Price</th><th>Quantity</th></tr>`;
        for(let i = 0; i < whishlist1.length; i++){
            
            table.innerHTML += `<tr><td><img class="whishlistImages" src="mobile images/${whishlist1[i].image}"</td><td>${whishlist1[i].name}</td>
            <td>Rs. ${whishlist1[i].price}/-</td><td><button onClick="decrement(${i})">-</button> <span>${whishlist1[i].quantity}</span> <button onClick="increment(${i})">+</button></td></tr>`;
        }
    }
}
whishlistDisplay();