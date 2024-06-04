const conexao = require("../Util/conexao");
class carrosModel {
    listar() {
        const sql = "SELECT * FROM piloto";
        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (error, resposta) => {
                if (error) {
                    console.log("erro");
                    reject(error);
                }
                resolve(resposta);

            });
        });
    }
    criar(novocarros) {
        const sql = "insert into piloto st ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, novocarros, (error, resposta) => {
                if (error) {
                    console.log("erro");
                    reject(error);
                }
                console.log("ok");
                resolve(resposta);
            });
        });
    }
}
module.exports = new carrosModel();