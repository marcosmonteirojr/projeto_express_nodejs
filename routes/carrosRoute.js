const {Router} = require("express"); //
const router = Router();
const carrosController = require("../controllers/carrosController");


router.get("/carros", (req, res)=>{
    const resposta = carrosController.buscar();
    res.send(resposta);
});

router.post("/carros", (req, res)=>{
    const resposta = carrosController.criar();
    res.send(resposta);
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