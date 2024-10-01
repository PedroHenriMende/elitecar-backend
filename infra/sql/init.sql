CREATE TABLE carro (
	id_carro SERIAL PRIMARY KEY,
	marca VARCHAR(50) NOT NULL,
	modelo VARCHAR(50) NOT NULL,
	ano INT,
	cor VARCHAR(20)
);

CREATE TABLE cliente (
	id_cliente SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	cpf VARCHAR(11) UNIQUE NOT NULL,
	telefone VARCHAR(16)
);

CREATE TABLE pedido_venda (
	id_pedido SERIAL PRIMARY KEY,
	id_cliente INT NOT NULL,
	id_carro INT NOT NULL,
	data_pedido DATE NOT NULL,
	valor_pedido DECIMAL(6) NOT NULL,
	FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente),
	FOREIGN KEY (id_carro) REFERENCES carro (id_carro)
);

INSERT INTO carro (marca, modelo, ano, cor) 
VALUES 
('Toyota', 'Corolla', 2022, 'Preto'),
('Honda', 'Civic', 2021, 'Branco'),
('Ford', 'Mustang', 2020, 'Vermelho'),
('Chevrolet', 'Camaro', 2023, 'Azul'),
('Volkswagen', 'Golf', 2019, 'Cinza');

INSERT INTO cliente (nome, cpf, telefone) 
VALUES 
('João Silva', '12345678901', '11987654321'),
('Maria Oliveira', '98765432100', '11976543210'),
('Carlos Souza', '45678912322', '21987654322'),
('Fernanda Costa', '65432198711', '21965432100'),
('Rafael Lima', '32198765433', '31987654333');

INSERT INTO pedido_venda (id_cliente, id_carro, data_pedido, valor_pedido) 
VALUES 
(1, 2, '2024-09-15', 95000.00),
(2, 3, '2024-09-16', 120000.00),
(3, 1, '2024-09-17', 80000.00),
(4, 4, '2024-09-18', 150000.00),
(5, 5, '2024-09-19', 60000.00);

SELECT * FROM Carro;
SELECT * FROM Cliente;
SELECT * FROM pedido_venda;
