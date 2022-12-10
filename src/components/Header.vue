<template>
    <div class="menu">
        <div class="menu__title" @click="(menu = !menu)">menu</div>
        <div class="menu__body container" :class="{_open:menu}">
            <nav class="menu__content">
                <router-link class="menu__item" v-for="c in cats" :key="c" :to="{name: 'cat', params: {cat: c}}">{{ c }}</router-link>
            </nav>
        </div>
    </div>
    <div class="header">
        <div class="header__body container">
            <div class="header__logo logo">
                <div class="logo__img"></div>
                <div><router-link class="logo__text" :to="{name: 'home'}">AIRRUN</router-link></div>
            </div>
            <nav class="header__nav nav">
                <router-link class="nav__item _hover" v-for="c in cats" :key="c" :to="{name: 'cat', params: {cat: c}}">{{ c }}</router-link>
            </nav>
            <input type="text" class="header__search" placeholder="search" v-model="searchText">
            <router-link class="header__basket" :to="{name: 'basket'}"></router-link>
        </div>
        <div class="header__response response container" v-show="searchRes.length > 0">
            <div class="response__body">
                <h2 class="response__title">We found: </h2>
                <div class="response__item" v-for="i in searchRes" key="i.id">
                    <router-link :to="{name: 'showitem', params: {id: i.id}}" class="response__text">{{ i.name }}</router-link>
                    <button class="response__btn" @click="basket.addItem(i.id)">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from '../assets/db.json'
import cart  from '../assets/js/cart';

export default {
    data() {
        return {
            cats: db.cat,
            searchText: '',
            searchRes: [],
            basket: new cart.Cart,
            menu: false
        }
    },
    created: function() {
        window.addEventListener('popstate', () => {
            console.log('changed');
        })
    },
    methods: {
    },
    watch: {
        searchText() {
            if (this.searchText.length > 0) {
                let res = db.items.filter(i => i.name.toLowerCase().includes(this.searchText.toLowerCase()));
                this.searchRes = res
            } else {
                this.searchRes = []
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    background-color: var(--white-clr);
    padding: 1rem 0;
    margin: 0 0 2rem 0 ;
		&__body {
            display: flex;
            justify-content: space-between;
            align-items: center;
		}

		&__logo {
		}

		&__nav {
            display: flex;
		}

		&__search {
            border: 1px solid var(--black-clr);
            padding: .25rem 0.5rem;
            border-radius: 1rem;
            transition: .3s ease-in-out;
            width: 15rem;

            &:focus {
                border: 1px solid var(--hover-clr);
            }
		}

		&__basket {
            height: 2rem;
            width: 2rem;
            background: url('../assets/images/icons/basket.svg') 50% 50% / cover no-repeat;
		}

        &__response {

        }
}
.logo {
    display: flex;
    align-items: center;
		&__img {
            height: 3rem;
            width: 3rem;
            // background-color: purple;
            background: url('../assets/images/icons/logo.svg') 50% 50% / cover no-repeat;
		}

		&__text {
            margin: 0 0 0 .5rem;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--font-clr);
		}
}
.nav {

		&__item {
            font-weight: 600;
            color: var(--font-clr);
            margin: 0 1rem 0 0;
            text-transform: uppercase;

            &:last-child {
                margin: 0;
            }
		}
}

.response {
    margin: 1rem auto 0 auto;
        &__body {
            border: 1px solid var(--black-clr);
            padding: 1rem;
        }
        &__title {
            margin: 0 0 .5rem 0;
            font-size: 1.5rem;
        }
        &__item {
            
            display: grid;
            grid-template-columns: 10fr 2fr;
            background-color: var(--grey-clr);
            border-bottom: 1px solid var(--black-clr);
		}

		&__text {
            padding: 1rem;
            align-self: center;
		}

		&__btn {
            padding: .5rem;
		}
}

.menu {
    background-color: var(--black-clr);
    color: var(--font-clr-neg);
    display: none;
    cursor: pointer;
		&__title {
            text-align: center;
            text-transform: uppercase;
            font-weight: 600;
            padding: .5rem;
		}

		&__body {
            // height: auto;
            height: 0;
            overflow: hidden;
            transition: .3s ease-in-out;

            &._open {
                height: auto;
                padding: 1rem;
            }
		}

		&__content {
		}

		&__item {
            color: var(--font-clr-neg);
		}
}
.container {
}


@media screen and (max-width: 764px) {
    .nav {
        display: none;
    }

    .menu {
        display: block;
    }
}


</style>