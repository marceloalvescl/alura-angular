class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    //Array<Negociacao> = [];
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    pegaNegociacoes() {
        //Programação defensiva para evitar manipulação da lista fora desta classe.
        return [].concat(this._negociacoes);
        //Cria um novo array "[]" e concatena esta nova lista com a outra.
    }
}
