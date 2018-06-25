<template>
    <div class="card">
        <div id="title" class="title">
            <slot name="title" v-if="!isLoading"></slot>
        </div>
        <div class="divider"></div>
        <div v-show="isLoading" class="loading"><img src="../assets/img/loader.svg"/></div>
        <div class="main" v-show="!isLoading">
            <slot name="main"></slot>
        </div>
        <div class="footer">
            <slot name="footer" v-if="!isLoading"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            isLoading: {
                type: Boolean,
                required: true,
                default: true,
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../assets/sass/_settings.scss";

    .card {
        flex: 1;
        text-align: center;
        background-color: white;
        width: 250px;
        height: 100%;
        margin: 50px;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(51, 51, 51, 0.1);
        -moz-box-shadow: 0px 0px 10px 0px rgba(51, 51, 51, 0.1);
        box-shadow: 0px 0px 10px 0px rgba(51, 51, 51, 0.1);
        &:nth-of-type(1) {
            .main .info {
                display: none;
            }
        }
        &:nth-of-type(2) {
            margin-top: 25px;
            .loading {
                height: 212.6px;
            }
        }
        &:nth-of-type(3) {
            .main .info {
                display: none;
            }
        }
        .title {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            font-size: 18px;
            color: $strong-grey;
        }
        .divider {
            height: 2px;
            background-color: $divider;
        }
        .main {
            .temperature {
                padding: 20px 0;
                font-size: 98px;
            }
            .info {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: $card-footer-bg;
                div {
                    flex: 1;
                    font-size: 18px;
                    color: $strong-grey;
                    padding: 15px 0 5px 0;
                    p {
                        margin: 0 0 5px 0;
                        color: $grey;
                        font-size: 12px;
                    }
                    span {
                        font-size: 12px;
                    }
                }
            }
        }
        .footer {
            display: flex;
            justify-content: center;
            align-items: center;
            background: $card-footer-bg;
            width: 100%;
            font-size: 10px;
            color: $grey;
            height: 45px;
        }

        .loading {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 152.6px;
        }
    }

    @media (max-width: 416px) {
        .card {
            margin: 0 0 40px 0 !important;
            &:nth-of-type(1) {
                order: 2;
            }
            &:nth-of-type(2) {
                order: 1;
                margin-top: 220px !important;
            }
            &:nth-of-type(3) {
                order: 3;
            }
        }
    }

</style>
