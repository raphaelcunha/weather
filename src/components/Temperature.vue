<template>
    <div :class="temperature.color">
        {{ temperature.value }}°
    </div>


    <!--
        // obs: outra forma de renderizar a temperatura com as cores
        <div class="temperature" :class="{
         blue: temperature <= 5,
         orange: (temperature >= 6 && temperature <= 25),
         red: temperature > 25,
     }">-->

</template>

<script>
    import {convert} from '../utils/convertTemperature'

    export default {
        name: 'Temperature',
        props: {
            value: {
                type: Number,
                required: true,
                default: 0
            },
            type: {
                type: String,
                required: true,
                default: 'celcius'
            },
        },
        computed: {
            temperature: function () {
                return convert({type: this.type, value: this.value})
            }
        },

    }
</script>

<style scoped lang="scss">
    @import "../assets/sass/_settings.scss";
    div {
        &.blue {
            color: $blue;
        }
        &.orange {
            color: $orange;
        }
        &.red {
            color: $red;
        }
    }
</style>
