# desafio-seguros

## Página web criada para o desafio front-end do processo seletivo do time de Seguros do Itaú. 

O projeto foi desenvolvido utilizando JavaScript  e o framework ReactJS.

Devio ao prazo curto, a ideia foi desenvolver uma versão "minimalista" da atual página web em produção e um fluxo mais direto na jornada do usuario. 

## Componentes desenvolvidos

### Header
Foi desenvolvido uma versão mais básica do atual header, mantendo o mesmo esquema de cores com algumas poucas modificações. Por não ter tempo hábil para o desenvolvimento das outras páginas, todos os links abrem uma modal explicativa. 

### Banner 
A primeira seção da página foi substituida por um banner full-width que traz o mesmo texto e menos informação na tela. 

### Nossos Planos 
Componente desenvolvido para trazer os principais planos de seguros oferecidos pelo Itaú.

### Formulário 
Para finalizar, o formulário de cotação foi desenvolvido com algumas mudanças ao atual. Ele é um formulário "burro", apenas visual e não envia de fato as informações ali digitadas. 

### Seleção de cobertura 
Usando o retorno json passado no desafio, foi desenvolvida um componente que traz no front todos os tipos de coberturas disponíveis, onde o cliente pode selecionar qual é o ideal para ele.

### Formulário de cobertura 
Foi desenvolvido um segundo formulário, nesse existe uma integração com a API da ViaCep que retorna todos os dados de endereço do usuario através de seu CEP. 

### Footer 
Também foi desenvolvido uma versão mais básica do footer, com mudanças na paleta de cores.

### Testes unitários 
A ideia era trazer um teste para os useState utilizados no Header.js para controlar a abertura das modais. 
