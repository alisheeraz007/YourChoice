// function showData(){
//     for(var i = 0; i < items.length; i++){
//         mainDiv.innerHTML += `<div class="insideDiv"><div class="image"><img src="mobile images/${items[i].image}"/></div><p class="name">${items[i].name}</p><p class="price">Rs. ${items[i].price}/-</p>
//         <div class="buttonDiv"><button onClick="decrement(${i})">-</button><button onClick="increment(${i})">+</button></div></div>` 
//     }
// }
// function direcIncrement(index){
//     whishlist.push(items[index])
//     localStorage.setItem("whishlist",JSON.stringify(whishlist));
// }

function increment(index){
    cart++;

    document.getElementById("cart").innerHTML = cart;
    var obj = items[index];
    let matchIds = whishlist.map(function(item){
        return item.id 
    })
    let element = matchIds.indexOf(obj.id);
    console.log(element)

    if (element > -1) {
        whishlist[element].quantity++
    } else {
        obj.quantity++
        whishlist.push(obj);
 
    }

    // if(!whishlist){
    //     whishlist.push(obj);
    //         whishlist[index].quantity++
    // }else{
    //     let matchFound = false
    //     for(let i = 0; i<whishlist.length ; i++){
            
    //         if(whishlist[i].id === obj.id){
    //             whishlist[i].quantity++
    //             matchFound = true;
    //          break;   
    //         }
    //     }
    //     if(!matchFound){
    //         obj.quantity++
    //         whishlist.push(obj);
    //         // whishlist[index].quantity++
    //     }
            
    // }


   
    localStorage.setItem("whishlist",JSON.stringify(whishlist));
}
function decrement(index){
    document.getElementById("cart").innerHTML = cart;
    var obj = items[index]
    // console.log(obj)
    var matchIds = whishlist.map(function(item){
        return item.id 
    })
    // console.log(matchIds)
    
    var element = matchIds.indexOf(obj.id);
    // console.log(element)
            if(cart > 0 &&whishlist[element].quantity > 0){
                cart--;
            }

    if (element > -1) {
        if(whishlist[element].quantity > 0){  
            // console.log(whishlist[element])  
            whishlist[element].quantity--
        }
    }
    else{
        obj.quantity--
        whishlist.push(obj);
    }
    localStorage.setItem("whishlist",JSON.stringify(whishlist));
}

function showData(){
    for(var i = 0; i < items.length; i++){
        mainDiv.innerHTML += `<div class="insideDiv"><div class="image"><img src="mobile images/${items[i].image}"/></div><p class="name">${items[i].name}</p><p class="price">Rs. ${items[i].price}/-</p>
        <div class="buttonDiv"><button onClick="decrement(${i})">-</button><button onClick="increment(${i})">+</button></div></div>` 
    }
}