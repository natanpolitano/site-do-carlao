let cart = [];
let total = 0;

function addItem(name, price){

    cart.push({name, price});
    total += price;

    updateCart();
}

function removeItem(index){

    total -= cart[index].price;
    cart.splice(index,1);

    updateCart();
}

function updateCart(){

    const list = document.getElementById("cart-items");

    list.innerHTML = "";

    cart.forEach((item, index)=>{

        list.innerHTML += `
        <div class="item">

            <span>${item.name}</span>

            <span>R$ ${item.price.toFixed(2)}</span>

            <button class="remove" onclick="removeItem(${index})">
                Remover
            </button>

        </div>
        `;
    });

    document.getElementById("contador").innerText = cart.length;
    document.getElementById("total").innerText = total.toFixed(2);
}