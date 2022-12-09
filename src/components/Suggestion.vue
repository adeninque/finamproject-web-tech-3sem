<template >
    <div class="sugg">
        <div class="sugg__text">
            <h2 class="sugg__title">{{ item.name }}</h2>
            <p class="sugg__price">{{ item.price }}$</p>
            <button class="sugg__btn _btn-hover" @click="cart.addItem(item.id)">Add To Cart</button>
        </div>
        <div class="sugg__img url-img-style" :style="`background-image: url(${needs.mediaRoot + item.images[0]})`"></div>
    </div>
</template>


<script>
import needs from '../assets/js/needs';
import cart from '../assets/js/cart';

export default {
    data() {
        return {
            needs: needs,
            cart: new cart.Cart
        }
    },
    props: {
        item: Object,
    }
}

</script>


<style lang="scss" scoped>
.sugg {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    padding: 2rem;
    gap: 1rem;
    background-color: var(--grey-clr);
		&__text {
            align-self: center;
		}

		&__title {
            font-size: 3rem;
            font-weight: 600;
		}

        &__price {
            font-size: 1.5rem;
            margin: 1rem 0 0 0;
        }

		&__btn {
            margin: 2rem 0 0 0;
            padding: 1rem;
            font-size: 1.5rem;
            border-radius: 1rem;
		}

		&__img {
            background-color: #f1f1f1;
            border-radius: 1rem;
            &::after {
                content: '';
                display: block;
                padding: 100% 0 0 0;
            }
		}
}

</style>