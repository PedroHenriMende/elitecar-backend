import { Request, Response, Router } from "express";
import { CarroController } from "./controller/CarroController";
import { ClienteController } from "./controller/ClienteController";
import { PedidoVendaController } from "./controller/PedidoVendaController";

// Cria um roteador
const router = Router();

// Criando uma rota principal para a aplicação
router.get("/", (req: Request, res: Response) => {
    res.json({ mensagem: "Olá, mundo!" });
});

/* 
* ROTAS PARA CARROS
*/ 
// Rota para listar os carros
router.get("/listar/carros", CarroController.todos);
router.post('/novo/carro', CarroController.novo);
// Rota para remover um Carro 
router.delete("/deletar/carro/:idCarro", CarroController.remover);

// Rota para atualizar o Carro
router.put("/atualizar/carro/:idCarro", CarroController.atualizar);
/*
* ROTAS PARA CLIENTES
*/ 
// Rota para listar os clientes
router.get("/listar/clientes", ClienteController.todos);
router.post('/novo/cliente', ClienteController.novo);
// Rota para remover um Cliente
router.delete("/deletar/cliente/:idCliente", ClienteController.remover);

// Rota para atualizar o Cliente
router.put("/atualizar/cliente/:idCliente", ClienteController.atualizar);
/* 
* ROTAS PARA PEDIDOS
*/ 
// Rota para listar os pedidos
router.get("/listar/pedidos", PedidoVendaController.todos);
router.post("/novo/pedido", PedidoVendaController.novo);
// Rota para remover um Carro
router.delete("/deletar/pedido_venda/:idPedidoVenda", PedidoVendaController.remover);

// Rota para atualizar o pedido
router.put("/atualizar/pedido_Venda/:idPedidoVenda", PedidoVendaController.atualizar);

// exportando as rotas
export { router };
