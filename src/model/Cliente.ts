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
     * Inicializa os atributos nome, cpf e telefone com os valores fornecidos.
     * O idCliente é gerado pelo banco de dados.
     * 
     * @param nome - Nome completo do cliente.
     * @param cpf - CPF do cliente.
     * @param telefone - Telefone de contato do cliente.
     */
    constructor(
        nome: string,
        cpf: string,
        telefone: string
    ) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }

    /* Métodos para o atributo idCliente */

    /**
     * Obtém o ID do cliente.
     * 
     * @returns O identificador único do cliente.
     */
    public getIdCliente(): number {
        return this.idCliente;
    }

    /**
     * Define o ID do cliente.
     * 
     * @param idCliente - Novo identificador único para o cliente.
     */
    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    /* Métodos para o atributo nome */

    /**
     * Obtém o nome do cliente.
     * 
     * @returns O nome completo do cliente.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do cliente.
     * 
     * @param nome - Novo nome para o cliente.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /* Métodos para o atributo cpf */

    /**
     * Obtém o CPF do cliente.
     * 
     * @returns O CPF do cliente.
     */
    public getCpf(): string {
        return this.cpf;
    }

    /**
     * Define o CPF do cliente.
     * 
     * @param cpf - Novo CPF para o cliente.
     */
    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    /* Métodos para o atributo telefone */

    /**
     * Obtém o telefone do cliente.
     * 
     * @returns O telefone de contato do cliente.
     */
    public getTelefone(): string {
        return this.telefone;
    }

    /**
     * Define o telefone do cliente.
     * 
     * @param telefone - Novo telefone para o cliente.
     */
    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }
}
