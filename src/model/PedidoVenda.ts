import { DatabaseModel } from "./DataBaseModel";

const database = new DatabaseModel().pool;

/**
 * Classe que representa um Pedido de Venda.
 */
export class PedidoVenda {
    /**
     * Identificador único do pedido de venda.
     */
    private idPedido: number = 0;
    /**
     * Identificador do carro associado ao pedido de venda.
     */
    private idCarro: number;
    /**
     * Identificador do cliente associado ao pedido de venda.
     */
    private idCliente: number;
    /**
     * Data do pedido de venda.
     */
    private dataPedido: Date;
    /**
     * Valor total do pedido.
     */
    private valorPedido: number;

    /**
     * Construtor da classe PedidoVenda.
     * @param idCarro - Identificador do carro.
     * @param idCliente - Identificador do cliente.
     * @param dataPedido - Data do pedido.
     * @param valorPedido - Valor do pedido.
     */
    constructor(idCarro: number, idCliente: number, dataPedido: Date, valorPedido: number) {
        this.idCarro = idCarro;
        this.idCliente = idCliente;
        this.dataPedido = dataPedido;
        this.valorPedido = valorPedido;
    }

    /**
     * Obtém o identificador do pedido.
     * @returns O identificador do pedido.
     */
    public getIdPedido(): number {
        return this.idPedido;
    }

    /**
     * Define o identificador do pedido.
     * @param idPedido - Novo identificador do pedido.
     */
    public setIdPedido(idPedido: number): void {
        this.idPedido = idPedido;
    }

    /**
     * Obtém o identificador do carro.
     * @returns O identificador do carro.
     */
    public getIdCarro(): number {
        return this.idCarro;
    }

    /**
     * Define o identificador do carro.
     * @param idCarro - Novo identificador do carro.
     */
    public setIdCarro(idCarro: number): void {
        this.idCarro = idCarro;
    }

    /**
     * Obtém o identificador do cliente.
     * @returns O identificador do cliente.
     */
    public getIdCliente(): number {
        return this.idCliente;
    }

    /**
     * Define o identificador do cliente.
     * @param idCliente - Novo identificador do cliente.
     */
    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    /**
     * Obtém a data do pedido.
     * @returns A data do pedido.
     */
    public getDataPedido(): Date {
        return this.dataPedido;
    }

    /**
     * Define a data do pedido.
     * @param dataPedido - Nova data do pedido.
     */
    public setDataPedido(dataPedido: Date): void {
        this.dataPedido = dataPedido;
    }

    /**
     * Obtém o valor do pedido.
     * @returns O valor do pedido.
     */
    public getValorPedido(): number {
        return this.valorPedido;
    }

    /**
     * Define o valor do pedido.
     * @param valorPedido - Novo valor do pedido.
     */
    public setValorPedido(valorPedido: number): void {
        this.valorPedido = valorPedido;
    }

    /**
     * Busca e retorna uma lista de pedidos de venda do banco de dados.
     * @returns Um array de objetos do tipo `PedidoVenda` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todos os registros da tabela "pedido_venda".
     * - Os dados retornados são utilizados para instanciar objetos da classe `PedidoVenda`.
     * - Cada pedido de venda instanciado é adicionado a uma lista que será retornada ao final da execução.
     * - Caso ocorra uma falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
     */
    static async listagemPedidos(): Promise<Array<PedidoVenda> | null> {
        const listaDePedidos: Array<PedidoVenda> = [];

        try {
            const querySelectPedidos = `SELECT * FROM pedido_venda;`;
            const respostaBD = await database.query(querySelectPedidos);

            respostaBD.rows.forEach((linha) => {
                const novoPedidoVenda = new PedidoVenda(
                    linha.id_carro,
                    linha.id_cliente,
                    linha.data_pedido,
                    parseFloat(linha.valor_pedido)
                );

                novoPedidoVenda.setIdPedido(linha.id_pedido);

                listaDePedidos.push(novoPedidoVenda);
            });

            return listaDePedidos;
        } catch (error) {
            console.log('Erro ao buscar lista de pedidos');
            return null;
        }
    }
    static async cadastroPedidoVenda(pedidoVenda: PedidoVenda): Promise<boolean> {
        try {
            // query para fazer insert de um carro no banco de dados
            const queryInsertPedidoVenda = `INSERT INTO pedido_venda (id_carro, id_cliente, dataPedido, valorPedido)
                                        VALUES
                                        ('${pedidoVenda.getIdCarro()}', 
                                        '${pedidoVenda.getIdCliente()}', 
                                        ${pedidoVenda.getDataPedido()}
                                        ${pedidoVenda.getValorPedido()},) 
                                        RETURNING id_pedido;`;

            // executa a query no banco e armazena a resposta
            const respostaBD = await database.query(queryInsertPedidoVenda);

            // verifica se a quantidade de linhas modificadas é diferente de 0
            if (respostaBD.rowCount != 0) {
                console.log(`Pedido cadastrado com sucesso! ID do pedido: ${respostaBD.rows[0].id_pedido}`);
                // true significa que o cadastro foi feito
                return true;
            }
            // false significa que o cadastro NÃO foi feito.
            return false;

            // tratando o erro
        } catch (error) {
            // imprime outra mensagem junto com o erro
            console.log('Erro ao cadastrar o pedido. Verifique os logs para mais detalhes.');
            // imprime o erro no console
            console.log(error);
            // retorno um valor falso
            return false;
        }
    }
    static async removerPedidoVenda(idPedidoVenda: Number): Promise<boolean> {
        try {
            const queryDeletePedidoVenda = `DELETE FROM pedido_venda WHERE id_pedido = ${idPedidoVenda}`;

            const respostaBD = await database.query(queryDeletePedidoVenda);

            if (respostaBD.rowCount != 0) {
                console.log(`PedidoVenda removido com sucesso! ID removido: ${idPedidoVenda}`);
                return true;
            }

            return false;

        } catch (error) {
            console.log(`Erro ao remover pedido. Verifique os logs para mais detalhes.`);
            console.log(error);
            return false;
        }
    }
    static async atualizarPedidoVenda(pedidoVenda: PedidoVenda): Promise<boolean> {
        try {
            // query para fazer update de um carro no banco de dados
            const queryUpdatePedidoVenda = `UPDATE pedido_venda SET
                                            id_cliente = ${pedidoVenda.getIdCliente()}, 
                                            id_carro = ${pedidoVenda.getIdCarro()}, 
                                            data_pedido = '${pedidoVenda.getDataPedido()}',
                                            valor_pedido = ${pedidoVenda.getValorPedido()}
                                            WHERE id_pedido = ${pedidoVenda.getIdPedido()};`;
    
            // executa a query no banco e armazena a resposta
            const respostaBD = await database.query(queryUpdatePedidoVenda);
    
            // verifica se a quantidade de linhas modificadas é diferente de 0
            if (respostaBD.rowCount != 0) {
                console.log(`Pedido atualizado com sucesso! ID do Pedido: ${pedidoVenda.getIdPedido()}`);
                // true significa que a atualização foi bem sucedida
                return true;
            }
            // false significa que a atualização NÃO foi bem sucedida.
            return false;
    
            // tratando o erro
        } catch (error) {
            // imprime outra mensagem junto com o erro
            console.log('Erro ao atualizar o Pedido. Verifique os logs para mais detalhes.');
            // imprime o erro no console
            console.log(error);
            // retorno um valor falso
            return false;
        }
    }
}

