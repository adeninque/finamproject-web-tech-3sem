<template >
<div class="showitem container">
    <div class="showitem__view view">
        <div class="view__main url-img-style quad-img" :style="`background-image: url(${mainImg})`"></div>
        <div class="view__other">
            <div class="view__sub quad-img url-img-style" @click="changeMain(img)" v-for="img in item.images" :style="`background-image: url(${needs.mediaRoot + img})`"></div>
        </div>
    </div>
    <div class="showitem__inf inf">
        <h2 class="inf__name">{{ item.name }}</h2>
        <p class="inf__price">Price: {{ item.price }}$</p>
        <p class="inf__size">Size: {{ item.size }}</p>
        <p class="inf__discription">
            <p class="_title">Discription</p>
            <p v-for="d in item.discription">{{ d }}</p>
        </p>
        <div class="inf__btn _btn-hover" @click="cart.addItem(item.id)">Add to Cart</div>
    </div>
</div>
</template>


<script>
import db from "../assets/db.json"
import needs from "../assets/js/needs";
import cart from "../assets/js/cart";


export default {
    data() {
        return {
            item: db.items.filter(i => i.id == this.$route.params.id)[0],
            needs: needs,
            cart: new cart.Cart,
            mainImg: ""
        }
    },
    watch: {
        $route () {
            this.item = db.items.filter(i => i.id == this.$route.params.id)[0]
        }
    },
    created: function() {
        this.mainImg = this.needs.mediaRoot + this.item.images[0]
        needs.changeTitle(this.item.name)
    },
    methods: {
        changeMain(url) {
            this.mainImg = this.needs.mediaRoot + url
        }
    }
}
</script>


<style lang="scss" scoped>
.showitem {
    display: grid;
    grid-template-columns: minmax(10rem, 1fr) 2fr;
    gap: 1rem;
		&__view {
		}

        &__inf {
		}
}
.view {
		&__main {
            width: 100%;
            margin: 0 0 .5rem 0;
            border: 1px solid var(--black-clr);
            border-radius: 1rem;
		}

		&__other {
            display: grid;
            gap: .5rem;
            grid-template-columns: repeat(3, 1fr);
		}

		&__sub {
            width: 100%;
            border: 1px solid var(--black-clr);
            border-radius: 1rem;
            cursor: pointer;
		}
}

.inf {
    font-size: 1.5rem;
		&__name {
            font-size: 2rem;
            font-weight: 600;
		}

		&__price {
            margin: 1rem 0 0 0;
		}

		&__size {
            margin: 1rem 0 0 0;
		}

		&__discription {
            margin: 2rem 0 0 0;
            font-size: 1.5rem;

            & > p {
                margin: 1rem 0 0 0;
            }
		}

        &__btn {
            margin: 2rem 0 0 0;
            padding: 1rem;
            background-color: var(--grey-clr);
            display: inline-block;
        }

        &__counter {
		}
}



.counter {
    font-size: 2rem;
    display: flex;
    align-items: center;
    // grid-template-columns: repeat(3, 1fr);
    &__btn {
        font-size: 2rem;
        padding: 0 1rem;
    }

}

@media screen and (max-width: 768px) {
    .showitem {
        grid-template-columns: 1fr;
    }
}

</style>