## Configuração inicial

Para inicializar a aplicação siga os passos à seguir:

- À partir do arquivo `.env.example` crie um arquivo `.env`.

```sh
cp .env.example .env
```

- Defina as configurações para utilização dos serviços dentro do arquivo **.env**

## Inicializar a aplicação

- Inicialize os serviços do **Postgres** através do comando `docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
- Crie um banco no postgres conforme informado no .env (o padrão está como apiusers).
- Execute o comando `yarn install` para instalar as dependências.
- Execute o comando `yarn typeorm migration:run` para a criação da estrutura da base de dados.
- Execute o comando `yarn dev` para rodar a API.

## Observações adicionais

- Não foram implementadas todas as operações descritas no desafio.
- Não tive tempo de criar um seeder então para uso inicial da aplicação pelo front será necessário executar os endpoints pelo Postman/Insomnia:
  - Métodos POST:
  - Criar Centro de Custo: http://localhost:3333/cost-center { "name": "Centro de Custo" }
  - Criar Departamento: http://localhost:3333/department { "name": "Departamento", "costCenterId": "**utilizar id retornado na chamada anterior**" }
  - Criar Cargo: http://localhost:3333/role { "name": "Cargo" }
  - Criar Usuário: http://localhost:3333/user { "name": "Nome", "username": "Usuário", "password": "Senha", "departmentId": "**utilizar id retornado na chamada do departamento**", "roleId": "**utilizar id retornado na chamada do cargo**"}
- Assim será possível fazer o login no front e acessar as demais funcionalidades
