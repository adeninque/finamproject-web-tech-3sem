<template>
    <div class="list">
        <div class="list__item item" v-for="i in items" :key="i.id">
            <router-link :to="{name: 'showitem', params: {id: i.id}}" class="item__img url-img-style" :style="`background-image: url(${needs.mediaRoot + i.images[0]})`" exact></router-link>
            <router-link :to="{name: 'showitem', params: {id: i.id}}" class="item__name">{{ i.name }}</router-link>
            <p class="item__price">{{ i.price }}$</p>
        </div>
    </div>
</template>

<script>
import needs from '../assets/js/needs';

export default {
    data() {
        return {
            needs: needs
        }
    },
    props: {
        items: Array,
        title: String
    }
}
</script>


<style scoped lang="scss">

.list {
    display: flex;
    overflow: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar{
        width: 0;
    }
		&__item {
            min-width: 10rem;
            width: 10rem;
		}
}
.item {
    margin: 0 1rem 0 0;
    &:last-child {
        margin: 0;
    }

		&__img {
            display: block;
            width: 100%;
            border: 1px solid var(--black-clr);
            border-radius: 1rem;
            &::after {
                content: '';
                display: block;
                padding: 100% 0 0 0;
            }
		}

		&__name {
            margin: 1rem 0 0 0;
            display: block;
		}

		&__price {
            margin: .5rem 0 0 0;
		}
}


</style>

