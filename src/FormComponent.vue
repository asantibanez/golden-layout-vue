<template>
    <div class="p-4 flex flex-col">
        <h2 class="text-white">
            Enter Full Name
        </h2>

        <input type="text" class="w-full mt-4 rounded px-3 py-2" placeholder="First Name" v-model="firstName"/>

        <input type="text" class="w-full mt-4 rounded px-3 py-2" placeholder="Last Name" v-model="lastName"/>

        <p class="text-white text-xl mt-4">
            Your Full Name Is: {{ firstName }} {{ lastName }}
        </p>

        <p class="text-white text-xl mt-4">
            Vuex: {{ counter }}
        </p>

        <div class="mt-4">
            <button class="bg-purple px-3 py-3" @click="increment">
                Increment Counter
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormComponent',

        props: {
            goldenLayoutContainer: { required: false },
            lastState: { required: false }
        },

        data () {
            return {
                firstName: this.lastState.firstName,
                lastName: this.lastState.lastName,
            }
        },

        computed: {
            counter() {
                return this.$store.getters.counter
            }
        },

        watch: {
            firstName: function(val) {
                this.goldenLayoutContainer.extendState({
                    firstName: val
                });
            },
            lastName: function(val) {
                this.goldenLayoutContainer.extendState({
                    lastName: val
                });
            }
        },

        mounted() {
            console.log('Form Component Store? ' + this.$store)
            console.log('Form Component Store? ' + this.$store.getters.counter)
        },

        methods: {
            increment() {
                this.$store.commit('increment')
            }
        }
    }
</script>