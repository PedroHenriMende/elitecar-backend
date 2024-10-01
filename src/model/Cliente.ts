/**
 * Classe Cliente representa um cliente com atributos como idCliente, nome, CPF e telefone.
 * A classe inclui métodos getters e setters para acessar e modificar seus atributos.
 */
export class Cliente {
    /* Atributos privados da classe */

    /**
     * Identificador único do cliente.
     */
    private idCliente: number = 0;

    /**
     * Nome completo do cliente.
     */
    private nome: string;

    /**
     * CPF (Cadastro de Pessoa Física) do cliente.
     */
    private cpf: string;

    /**
     * Telefone de contato do cliente.
     */
    private telefone: string;

    /**
     * Construtor da classe Cliente.
     * Inicializa os atributos idCliente, nome, cpf e telefone com os valores fornecidos.
     * 
     * @param idCliente - Identificador único do cliente.
     * @param nome - Nome completo do cliente.
     * @param cpf - CPF do cliente.
     * @param telefone - Telefone de contato do cliente.
     */
    constructor(
        idCliente: number,
        nome: string,
        cpf: string,
        telefone: string
    ) {
        this.idCliente = idCliente;
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }

    /* Métodos Getters */

    /**
     * Obtém o ID do cliente.
     * 
     * @returns O identificador único do cliente.
     */
    public getIdCliente(): number {
        return this.idCliente;
    }

    /**
     * Obtém o nome do cliente.
     * 
     * @returns O nome completo do cliente.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Obtém o CPF do cliente.
     * 
     * @returns O CPF do cliente.
     */
    public getCpf(): string {
        return this.cpf;
    }

    /**
     * Obtém o telefone do cliente.
     * 
     * @returns O telefone de contato do cliente.
     */
    public getTelefone(): string {
        return this.telefone;
    }

    /* Métodos Setters */

    /**
     * Define o ID do cliente.
     * 
     * @param idCliente - Novo identificador único para o cliente.
     */
    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    /**
     * Define o nome do cliente.
     * 
     * @param nome - Novo nome para o cliente.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Define o CPF do cliente.
     * 
     * @param cpf - Novo CPF para o cliente.
    */
}