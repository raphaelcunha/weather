<template>
    <div>
        <header>
            <figure>
                <img src="../assets/img/logo.svg" alt="Weather now"/>
            </figure>
        </header>
        <main>
            <section class="weather">
                <Weather city="nuuk" country="gl"></Weather>
                <Weather city="Urubici" country="br"></Weather>
                <Weather city="Nairobi" country="ke"></Weather>
            </section>
        </main>
    </div>
</template>

<script>
    import Weather from '@/components/Weather.vue'

    export default {
        name: 'Dashboard',
        components: {
            Weather
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/sass/_settings.scss";
    header {
        display: flex;
        position: fixed;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 100%;
        background-color: white;
        figure {
            margin: 0;
        }
    }

    main {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section {
        display: flex;
        flex-wrap: nowrap;
    }

    @media (max-width: 416px) {
        section {
            margin-top: 100px;
            flex-direction: column;
            order: 1;
        }

    }


</style>
