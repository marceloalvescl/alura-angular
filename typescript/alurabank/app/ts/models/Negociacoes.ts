class Negociacoes{

    private _negociacoes: Negociacao[] = [];
                        //Array<Negociacao> = [];



    adiciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao);
    }

    pegaNegociacoes(): Negociacao[]{
        //Programação defensiva para evitar manipulação da lista fora desta classe.
        return [].concat(this._negociacoes);
        //Cria um novo array "[]" e concatena esta nova lista com a outra.
    }

}