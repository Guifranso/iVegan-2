class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
        this.criarUsuarios()
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
    criarUsuarios() {
        const sql = 'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(40) NOT NULL, endereco VARCHAR(40) NOT NULL, email VARCHAR(255) NOT NULL UNIQUE, senhaHash VARCHAR(255) NOT NULL)'
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Usuarios criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas