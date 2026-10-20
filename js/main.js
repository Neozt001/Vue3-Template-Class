const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            postsList: [],
        }
    },
    methods: {
        myMethod(){

        },
        getAllPosts() {
            // console.log('get')
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    console.log(this.postsList)
                    this.postsList = response.data
                })
                .catch(error => {
                    console.error('Error fetching posts:', error)
                })
        }
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
