/**
 * Classe Carro representa um veículo com atributos básicos como marca, modelo, ano e cor.
 * Possui métodos getters e setters para acessar e modificar seus atributos de forma controlada.
 */
export class Carro {
    /* Atributos privados da classe */

    /**
     * Identificador único do carro.
     * Inicialmente definido como 0, pode ser alterado posteriormente.
     */
    private idCarro: number = 0;

    /**
     * Marca do carro (ex: Toyota, Ford, etc.).
     */
    private marca: string;

    /**
     * Modelo do carro (ex: Corolla, Fiesta, etc.).
     */
    private modelo: string;

    /**
     * Ano de fabricação do carro.
     */
    private ano: string;

    /**
     * Cor do carro.
     */
    private cor: string;

    
    /**
     * Construtor da classe Carro.
     * Inicializa os atributos marca, modelo, ano e cor com os valores fornecidos.
     * 
     * @param marca - Marca do carro.
     * @param modelo - Modelo do carro.
     * @param ano - Ano de fabricação do carro.
     * @param cor - Cor do carro.
     */
    constructor(
        marca: string,
        modelo: string,
        ano: string,
        cor: string
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    /* Métodos Getters */

    /**
     * Obtém o ID do carro.
     * 
     * @returns O identificador único do carro.
     */
    public getIdCarro(): number {
        return this.idCarro;
    }

    /**
     * Obtém a marca do carro.
     * 
     * @returns A marca do carro.
     */
    public getMarca(): string {
        return this.marca;
    }

    /**
     * Obtém o modelo do carro.
     * 
     * @returns O modelo do carro.
     */
    public getModelo(): string {
        return this.modelo;
    }

    /**
     * Obtém o ano de fabricação do carro.
     * 
     * @returns O ano de fabricação do carro.
     */
    public getAno(): string {
        return this.ano;
    }

    /**
     * Obtém a cor do carro.
     * 
     * @returns A cor do carro.
     */
    public getCor(): string {
        return this.cor;
    }

    /* Métodos Setters */

    /**
     * Define o ID do carro.
     * 
     * @param idCarro - Novo identificador único para o carro.
     */
    public setIdCarro(idCarro: number): void {
        this.idCarro = idCarro;
    }

    /**
     * Define a marca do carro.
     * 
     * @param marca - Nova marca para o carro.
     */
    public setMarca(marca: string): void {
        this.marca = marca;
    }

    /**
     * Define o modelo do carro.
     * 
     * @param modelo - Novo modelo para o carro.
     */
    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    /**
     * Define o ano de fabricação do carro.
     * 
     * @param ano - Novo ano de fabricação para o carro.
     */
    public setAno(ano: string): void {
        this.ano = ano;
    }

    /**
     * Define a cor do carro.
     * 
     * @param cor - Nova cor para o carro.
     */
    public setCor(cor: string): void {
        this.cor = cor;
    }
}
