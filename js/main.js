// components get imported here first
(() => {
    const { creatApp } = Vue

    creatApp({
        created() {
            fetch('./data.json')
                .then(res => res.json())
                .then(data => this.miniAppData = data)
            .catch(error => console.error(error));
        },

        data() {
            return {
                miniAppData: {}
            }
        },

        methods: {

        },

        components: {

        }
    }).mount('#app')
})()