<template >
    
    <div class="home container">
        <Suggestion :item="suggItem"/>
        <h2 class="home__section _title">new releases</h2>
        <ListScrolly :items="db.items"/>
        <h2 class="home__section _title">kids</h2>
        <ListScrolly :items="db.items.filter(i => i.cat.includes('kids'))"/>
        <div class="home_anq anq">
            <div class="anq__title">Ask a Question</div>
            <form action="#" class="anq__form">
                <input tabindex="1" class="anq__email" type="text" placeholder="e-mail">
                <textarea tabindex="2" class="anq__text" name="" id="" cols="30" rows="10" placeholder="Your question"></textarea>
                <button type="submit" class="anq__btn _btn-hover">send</button>
            </form>
        </div>
    </div>

</template>


<script>

import needs from '../assets/js/needs'
import cart from '../assets/js/cart'
import db from '../assets/db.json'

import ListScrolly from '../components/ListScrolly.vue'
import Suggestion from '../components/Suggestion.vue'

export default {
    data() {
        return {
            title: "Home",
            cart: new cart.Cart,
            db: db,
            suggItem: db.items[Math.floor(Math.random() * (db.items.length))]
        }
    },
    created: function() {
        needs.changeTitle(this.title)
    },
    methods: {
        additem(id) {
            this.cart.addItem(id)
        },
    },
    components: {
        ListScrolly: ListScrolly,
        Suggestion: Suggestion
    }
}
</script>


<style scoped lang="scss">

.home {
        &__section {
            margin: 1rem 0 .5rem 0;
            border-radius: 1rem;
        }

        &_anq {
            
            margin: 1rem 0 0 0;
		}
}

.anq {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    background-color: var(--grey-clr);
		&__title {
            font-weight: 600;
            text-transform: uppercase;
		}

		&__form {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1rem 0 0 0;
		}

        &__text, &__email {
            border: 1px solid var(--black-clr);
            margin: 1rem 0 0 0;
            border-radius: 1rem;
            padding: .5rem;
            resize: none;

            &:focus {
                border: 1px solid var(--orange-clr);
            }
        } 

        &__email {
            width: 50%;
        }

        &__text {
            width: 75%;
        }
        
        &__btn {
            padding: .5rem 1rem;
            text-transform: uppercase;
            border-radius: 1rem;
            margin: 1rem 0 0 0;
        }
}


</style>