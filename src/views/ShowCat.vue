<template >
<div class="showcat container">
    <h2 class="showcat__cat"><span>{{ cat }}</span> Category</h2>
    <div class="showcat__list">
        <ListingItem :list="db"/>
    </div>
</div>
</template>

<script>
import db from '../assets/db.json';
import needs from '../assets/js/needs';
import ListingItem from '../components/ListingItem.vue'

export default{
    data() {
        return {
            url: new URL(document.URL),
            cat: '',
            db: ''
        }
    },
    created: function() {
        this.reloadCats()
    },
    methods: {
        reloadCats() {
            this.cat = this.$route.params.cat
            this.db = db.items.filter(i => i.cat.includes(this.cat))
            needs.changeTitle(this.cat.toUpperCase())
        }
    },
    watch: {
        $route (to, from) {
            this.reloadCats()
            // console.log(db.items.filter(i => this.cat in i.cat));
        }
    },
    components: {
        ListingItem: ListingItem
    }
}
</script>


<style lang="scss" scoped>
.showcat {

		&__cat {
            font-weight: 600;
            text-transform: uppercase;
            font-size: 2rem;

            & span {
                color: var(--orange-clr);
                font-weight: 700;
            }
		}

		&__list {
		}
}
</style>