var app = new Vue({
    el: '#lista-compras',
    data: {
        titulo: 'Lista de items en Vue',
        newItem: '',
        estado : false,
        utiles: []
    },
    methods: {
        addItem: function(){
            this.utiles.push(this.newItem);
            this.newItem = '';
        },
        complete: function(){
            this.estado = true;
        }
    },
    computed: {
        numCaracteres: function () {
            return this.newItem.length;
        }
    },
})