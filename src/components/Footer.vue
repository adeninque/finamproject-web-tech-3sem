<template >
    <div class="footer">
        <div class="footer__body container">
            <nav class="footer__nav nav">
                <router-link :to="{name: 'home'}" class="nav__item _hover">get help</router-link>
                <router-link :to="{name: 'home'}" class="nav__item _hover">about us</router-link>
                <router-link :to="{name: 'home'}" class="nav__item _hover">products</router-link>
                <router-link :to="{name: 'home'}" class="nav__item _hover">address</router-link>
            </nav>
        </div>
    </div>
</template>

<style scoped lang="scss">
.footer {
    margin: 2rem 0 0 0;
    background-color: var(--black-clr);
    padding: 2rem 0;
		&__body {
		}

		&__nav {
		}
}
.nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    &__item {
            font-weight: 500;
            text-transform: uppercase;
            color: var(--white-clr);
		}
}

</style>