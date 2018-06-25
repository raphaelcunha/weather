<template>
    <Card :isLoading="isLoading">
        <div slot="title">
            {{ weather.city }}, {{weather.country }}
        </div>
        <div slot="main">
            <div class="temperature">
                <Temperature name="title" type="celcius" :value="weather.temp"/>
            </div>
            <div class="info">
                <div>
                    <p>HUMIDITY</p>
                    {{ weather.humidity }}<span>%</span>
                </div>
                <div>
                    <p>PRESSURE</p>
                    {{ weather.pressure }}<span>hPa</span>
                </div>
            </div>
        </div>
        <div slot="footer">
            Updated at {{ weather.dateTime }}
        </div>
    </Card>
</template>

<script>
    import Api from '../../api/Weather'
    import Card from '@/components/Card.vue'
    import Temperature from '@/components/Temperature.vue'

    export default {
        name: 'Weather',
        data() {
            return {
                weather: {},
                isLoading: true,
            }
        },
        components: {
            Card,
            Temperature
        },
        props: {
            city: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            }
        },
        mounted() {
            this.getWeather()
        },
        methods: {
            async getWeather() {
                this.weather = await Api.get(this.city, this.country);
                this.isLoading = false;
                const vm  = this;
                setInterval(function() { vm.updateWeather() }, 10 * 60 * 1000);
            },

            async updateWeather() {
                this.isLoading = true;
                await Api.clearCache(this.city, this.country);
                this.weather = await Api.get(this.city, this.country);
                this.isLoading = false;
            }
        }

    }
</script>

<style scoped lang="scss">
    @import "../assets/sass/_settings.scss";

    .temperature {
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
