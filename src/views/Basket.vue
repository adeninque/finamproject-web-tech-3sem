
<template >
    <div class="basket">
        <div class="basket__body container">
            <div class="basket__item item" v-for="c in cart.items">
                <router-link :to="{name: 'showitem', params: {id: c.id}}" class="item__name">{{ db.items.filter(i => i.id == c.id)[0].name }}</router-link>
                <div class="item__counter counter">
                    <div class="counter__btn counter__btn_minus" @click="cart.decreaseCount(c.id)"></div>
                    <div class="counter__count">{{ c.count }}</div>
                    <div class="counter__btn counter__btn_plus" @click="cart.addItem(c.id)"></div>
                </div>
                <div class="item__price">{{ db.items.filter(i => i.id == c.id)[0].price * c.count }}$</div>
                <div class="item__remove _hover" @click="cart.destroyItem(c.id)">Delete</div>
            </div>
            <div class="basket__bill">
                <div class="basket__total">Total: {{ cart.total }}</div>
            </div>
            <div class="basket__order order" v-show="(cart.items.length > 0)">
                <div class="order__title _title">Make order:</div>
                <form :action="'#' + $route.path" class="order__form" @submit="validation" >
                    <label for="id_fullname" class="order__label">Fullname<input type="text" class="order__input" required></label>
                    <label for="id_address" class="order__label">Delivery address<input type="text" class="order__input" required></label>
                    <label for="id_phone-number" class="order__label">Phone number<input type="text" class="order__input"></label>
                    <label for="id_email" class="order__label">Email<input type="text" class="order__input" required></label>
                    <button class="order__btn _btn-hover">Order now</button>
                </form>
            </div>
        </div>
        <div class="basket__thanks thanks" v-show="thanking">
            <div class="thanks__body">
                <h2 class="thanks__msg">Thanks for order !</h2>
                <p class="thanks__sub">Please choose option:</p>
                <div class="thanks__options">
                    <button class="thanks__btn _btn-hover" @click="toggleThanking(); cart.clearCart()">Remove my Basket</button>
                    <button class="thanks__btn _btn-hover" @click="toggleThanking">Leave items in Basket</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import needs from '../assets/js/needs'
import cart from '../assets/js/cart'
import db from '../assets/db.json'

export default {
    data() {
        return {
            title: 'Basket',
            cart: new cart.Cart,
            db: db,
            needs: needs,
            phoneregex: '',
            thanking: false
        }
    },
    created: function() {
        needs.changeTitle(this.title)
    },
    watch: {

    },
    methods: {
        toggleThanking() {
            this.thanking = !this.thanking
        },
        validation(e) {
            this.toggleThanking()
        }
    }
}
</script>


<style lang="scss" scoped>

.basket {
		&__body {
		}

		&__item {
		}
        &__bill {
            padding: 1rem 1rem 0 1rem;
            border-top: 1px var(--black-clr) dashed;
        }
        &__total {
        }
        &__order {
        }
        &__thanks {
        }
}
.item {
    display: grid;
    grid-template-columns: 6fr 2fr 2fr auto ;
		&__name {
            padding: 1rem;
		}

		&__counter {
            align-self: center;
		}

        &__price {
            align-self: center;
        }

		&__remove {
            padding: 1rem;
            text-align: center;
		}

        &:nth-child(odd) {
            background-color: var(--order-clr);
        }
}
.counter {
    display: flex;
		&__btn {
            width: 1em;
            height: 1em;
            position: relative;
            border: 1px solid var(--black-clr);
            border-radius: 50%;
            cursor: pointer;

            &::after, &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                display: block;
                width: 70%;
                height: .2em;
                background-color: var(--black-clr);
                border-radius: .2em;
            }
			&_minus {
                &::before {
                    display: none;
                }
			}

			&_plus {
                &::before {
                    transform: rotate(90deg);
                }
			}
		}

        &__count {  
            width: 1em;
            text-align: center;
        }
}


.order {
    margin: 2rem 0 0 0;
		&__title {
            margin: 0 0 .5rem 0;
		}

		&__form {
            display: flex;
            flex-direction: column;
            align-items: center;
		}

		&__label {
            width: 50%;
            margin: 1rem 0 0 0;
		}

		&__input {
            display: block;
            border: 1px solid var(--black-clr);
            margin: .2rem 0 0 0;
            width: 100%;
            padding: .5rem;

            &:focus {
                border: 1px solid var(--orange-clr);
            }
		}

        &__btn {
            padding: .5rem;
            background-color: var(--grey-clr);
            margin: 1rem 0 0 0;
            width: 50%;
        }
}
.thanks {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: .6);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
		&__body {
            background-color: var(--white-clr);
            padding: 2rem;
            border-radius: 1rem;
		}

		&__msg {
            text-align: center;
            font-size: 2rem;
            font-weight: 600;
		}

		&__sub {
            margin: 2rem 0 0 0;
		}

		&__options {
            display: flex;
            gap: 1rem;
            margin: 1rem 0 0 0;
        }
        &__btn {
            background-color: var(--grey-clr);
            padding: 1rem;
            flex-wrap: wrap;
        }
}


</style>