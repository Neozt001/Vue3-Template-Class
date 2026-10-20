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
            // axios.get('https://jsonplaceholder.typicode.com/posts')
            axios.get('http://localhost:5105/api/Aktiehandel')
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
