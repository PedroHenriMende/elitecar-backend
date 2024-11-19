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
    static async cadastroCliente(cliente: Cliente): Promise<boolean> {
        try {
            // query para fazer insert de um carro no banco de dados
            const queryInsertCliente = `INSERT INTO Cliente (nome, cpf, telefone)
                                        VALUES
                                        ('${cliente.getNome()}', 
                                        '${cliente.getCpf()}', 
                                        '${cliente.getTelefone()}')
                                        RETURNING id_cliente;`;

            // executa a query no banco e armazena a resposta
            const respostaBD = await database.query(queryInsertCliente);

            // verifica se a quantidade de linhas modificadas é diferente de 0
            if (respostaBD.rowCount != 0) {
                console.log(`Cliente cadastrado com sucesso! ID do carro: ${respostaBD.rows[0].id_cliente}`);
                // true significa que o cadastro foi feito
                return true;
            }
            // false significa que o cadastro NÃO foi feito.
            return false;

            // tratando o erro
        } catch (error) {
            // imprime outra mensagem junto com o erro
            console.log('Erro ao cadastrar o cliente. Verifique os logs para mais detalhes.');
            // imprime o erro no console
            console.log(error);
            // retorno um valor falso
            return false;
        }
    }
// Função assíncrona para remover um cliente do banco de dados
// Parâmetro:
// - idCliente (Number): o ID do cliente que será removido
// Retorno:
// - boolean: true se o cliente foi removido com sucesso, false caso contrário
static async removerCliente(idCliente: Number): Promise<boolean> {
    try {
        // Define a query SQL para deletar um cliente com base no ID fornecido
        // A tabela "cliente" será atualizada com a remoção do registro cujo id_cliente corresponde ao parâmetro
        const queryDeleteCliente = `DELETE FROM cliente WHERE id_cliente = ${idCliente}`;

        // Executa a query no banco de dados e armazena a resposta em respostaBD
        // respostaBD conterá informações sobre o número de linhas afetadas pela operação
        const respostaBD = await database.query(queryDeleteCliente);

        // Verifica se pelo menos uma linha foi afetada pela operação (indica sucesso na remoção)
        if (respostaBD.rowCount != 0) {
            // Loga no console que o cliente foi removido com sucesso, incluindo o ID removido
            console.log(`Cliente removido com sucesso! ID removido: ${idCliente}`);
            return true; // Retorna true para indicar sucesso
        }

        // Caso nenhuma linha tenha sido afetada, retorna false
        return false;

    } catch (error) {
        // Caso ocorra um erro na execução da query, exibe mensagens de log
        console.log(`Erro ao remover cliente. Verifique os logs para mais detalhes.`);
        // Exibe os detalhes do erro no console para ajudar na depuração
        console.log(error);
        return false; // Retorna false para indicar falha na remoção
    }
}
static async atualizarCliemte(cliente: Cliente): Promise<boolean> {
    try {
        // query para fazer update de um carro no banco de dados
        const queryUpdateCliente = `UPDATE cliente SET
                                    nome = '${cliente.getNome()}', 
                                    cpf = '${cliente.getCpf()}', 
                                    telefone = '${cliente.getTelefone()}' 
                                    WHERE id_cliente = ${cliente.getIdCliente()};`;

        console.log(queryUpdateCliente);
        // executa a query no banco e armazena a resposta
        const respostaBD = await database.query(queryUpdateCliente);

        // verifica se a quantidade de linhas modificadas é diferente de 0
        if (respostaBD.rowCount != 0) {
            console.log(`Cliente atualizado com sucesso! ID do Cliente: ${cliente.getIdCliente()}`);
            // true significa que a atualização foi bem sucedida
            return true;
        }
        // false significa que a atualização NÃO foi bem sucedida.
        return false;

        // tratando o erro
    } catch (error) {
        // imprime outra mensagem junto com o erro
        console.log('Erro ao atualizar o cliente. Verifique os logs para mais detalhes.');
        // imprime o erro no console
        console.log(error);
        // retorno um valor falso
        return false;
    }
}
}

