const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
        }
    },
    methods: {
        myMethod(){

        },
        getAllPosts() {
            console.log('get')
        }
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
