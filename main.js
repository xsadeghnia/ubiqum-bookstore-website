const app = new Vue({
    el: '#my-vue',
    data:{
        books : [],
    },
    methods:{
        init: async function() {
            const targetURL ='https://api.myjson.com/bins/zyv02';
            this.books = await fetch(targetURL,{
                methods: "GET",
            })
            .then(res => res.json())
            .then(data => data.books)
            .catch(err => err)
        }
    },
    computed:{
        bookInfo:function(){
            let allBooks = [];
            let booksInRow = [];
            for(let i = 0 ; i < this.books.length; i++){
               booksInRow.push(this.books[i]);
               if((i+1)% 3 == 0){
                   allBooks.push(booksInRow);
                   booksInRow = [];
               }
            }
            if(booksInRow.length > 0){
                allBooks.push(booksInRow);
            }
            return allBooks;
        }
    },
    created: function() {
        this.init();
    }
});