import { Request, Response } from "express";
import { PedidoVenda } from "../model/PedidoVenda";


interface PedidoVendaDTO {
    idCarro: number,
    idCliente: number,
    dataPedido: Date,
    valorPedido: number,
}

/**
 * A classe `PedidoVendaController` estende a classe `PedidoVenda` e é responsável por controlar as requisições relacionadas aos pedidos de venda.
 * 
 * - Como um controlador dentro de uma API REST, esta classe gerencia as operações relacionadas ao recurso "pedido de venda".
 * - Herdando de `PedidoVenda`, ela pode acessar os métodos e propriedades da classe base.
 */
export class PedidoVendaController extends PedidoVenda {

    /**
     * Lista todos os pedidos de venda.
     * @param req Objeto de requisição HTTP.
     * @param res Objeto de resposta HTTP.
     * @returns Lista de pedidos de venda em formato JSON com status 200 em caso de sucesso.
     * @throws Retorna um status 400 com uma mensagem de erro caso ocorra uma falha ao acessar a listagem de pedidos de venda.
     */
    static async todos(req: Request, res: Response): Promise<Response> {
        try {
            const listaPedidos = await PedidoVenda.listagemPedidos();

            return res.status(200).json(listaPedidos);
        } catch (error) {
            console.log('Erro ao acessar listagem de carros');
            return res.status(400).json({ mensagem: "Não foi possível acessar a listagem de carros" });
        }
    }

    static async novo(req: Request, res: Response): Promise<Response> {
        try {
            // recuperando informações do corpo da requisição e colocando em um objeto da interface CarroDTO
            const pedidoVendaRecebido: PedidoVendaDTO = req.body;

            // instanciando um objeto do tipo carro com as informações recebidas
            const novoPedidoVenda = new PedidoVenda(pedidoVendaRecebido.idCliente, 
                                        pedidoVendaRecebido.idCliente, 
                                        pedidoVendaRecebido.dataPedido,
                                        pedidoVendaRecebido.valorPedido);

            // Chama a função de cadastro passando o objeto como parâmetro
            const repostaClasse = await PedidoVenda.cadastroPedidoVenda(novoPedidoVenda);

            // verifica a resposta da função
            if(repostaClasse) {
                // retornar uma mensagem de sucesso
                return res.status(200).json({ mensagem: "Pedido cadastrado com sucesso!" });
            } else {
                // retorno uma mensagem de erro
                return res.status(400).json({ mensagem: "Erro ao cadastra o Pedido. Entre em contato com o administrador do sistema."})
            }
            
        } catch (error) {
            // lança uma mensagem de erro no console
            console.log(`Erro ao cadastrar um Pedido. ${error}`);

            // retorna uma mensagem de erro há quem chamou a mensagem
            return res.status(400).json({ mensagem: "Não foi possível cadastrar o Pedido. Entre em contato com o administrador do sistema." });
        }
    }
    static async remover(req: Request, res: Response): Promise<Response> {
        try {

            const idPedidoVenda = parseInt(req.params.idPedidoVenda as string);

            const respostaModelo = await PedidoVenda.removerPedidoVenda(idPedidoVenda);

            if (respostaModelo) {
                return res.status(200).json({ mensagem: "O Pedido foi removido com sucesso!" });
            } else {
                return res.status(400).json({ mensagem: "Erro ao remover o Pedido. Entre em contato com o administrador do sistema" });
            }

        } catch (error) {
            console.log(`Erro ao remover o Pedido. ${error}`);

            return res.status(400).json({ mensagem: "Não foi possível remover o Pedido. Entre" })
        }
    }
    static async atualizar(req: Request, res: Response): Promise<Response> {
        try {
            // recupera as informações a serem atualizadas no corpo da requisição
            const pedidoVendaRecebido: PedidoVendaDTO = req.body;
            // recupera o ID do Pedido a ser atualizado
            const idPedidoVendaRecebido = parseInt(req.params.idPedidoVenda as string);
            // instanciando um objeto do tipo Pedido
            const PedidoVendaAtualizado = new PedidoVenda(
                pedidoVendaRecebido.idCliente,
                pedidoVendaRecebido.idCarro,
                pedidoVendaRecebido.dataPedido,
                pedidoVendaRecebido.valorPedido

            );
            
            // adicionando o ID no objeto carroAtualizado
            PedidoVendaAtualizado.setIdPedido(idPedidoVendaRecebido)

            const respostaModelo = await PedidoVenda.atualizarPedidoVenda(PedidoVendaAtualizado);

            if(respostaModelo) {
                return res.status(200).json({ mensagem: "O Pedido foi atualizado com sucesso!"});

            }else{
                return res.status(400).json({ mensagem: "Erro ao atualizar o Pedido. Entre"});
            }


        } catch (error) {
            console.log(`Erro ao remover o Pedido. ${error}`);

            return res.status(400).json({ mensagem: "Não foi possível remover o Pedido. Entre" })
        }
    }
}
