let search = document.querySelector('.search-box');

document.querySelector('#search-icon', 'cart-icon').onclick = () => {
    search.classList.toggle('active');
}

// Header
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

//
let btn = document.querySelectorAll('.btn-buy')
// console.log(btn)
btn.forEach(function(button,index){
button.addEventListener("click",function(event){
    let btnItem = event.target
    let product = btnItem.parentElement
    let productImg = product.querySelector("img").src
    let productName = product.querySelector("h3").innerText
    let productPrice = product.querySelector('span').innerText
    // console.log(productPrice,productImg,productName)
    addCart(productPrice,productImg,productName)
})

})
function addCart(productPrice,productImg,productName){
    let addtr = document.createElement("tr")
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i<cartItem.length; i++){
        let productNew = document.querySelectorAll(".title")
        if(productNew[i].innerHTML == productName){
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return
        }
    }
    let trcontent = '<tr><td class="product1"><img class="product1-img" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="price">'+productPrice+'</span><sup>VNĐ</sup></p></td><td><input class="input-product" type="number" value="1" min="1"></td><td class="btn-del">Xóa</td></tr>'
    addtr.innerHTML = trcontent
    let cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)

    carttotal()
    deleteCart()
}

// Tính tổng giá
function carttotal (){
    let cartItem = document.querySelectorAll("tbody tr")
    let totalPrice = 0
    // console.log(cartItem.length)
    
    for (let i = 0; i<cartItem.length; i++){
        let inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue);
        let productPrice = cartItem[i].querySelector(".price").innerText
        // console.log(productPrice);
        let newsProductPrice = productPrice.split('.').join('');
        totalMultiply = inputValue * newsProductPrice
        // console.log(numberWithCommas(totalMultiply));
        totalPrice = totalPrice + totalMultiply
        
        
    }
    let carTotalPrice = document.querySelector(".price-total span")
    let cartPrice = document.querySelector(".cart-price")
    carTotalPrice.innerHTML = numberWithCommas(totalPrice)
    cartPrice.innerHTML = numberWithCommas(totalPrice)
    inputChange ()
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


//Xóa Sản phẩm
function deleteCart(){
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i<cartItem.length; i++){
        let productNew = document.querySelectorAll(".btn-del")
        productNew[i].addEventListener("click",function(event){
            let cartDelete = event.target
            let cartItemRemove = cartDelete.parentElement
            cartItemRemove.remove()
            carttotal ()
            
        })
        
    }
}

function inputChange () {
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i<cartItem.length; i++){
        let inputValue =cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal ();
        })
        
    }
}

let cartBtn = document.querySelector(".bx.bx-x")
let cartShow = document.querySelector(".bx.bx-cart")
cartShow.addEventListener("click",function(){
    
    document.querySelector(".cart").style.right = "0"
})
cartBtn.addEventListener("click",function(){
    
    document.querySelector(".cart").style.right = "-100%"
})


//
let detailBtn1 = document.querySelector(".details1 .bx")
let detailShow1 = document.querySelector(".details-btn1")
detailShow1.addEventListener("click",function(){
    console.log(detailShow1)
    document.querySelector(".details1").style.right = "0"
})
detailBtn1.addEventListener("click",function(){
    console.log(detailShow1)
    
    document.querySelector(".details1").style.right = "-100%"
})


let detailBtn2 = document.querySelector(".details2 .bx")
let detailShow2 = document.querySelector(".details-btn2")
detailShow2.addEventListener("click",function(){
    console.log(detailShow2)
    document.querySelector(".details2").style.right = "0"
})
detailBtn2.addEventListener("click",function(){
    console.log(detailShow2)
    document.querySelector(".details2").style.right = "-100%"
})


let detailBtn3 = document.querySelector(".details3 .bx")
let detailShow3 = document.querySelector(".details-btn3")
detailShow3.addEventListener("click",function(){
    console.log(detailShow3)
    document.querySelector(".details3").style.right = "0"
})
detailBtn3.addEventListener("click",function(){
    
    document.querySelector(".details3").style.right = "-100%"
})


let detailBtn4 = document.querySelector(".details4 .bx")
let detailShow4 = document.querySelector(".details-btn4")
detailShow4.addEventListener("click",function(){
    console.log(detailShow4)
    document.querySelector(".details4").style.right = "0"
})
detailBtn4.addEventListener("click",function(){
    
    document.querySelector(".details4").style.right = "-100%"
})


let detailBtn5 = document.querySelector(".details5 .bx")
let detailShow5 = document.querySelector(".details-btn5")
detailShow5.addEventListener("click",function(){
    console.log(detailShow5)
    document.querySelector(".details5").style.right = "0"
})
detailBtn5.addEventListener("click",function(){
    
    document.querySelector(".details5").style.right = "-100%"
})


let detailBtn6 = document.querySelector(".details6 .bx")
let detailShow6 = document.querySelector(".details-btn6")
detailShow6.addEventListener("click",function(){
    console.log(detailShow6)
    document.querySelector(".details6").style.right = "0"
})
detailBtn6.addEventListener("click",function(){
    
    document.querySelector(".details6").style.right = "-100%"
})


