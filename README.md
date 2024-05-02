# my-repos

Este projeto é uma aplicação React para gerenciar repositórios do GitHub. Permite aos usuários adicionar repositórios, visualizar seus detalhes e ver problemas associados.

## Dependências

Este projeto utiliza as seguintes dependências:

- **React**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **React Router DOM**: Biblioteca de roteamento para React.
- **Axios**: Cliente HTTP baseado em promises para fazer requisições para a API do GitHub.
- **React Icons**: Biblioteca para adicionar ícones a aplicações React.
- **Styled Components**: Biblioteca CSS-in-JS para estilizar componentes React.
- **React Dotenv**: Permite carregar variáveis de ambiente de um arquivo `.env` para `process.env`.

## Estrutura de Arquivos

A estrutura do projeto está organizada da seguinte forma:

- **`app.js`**: Componente principal da aplicação, renderiza estilos globais e rotas.
- **`routes.js`**: Define as rotas da aplicação usando o React Router DOM.
- **`api.js`**: Configura o Axios para fazer requisições HTTP para a API do GitHub.
- **`main.js`**: Componente para gerenciar repositórios, adicionar novos repositórios e listar repositórios existentes.
- **`repository.js`**: Componente para exibir detalhes do repositório, incluindo problemas associados ao repositório.
