import { describe } from "node:test"

export const rust = {
    struts:  [
        { id: "1", nivel: 1, url: "/ui/chapters/1", item: "O que é a linguagem Rust" },
        { id: "1.1", nivel: 2, url: "/ui/chapters/1#1.1", item: "Por que Rust?" },
        { id: "1.1.1", nivel: 3, url: "/ui/chapters/1#1.1.1", item: "Desempenho" },
        { id: "1.1.2", nivel: 3, url: "/ui/chapters/1#1.1.2", item: "Confiabilidade" },
        { id: "1.1.3", nivel: 3, url: "/ui/chapters/1#1.1.3", item: "Produtividade" },
        { id: "1.2", nivel: 2, url: "/ui/chapters/1#1.2", item: "Construindo com Rust" },
        { id: "1.2.1", nivel: 3, url: "/ui/chapters/1#1.2.1", item: "Linha de Comando" },
        { id: "1.2.2", nivel: 3, url: "/ui/chapters/1#1.2.2", item: "WebAssembly" },
        { id: "1.2.3", nivel: 3, url: "/ui/chapters/1#1.2.3", item: "Redes" },
        { id: "1.2.4", nivel: 3, url: "/ui/chapters/1#1.2.4", item: "Embarcados" },
        { id: "1.3", nivel: 2, url: "/ui/chapters/1#1.3", item: "Características" },

        { id: "2", nivel: 1, url: "/ui/chapters/2", item: "Começando" },
        { id: "2.1", nivel: 2, url: "/ui/chapters/2#2.1", item: "Instalação" },
        { id: "2.1.1", nivel: 3, url: "/ui/chapters/2#2.1.1", item: "Windows" },
        { id: "2.1.2", nivel: 3, url: "/ui/chapters/2#2.1.2", item: "Instalação Visual Studio Code" },
        { id: "2.2", nivel: 2, url: "/ui/chapters/2#2.2", item: "Olá Mundo" },
        { id: "2.2.1", nivel: 3, url: "/ui/chapters/2#2.2.1", item: "Estrutura do programa Rust" },
        { id: "2.2.2", nivel: 3, url: "/ui/chapters/2#2.2.2", item: "Corpo da função" },
        { id: "2.2.3", nivel: 3, url: "/ui/chapters/2#2.2.3", item: "Arquivos do programa" },
        { id: "2.3", nivel: 2, url: "/ui/chapters/2#2.3", item: "Olá Cargo" },
        { id: "2.3.1", nivel: 3, url: "/ui/chapters/2#2.3.1", item: "Estrutura do projeto Cargo" },
        { id: "2.3.2", nivel: 3, url: "/ui/chapters/2#2.3.2", item: "Arquivos fontes" },
        { id: "2.3.3", nivel: 3, url: "/ui/chapters/2#2.3.3", item: "Arquivos de distribuição" },
        { id: "2.3.4", nivel: 3, url: "/ui/chapters/2#2.3.4", item: "Arquivo de configuração" },
        { id: "2.3.5", nivel: 3, url: "/ui/chapters/2#2.3.5", item: "Construindo e executando um projeto cargo" },
        { id: "2.3.6", nivel: 3, url: "/ui/chapters/2#2.3.6", item: "Executando diretamente" },
        { id: "2.3.7", nivel: 3, url: "/ui/chapters/2#2.3.7", item: "Verificando erros de compilação" },
        { id: "2.3.8", nivel: 3, url: "/ui/chapters/2#2.3.8", item: "Construindo o projeto para produção" },

        { id: "3", nivel: 1, url: "/ui/chapters/3", item: "Conceitos do Rust" },
        { id: "4", nivel: 1, url: "/ui/chapters/4", item: "Ownership" },
        { id: "A", nivel: 1, url: "/ui/chapters/A", item: "Apêncice A" },
        { id: "B", nivel: 1, url: "/ui/chapters/B", item: "Apêncice B" },
    ]
}

export const dadosTabela2 = [
    { "Linha": 1, "Identificador": "fn", "Descrição": "Declara que é uma função" },
    { "Linha": 1, "Identificador": "main", "Descrição": "Nome da função" },
    { "Linha": 1, "Identificador": "()", "Descrição": "Parâmetros da função, neste caso não tem parâmetros" },
    { "Linha": 1, "Identificador": "{", "Descrição": "Início de função declarado como abre chaves" },
    { "Linha": 2, "Identificador": "println!", "Descrição": "Corpo da função" },
    { "Linha": 3, "Identificador": "}", "Descrição": "Término da função, fecha chaves" }
]
  
export const colunasTabela2 = [
    { header: "Linha", accessor: "Linha" },
    { header: "Identificador", accessor: "Identificador" },
    { header: "Descrição", accessor: "Descrição" }
]

export const tabelas = {
    tabelas: [
        { id: "2", idStruct: "2.2.1", desc: "Estrutura do Programa", fontSize: "text-[14px]"
            ,rows: [
                { "Linha": 1, "Identificador": "fn", "Descrição": "Declara que é uma função" },
                { "Linha": 1, "Identificador": "main", "Descrição": "Nome da função" },
                { "Linha": 1, "Identificador": "()", "Descrição": "Parâmetros da função, neste caso não tem parâmetros" },
                { "Linha": 1, "Identificador": "{", "Descrição": "Início de função declarado como abre chaves" },
                { "Linha": 2, "Identificador": "println!", "Descrição": "Corpo da função" },
                { "Linha": 3, "Identificador": "}", "Descrição": "Término da função, fecha chaves" }
            ]
        }
    ]
}

/*

[
  { "Linha": 1, "Identificador": "fn", "Descrição": "Declara que é uma função" },
  { "Linha": 1, "Identificador": "main", "Descrição": "Nome da função" },
  { "Linha": 1, "Identificador": "()", "Descrição": "Parâmetros da função, neste caso não tem parâmetros" },
  { "Linha": 1, "Identificador": "{", "Descrição": "Início de função declarado como abre chaves" },
  { "Linha": 2, "Identificador": "println!", "Descrição": "Corpo da função" },
  { "Linha": 3, "Identificador": "}", "Descrição": "Término da função, fecha chaves" }
]

*/

/*
        { id: "1", nivel: 1, item: "" },
        { id: "2", nivel: 1, item: "" },
        { id: "2", nivel: 2, url: "/ui/chapters/2#", item: "" },
        { id: "3", nivel: 1, item: "" },
        { id: "4", nivel: 1, item: "" },

        Sombreamento, Escopo e Tempo de Vida
*/