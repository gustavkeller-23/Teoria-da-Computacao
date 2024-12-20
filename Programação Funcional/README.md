
# Simulador de Estoque de Mercado

Neste projetos, estamos buscando utilizar a programação funcional para mapear e constrolar dados. Pensando nisso iremos simular um estoque de mercado guardados em um arquivo csv e nele faremos algumas buscas e alteraremos valores.

## Tabela de Conteúdos

1. [Visão Geral](#visão-geral)
2. [Funcionalidades](#funcionalidades)
3. [Instalação](#instalação)

## Visão Geral

O nosso trabalho como gerenciador de um mercado é explorar os dados disponíveis, pensando nisso precisamos de uma velocidade alta para encontrar/extrair informações de um conjunto de dados. Neste mercado fictício teremos somente 100 produtos, contendo dados como: Nome do produto, quantidade em estoque, preço da venda e a maneira que é vendido (Kg ou Unid.).

Importante nos atentarmos aos objetivos que teremos nesse mercado.

## Funcionalidades

- **Funcionalidade 1**: Teremos uma função map para ajustar os preços por conta da inflação, que deduziremos que foi de 9% no ano.
- **Funcionalidade 2**: Teremos também que filtrar para o mercado por preço, onde ele quer dividir em 4 partes, 1 - Kilo com preço menor de 50 reais, 2 - Kilo com preço maior de 50 reais, 3 - Unidade com preço menor de 50 reais, 4 - Unidade com preço maior de 50 reais.
- **Funcionalidade 3**: Queremos descobrir a quantidade de produtos em estoque (somente os de Unidades), além da média de seus preços.
- **Funcionalidade 4**: Sabendo a média de preço de produto, queremos uma nova tabela com os produtos que possuem valores maiores do que a média.

## Instalação

Para utilizar do nosso programa, basta clonar o repositória e abrir no arquivo e rodalo.

```bash
# Clone o repositório
git clone https://github.com/gustavkeller-23/Teoria-da-Computacao.git

# Entre no diretório do projeto
cd Teoria-da-Computacao
cd Programação Funcional
```
