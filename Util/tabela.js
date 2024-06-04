class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaPais();
    }
    criarTabelaPais() {
        const sql = `create table if not exists pais(id_pais int not null 
                    auto_increment primary key, nome varchar(50));`;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("erro na criacao da tabela");
                console.log(error.message);
                return;
            }
            console.log("criou");
        });
    }
    listar(){
        const sql = "select * from piloto";
       this.conexao.query(sql, {}, (error, resposta)=>{
            if(error){
                console.log("erro");
                return;
            }
            console.log(resposta);
            return resposta;
        });
    }
}
module.exports = new Tabelas();