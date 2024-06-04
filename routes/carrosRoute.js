const {Router} = require("express"); //
const router = Router();
const carrosController = require("../controllers/carrosController");


router.get("/carros", (req, res)=>{
    const resposta = carrosController.buscar();
    resposta
    .then((resposta)=> res.status(200).json(resposta))
    .catch((error)=>res.status(400).json(error.message));
});

router.post("/carros", (req, res)=>{
    const novocarros=req.body;
    const resposta = carrosController.criar(novocarros);
    resposta.then(carroCriado=> res.status(201).json(carroCriado)).catch(error=>res.status(400).json(error.message));
});

router.put("/carros/:id", (req, res)=>{
    const {id}=req.params
    const resposta= carrosController.alterar(id);
});
router.delete("/atendimento/:id", (req, res)=>{
    const { id} = req.params;
    const resposta = carrosController.deletar(id);
});

module.exports = router;