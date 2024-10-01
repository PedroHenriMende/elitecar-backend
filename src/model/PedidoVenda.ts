/**
 * Classe PedidoVenda representa um pedido de venda com atributos como idPedido, idCarro, data do pedido e valor do pedido.
 * A classe inclui métodos getters e setters para acessar e modificar seus atributos.
 */
export class PedidoVenda {
    /* Atributos privados da classe */

    /**
     * Identificador único do pedido de venda.
     */
    private idPedido: number;

    /**
     * Identificador do carro relacionado ao pedido de venda.
     */
    private idCarro: number;

    /**
     * Data em que o pedido de venda foi feito.
     */
    private dataPedido: Date;

    /**
     * Valor total do pedido de venda.
     */
    private valorPedido: number;

    /**
     * Construtor da classe PedidoVenda.
     * Inicializa os atributos dataPedido e valorPedido com os valores fornecidos.
     * 
     * @param dataPedido - Data do pedido de venda.
     * @param valorPedido - Valor total do pedido de venda.
     */
    constructor(
        dataPedido: Date,
        valorPedido: number
    ) {
        this.dataPedido = dataPedido;
        this.valorPedido = valorPedido;
    }

    /* Métodos Getters */

    /**
     * Obtém o ID do pedido de venda.
     * 
     * @returns O identificador único do pedido de venda.
     */
    public getIdPedido(): number {
        return this.idPedido;
    }

    /**
     * Obtém o ID do carro relacionado ao pedido de venda.
     * 
     * @returns O identificador do carro.
     */
    public getIdCarro(): number {
        return this.idCarro;
    }

    /**
     * Obtém a data do pedido de venda.
     * 
     * @returns A data em que o pedido foi feito.
     */
    public getDataPedido(): Date {
        return this.dataPedido;
    }

    /**
     * Obtém o valor do pedido de venda.
     * 
     * @returns O valor total do pedido de venda.
     */
    public getValorPedido(): number {
        return this.valorPedido;
    }

    /* Métodos Setters */

    /**
     * Define o ID do pedido de venda.
     * 
     * @param idPedido - Novo identificador único para o pedido de venda.
     */
    public setIdPedido(idPedido: number): void {
        this.idPedido = idPedido;
    }

    /**
     * Define o ID do carro relacionado ao pedido de venda.
     * 
     * @param idCarro - Novo identificador do carro relacionado ao pedido.
     */
    public setIdCarro(idCarro: number): void {
        this.idCarro = idCarro;
    }

    /**
     * Define a data do pedido de venda.
     * 
     * @param dataPedido - Nova data para o pedido de venda.
     */
    public setDataPedido(dataPedido: Date): void {
        this.dataPedido = dataPedido;
    }

    /**
     * Define o valor total do pedido de venda.
     * 
     * @param valorPedido - Novo valor total para o pedido de venda.
     */
    public setValorPedido(valorPedido: number): void {
        this.valorPedido = valorPedido;
    }
}
