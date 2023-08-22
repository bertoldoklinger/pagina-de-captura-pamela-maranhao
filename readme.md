# Página de Captura de Leads para o Curso de Portugal da Pamela Maranhão

Este projeto é uma página de captura de leads desenvolvida para o curso da Pamela Maranhão sobre como se mudar para Portugal. A página permite que os visitantes expressem seu interesse no curso e capturem suas informações de contato. Os dados são integrados de maneira transparente ao Google Sheets usando o serviço SaaS sheet.best. O projeto utiliza as tecnologias Tailwind CSS, React, Vite e Axios.

## Recursos

- **Formulário de Leads:** A página apresenta um formulário amigável onde os visitantes podem inserir seu nome, e-mail e número de WhatsApp para demonstrar interesse no curso de Portugal da Pamela Maranhão.

- **Tailwind CSS:** O design é criado usando o framework Tailwind CSS, proporcionando um layout responsivo e visualmente atraente.

- **React e Vite:** O projeto é construído com React para criar uma interface de usuário interativa, enquanto o Vite é usado como ferramenta de compilação para garantir desenvolvimento e implantação eficientes.

- **Integração com Google Sheets:** Os dados do formulário são enviados de maneira contínua para o Google Sheets por meio da API do Google Sheets, utilizando o serviço SaaS sheet.best. O Axios, um cliente HTTP robusto, é utilizado para gerenciar as solicitações da API, garantindo uma comunicação tranquila entre a página de captura de leads e o Google Sheets.

## Instruções de Configuração

1. Clone o repositório em sua máquina local:
git clone https://github.com/bertoldoklinger/pagina-de-captura-pamela-maranhao.git
cd pagina-de-captura-pamela-maranhao

2. Instale as dependências usando npm ou yarn:
npm install

3. Atualize a URL de ação do formulário no componente `Contact.jsx` para apontar para o endpoint da API sheet.best.

4. Execute o servidor de desenvolvimento:
npm run dev

5. Abra o navegador e acesse a URL do servidor de desenvolvimento (geralmente `http://localhost:3000`) para interagir com a página de captura de leads.

## Implantação

Para implantar a página de captura de leads em um ambiente de produção, siga estas etapas:

1. Compile o projeto:
npm run build

markdown
Copy code

2. Os arquivos de compilação serão gerados no diretório `dist`. Você pode usar qualquer servidor web para servir esses arquivos.

3. Atualize a URL de ação do formulário no componente `Contact.jsx` para apontar para o endpoint da API sheet.best em produção.

## Créditos

- Este projeto foi criado por Bertoldo Klinger em nome de Pamela Maranhão.
- Tailwind CSS: [https://tailwindcss.com/](https://tailwindcss.com/)
- React: [https://reactjs.org/](https://reactjs.org/)
- Vite: [https://vitejs.dev/](https://vitejs.dev/)
- Axios: [https://axios-http.com/](https://axios-http.com/)
- Sheet.best: [https://sheet.best/](https://sheet.best/)

## Observação

Este projeto é destinado a fins comerciais e serve como uma solução de captura de leads para o curso da Pamela Maranhão. Certifique-se de cumprir todas as regulamentações relevantes de proteção de dados e privacidade. A chave da API do Google Sheets é gerenciada por meio do serviço sheet.best, de acordo com sua configuração, garantindo uma integração segura.
