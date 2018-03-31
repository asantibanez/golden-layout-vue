<template>
    <div id="golden" class="w-full h-screen"></div>
</template>

<script>
    import Vue from 'vue'
    import GoldenLayout from 'golden-layout'
    import FormComponent from "./FormComponent"

    export default {
        components: {FormComponent},
        name: 'app',
        data () {
            return {}
        },
        mounted(){
            console.log('mounting....')
            console.log('App Store? ' + this.$store)
            console.log('App Store? ' + this.$store.getters.counter)

            var config = {
                content: [{
                    type: 'row',
                    content: [
                        {
                            type:'component',
                            componentName: 'example',
                            componentState: { text: 'Component 1' }
                        },
                        {
                            type:'component',
                            componentName: 'example',
                            componentState: {
                                firstName: 'Tom',
                                lastName: 'De Waal'
                            }
                        }
                    ]
                }]
            };

            var self = this
            var myLayout = new GoldenLayout(config, $('#golden'));
            myLayout.registerComponent( 'example', function(container, state){
                container.getElement().html('<div id="form-component"></div>');
                setTimeout(() => {
                    const FormComponentConstructor = Vue.component('form-component').extend({
                        store: self.$store
                    });
                    const vm = new FormComponentConstructor({
                        propsData: {
                            lastState: state || {},
                            goldenLayoutContainer: container
                        }
                    });
                    vm.$mount('#form-component');
                })
            });
            myLayout.init();
        }
    }
</script>