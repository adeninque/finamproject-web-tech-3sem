import db from '../db.json'

class Cart {
    constructor() {
        this.items = this.getCart()
        this.total = this.getTotal()
    }
    getCart() {
        if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart')) 
        } else {
            localStorage.setItem('cart', JSON.stringify([]))
            return this.getCart()
        }
    }
    addItem(item) {
        let cart = this.getCart()
        if (cart.filter(i => i.id == item).length == 0) {
            cart.push({id: item, count: 1})
            localStorage.setItem('cart', JSON.stringify(cart))
            this.reloadCart()
        } else {
            cart.forEach(element => {
                if (element.id == item) {
                    element.count++
                }
            });
            localStorage.setItem('cart', JSON.stringify(cart))
            this.reloadCart()
        }
    }
    destroyItem(item) {
        let cart = this.getCart()
        if (cart.filter(i => i.id == item)) {
            localStorage.setItem('cart', JSON.stringify(cart.filter(i => i.id != item)))
            this.reloadCart()
        }
    }
    decreaseCount(item) {
        let cart = this.items
        if (cart.filter(i => i.id == item)) {
            cart.forEach(element => {
                if (element.id == item) {
                    if(!(element.count <= 1)) {
                        element.count--
                    }
                }
            });
            localStorage.setItem('cart', JSON.stringify(cart))
            this.reloadCart()
        }
    }
    clearCart() {
        localStorage.setItem('cart', JSON.stringify([]))
        this.reloadCart()
    }
    getAmount() {
        return this.getCart().length
    }
    getTotal() {
        let summa = 0
        this.items.forEach(element => {
            summa += db.items.filter(i => i.id == element.id)[0].price * element.count
        });
        return summa
    }
    reloadCart() {
        this.items = this.getCart()
        this.total = this.getTotal()
    }
}


export default{
    Cart
}