class carrosController{
    buscar(){
        return "buscar";
    }
    criar(){
        return "criar";
    }
    alterar(id){
        return "alterando "+id;
    }

    deletar(id){
        return "deletando "+id;
    }

}
module.exports = new carrosController();