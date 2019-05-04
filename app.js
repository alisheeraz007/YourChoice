var mainDiv = document.getElementById("mainDiv");
// console.log(mainDiv);


var cart = 0;
var whishlist = [];

let list = localStorage.getItem("whishlist")

list !== null ? whishlist=JSON.parse(list) : whishlist =[];


if(list !== null){
    var quantity = [];
    for(let i = 0; i < whishlist.length; i++){
        quantity.push(whishlist[i].quantity)
    }
}
    if (quantity) {
        
        cart = quantity.reduce((prev,next)=>{
            return prev + next;
        })       
    }

document.getElementById("cart").innerHTML = cart;
//OR this Condition
// list === null ? whishlist =[] : whishlist=JSON.parse(list)
//OR this Condition

// whishlist = JSON.parse(list);
// if(whishlist === null){
//     whishlist =[]
// }


