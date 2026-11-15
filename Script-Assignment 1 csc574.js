// Imran Hakeem bin Rusli 2026933115

var cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    showCount();
}

// show number of items beside the Cart link
function showCount() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].qty;
    }
    document.getElementById('count').innerHTML = total;
}

function addToCart(name, price) {
    var found = false;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name == name) {
            cart[i].qty++;
            found = true;
        }
    }
    if (!found) {
        cart.push({ name: name, price: price, qty: 1 });
    }
    saveCart();
    alert(name + ' added to cart');
}

// only used in cart.html
function showCart() {
    var list = document.getElementById('cartList');
    if (!list) return;
    var text = '';
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        var sub = cart[i].price * cart[i].qty;
        total = total + sub;
        text += '<tr><td>' + cart[i].name + '</td><td>RM' + cart[i].price.toFixed(2) + '</td><td>' + cart[i].qty + '</td><td>RM' + sub.toFixed(2) + '</td><td><button onclick="removeItem(' + i + ')">Remove</button></td></tr>';
    }
    if (cart.length == 0) {
        text = '<tr><td colspan="5">Your cart is empty</td></tr>';
    }
    list.innerHTML = text;
    document.getElementById('total').innerHTML = 'RM' + total.toFixed(2);
}

function removeItem(i) {
    cart.splice(i, 1);
    saveCart();
    showCart();
}

function checkout() {
    if (cart.length == 0) {
        alert('Your cart is empty');
        return;
    }
    alert('Thank you! Your order has been received.');
    cart = [];
    saveCart();
    showCart();
}

function subscribe() {
    alert('Thanks for subscribing!');
    return false;
}

function sendMessage() {
    alert('Thank you! Your message has been sent.');
    return false;
}

showCount();
showCart();