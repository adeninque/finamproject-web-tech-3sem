<template>
<div class="list" v-for="item in list" :key="item.id">
    <div class="list__items items">
        <router-link :to="{name: 'showitem', params: {id: item.id}}" class="items__img url-img-style" :style="`background-image: url(${needs.mediaRoot + item.images[0]})`"></router-link>
        <!-- <img :src="'../src/assets/media/photo/'+item.images[0]" alt=""> -->
        <router-link :to="{name: 'showitem', params: {id: item.id}}" class="items__name">{{ item.name }}</router-link>
        <button class="items__btn _btn-hover" @click="cart.addItem(item.id)">Add to Cart</button>
    </div>
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
        list: Array
    }
}
</script>


<style lang="scss" scoped>
.list {

        &__items {
            margin: 1rem 0 0 0;
        }
}
.items {
    display: flex;
    justify-content: space-between;
    align-items: center;
        &__img {
            display: block;
            width: 6rem;
            height: 6rem;
            border: 1px solid var(--black-clr);
            border-radius: 1rem;
        }

        &__name {
        }

        &__btn {
            padding: 1rem;
        }
}

</style>