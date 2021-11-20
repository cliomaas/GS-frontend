# Global Solutions 2021/2: ODS 11

Nosso projeto tem como objetivo tornar a cidade um lugar mais seguro, inclusivo e verde, incluindo os cidadãos e empresas na equação, da seguinte forma:

•	Os cidadãos fazem um cadastro, que permite que eles façam reclamações sobre aspectos da cidade: Eletricidade (Ruas escuras, postes caídos, etc), Poluição (lixo, fábricas poluentes, etc), Perigo (Risco de assalto, assédio, etc) e Construção (construções irregulares) 
•	Empresas se cadastram no nosso site, a fim de apadrinhar certas reclamações e fazer uma parceria com o governo, para solucionar o problema de forma mais ágil

O que ganhamos?
•	Os cidadãos ganham um espaço de compartilhamento do que faz eles infelizes na cidade, são ouvidos e ganham uma cidade mais inclusiva para eles
•	As empresas ganham visibilidade, através de marketing, além de se beneficiarem com uma possível isenção de imposto


### Como fizemos?

Para esse projeto, utilizamos ReactJS, e [react-bootstrap](https://react-bootstrap.github.io/) para estilização. Nossa primeira prioridade é que fosse um site de fácil responsividade, visto que eram muitas páginas, e que se conversassem entre si.

O projeto é integrado com o backend ([Springboot](https://spring.io/projects/spring-boot)), e a intenção inicial era utilizar o heroku como hospedagem de backend, porém por problemas técnicos não conseguimos efetivar essa integração. Por isso, sugerimos que se clone o projeto de backend, e faça o mesmo rodar no localhost:8080, pois a experiência é muito mais interessante quando se manipula os dados de verdade :) 

(Link do repositório de backend) 

## As telas:

### [Home](https://gs-2021-g6.netlify.app/):
<img src="https://i.imgur.com/REWvnBm.jpg" width=60%/>

- Uma página que explica o objetivo do projeto, limpa e simples. Havia sido pedido uma explicação de como o usuario utiliza o sistema, mas fizemos teste de navegabilidade e é bem intuitivo, então resolvemos deixar como deixaríamos na vida real. :)

Assim que clicamos em "Registrar reclamação" somos redirecionados para...

### [Solicitação de login](https://gs-2021-g6.netlify.app/login-reclamacao):
<img src="https://i.imgur.com/QCaSsXA.jpg" width=60%/>

- Queríamos forçar um fluxo para passar pelo login, e essa foi a forma que encontramos. Aqui, o usuário precisa escolher se é Pessoa Física ou jurídica. 

### [Login Pessoa Física](https://gs-2021-g6.netlify.app/login-pf) [Login Pessoa Jurídica](https://gs-2021-g6.netlify.app/login-pj):
<img src="https://i.imgur.com/2FfAEhI.jpg" width=60% />
<img src="https://i.imgur.com/w4zkPxF.jpg" width=60% />

- Páginas de login, simples e que requerem apenas o básico. Há uma funcionalidade interessante a ser pontuada:
<img src="https://i.imgur.com/8c37A2Y.jpg" width=60%/>
<img src="https://i.imgur.com/ci3grAF.jpg" width=60%/>
Reparou que o dashboard (vamos apresentar essa tela a seguir) recupera o prefixo do email? Essa é uma funcionalidade bacana do react: o storage!


### [Dashboard Pessoa Física](https://gs-2021-g6.netlify.app/dashboard-pf) [Dashboard Pessoa Jurídica](https://gs-2021-g6.netlify.app/dashboard-pj)
<img src="https://i.imgur.com/RwCUWWD.jpg" width=60%/>
<img src="https://user-images.githubusercontent.com/79127928/142712053-f8cf6b30-c688-4420-8330-d2582c296007.png" width=60% />

- Infelizmente, devido a uma requisição feita por nós no axios, onde setamos o endereço de requisição (arquivo : src\components\ListaReclamacaoUnica\index.js:21), essa página não funciona no netlify até você ter 6 reclamações :( 
Para ela funcionar no localhost, você precisa alterar o final da url que está na linha descrita acima para algum id de alguma reclamação que exista. Se você ainda não cadastrou nenhuma reclamação, não perca tempo! Cadastre [aqui](https://gs-2021-g6.netlify.app/nova-reclamacao), e ela será id 1! 😄

## [Cadastrar Reclamação](https://gs-2021-g6.netlify.app/nova-reclamacao):
<img src="https://user-images.githubusercontent.com/79127928/142712095-6ce414ca-2f7c-4a46-bab3-5b6a41ef83c7.png" width=60%/>
- E por falar nisso, aqui está ela! A página de cadastro de informação. Super sucinta e didática, ela foi criada para que as pessoas pudessem dizer o que incomoda elas, sem gastar muito tempo. Acessível apenas pelo dashboard-pf, pois apenas os usuários fazem reclamações 

## [Listar Reclamação](https://gs-2021-g6.netlify.app/lista):
<img src="https://user-images.githubusercontent.com/79127928/142712155-e5fe82e6-4ee9-4b9b-b32f-89af6cf1e7a5.png" width=60% />
- Essa tela também tem uma ótima funcionalidade, que é a de filtrar por cep. Às vezes só queremos saber do que está acontecendo perto de casa, né?
<img src="https://user-images.githubusercontent.com/79127928/142712220-b9b751bf-dbf3-4c2d-988d-c1ebe1745fd7.png" width=60% />

É nessa tela também que podemos deletar e alterar as reclamações:
<img src="https://user-images.githubusercontent.com/79127928/142712236-a73a6092-bf9a-4b0d-a31a-fa5fae5627c7.png" width=60% />

## [Cadastro Pessoa Física](https://gs-2021-g6.netlify.app/registro-pf) e [Cadastro Pessoa Jurídica](https://gs-2021-g6.netlify.app/registro-pj):
<img src="https://user-images.githubusercontent.com/79127928/142712258-c7d58f6c-e6d2-4f3b-9790-e9c4cad2d9bf.png" width=60% />
<img src="https://user-images.githubusercontent.com/79127928/142712311-bf26bee9-2ba2-4d9e-b1cb-3643190c2593.png" width=60% />
- Não precisamos de tantas informações, e esse era o objetivo do nosso projeto. Um cadastro sem perder tempo. Apenas as informações absolutamente essenciais. 


# Esperamos que gostem do nosso projeto! 

## Equipe G6



