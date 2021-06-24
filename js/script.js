
const app = new Vue(
    {
        el: '#app',
        data:{
            nuovoTodo:'',
            todos:[
                'fare i compiti',
                'andare al mare',
                'fare la spesa',
                'guardare un film'
            ]
        },
        methods:{
            addTodo(){
                if(this.nuovoTodo == '' || this.todos.includes(this.nuovoTodo)){
                    alert('Attenzione! Non hai scritto nulla o hai scritto una cosa già presente nella lista');
                    this.nuovoTodo = '';
                } else{
                    this.todos.push(this.nuovoTodo);
                    this.nuovoTodo = '';
                }

            },
            remove(indice){
                this.todos.splice(indice,1);
            }
        }

    }
);