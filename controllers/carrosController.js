const carrosModel = require('../model/carrosModel');
class carrosController{
    buscar(){
        return carrosModel.listar();
    }
    criar(novocarros){
        return carrosModel.criar(novocarros);
    }
    alterar(id){
        return "alterando "+id;
    }

    deletar(id){
        return "deletando "+id;
    }

}
module.exports = new carrosController();