import { DatabaseModel } from "./DataBaseModel";
const database = new DatabaseModel().pool;
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

    public getIdCliente(): number {
        return this.idCliente;
    }

    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    /* Métodos para o atributo nome */

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    /* Métodos para o atributo cpf */

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    /* Métodos para o atributo telefone */

    public getTelefone(): string {
        return this.telefone;
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    // MÉTODO PARA ACESSAR O BANCO DE DADOS
    // CRUD Create - Read - Update - Delete
    static async listarClientes(): Promise<Array<Cliente> | null> {
        let listaDeClientes: Array<Cliente> = [];
        try {
            // Query para consulta no banco de dados
            const querySelectCliente = `SELECT * FROM cliente;`;

            // Executa a query no banco de dados
            const respostaBD = await database.query(querySelectCliente);

            // Itera sobre os resultados da consulta e cria objetos Cliente
            respostaBD.rows.forEach((cliente) => {
                let novoCliente = new Cliente(
                    cliente.nome,
                    cliente.cpf,
                    cliente.telefone
                );

                novoCliente.setIdCliente(cliente.idCliente);

                // Adicionando o cliente na lista
                listaDeClientes.push(novoCliente);
            });

            // Retorna a lista de clientes
            return listaDeClientes;

        } catch (error) {
            console.log(`Erro ao acessar o modelo: ${error}`);
            return null;
        }
    }
}
