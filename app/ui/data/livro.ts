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
        { id: "3.1", nivel: 2, url: "/ui/chapters/3#3.1", item: "Programa exemplo" },
        { id: "3.2", nivel: 2, url: "/ui/chapters/3#3.2", item: "Bibliotecas Rust" },
        { id: "3.2.1", nivel: 3, url: "/ui/chapters/3#3.2.1", item: "Biblioteca Padrão" },
        { id: "3.2.2", nivel: 3, url: "/ui/chapters/3#3.2.2", item: "Bibliotecas Externas" },
        //{ id: "3.2.2.1", nivel: 4, url: "/ui/chapters/3#3.2.2.1", item: "Atualização Crate" },
        { id: "3.3", nivel: 2, url: "/ui/chapters/3#3.3", item: "Sintaxe e Semântica" },
        { id: "3.4", nivel: 2, url: "/ui/chapters/3#3.4", item: "Sombreamento, Escopo e Tempo de Vida" },
        { id: "3.5", nivel: 2, url: "/ui/chapters/3#3.5", item: "Operadores" },
        { id: "3.5.1", nivel: 3, url: "/ui/chapters/3#3.5.1", item: "Operadores Aritméticos" },
        { id: "3.5.2", nivel: 3, url: "/ui/chapters/3#3.5.2", item: "Operadores de Atribuição" },
        { id: "3.5.3", nivel: 3, url: "/ui/chapters/3#3.5.3", item: "Operadores Relacionais" },
        { id: "3.5.4", nivel: 3, url: "/ui/chapters/3#3.5.4", item: "Operadores Booleanos" },
        { id: "3.5.5", nivel: 3, url: "/ui/chapters/3#3.5.5", item: "Operadores Bitwise" },
        { id: "3.6", nivel: 2, url: "/ui/chapters/3#3.6", item: "Declarações e Expressões" },
        { id: "3.7", nivel: 2, url: "/ui/chapters/3#3.7", item: "Comentários" },
        { id: "3.8", nivel: 2, url: "/ui/chapters/3#3.8", item: "Gerenciamento de memória" },
        { id: "3.8.1", nivel: 3, url: "/ui/chapters/3#3.8.1", item: "Stack" },
        { id: "3.8.2", nivel: 3, url: "/ui/chapters/3#3.8.2", item: "Heap" },
        { id: "3.8.3", nivel: 3, url: "/ui/chapters/3#3.8.3", item: "Exemplo de alocação" },
        { id: "3.9", nivel: 2, url: "/ui/chapters/3#3.9", item: "Constantes" },
        { id: "3.10", nivel: 2, url: "/ui/chapters/3#3.10", item: "Variáveis" },
        { id: "3.11", nivel: 2, url: "/ui/chapters/3#3.11", item: "Tipos de Dados" },
        { id: "3.12", nivel: 2, url: "/ui/chapters/3#3.12", item: "Tipos Escalares" },
        { id: "3.13", nivel: 2, url: "/ui/chapters/3#3.13", item: "Tipos Compostos" },
        { id: "3.14", nivel: 2, url: "/ui/chapters/3#3.14", item: "Fluxo de Controle" },
        { id: "3.15", nivel: 2, url: "/ui/chapters/3#3.15", item: "Function" },

        { id: "4", nivel: 1, url: "/ui/chapters/4", item: "Ownership" },
        { id: "4.1", nivel: 2, url: "/ui/chapters/4#4.1", item: "Regras de Ownership" },
        { id: "4.2", nivel: 2, url: "/ui/chapters/4#4.2", item: "Interação entre Variáveis e Dados" },
        { id: "4.3", nivel: 2, url: "/ui/chapters/4#4.3", item: "Referências e Borrowing" },
        { id: "4.3.1", nivel: 3, url: "/ui/chapters/4#4.3.1", item: "Múltiplas Referências" },
        { id: "4.3.2", nivel: 3, url: "/ui/chapters/4#4.3.2", item: "Referências Soltas" },
        { id: "4.3.3", nivel: 3, url: "/ui/chapters/4#4.3.3", item: "Regras de Referência" },
        { id: "4.4", nivel: 2, url: "/ui/chapters/4#4.4", item: "Slices" },

        { id: "", nivel: 1, url: "/ui/chapters/next", item: "* Proximos Capítulos *" },

        { id: "", nivel: 1, url: "/ui/appendix/", item: "Apêndices" },
        { id: "A", nivel: 2, url: "/ui/appendix/A", item: "- Palavras Chave" },
        { id: "B", nivel: 2, url: "/ui/appendix/B", item: "- Operadores" },
    ]
}

export interface TableClass {
    id: string
    idStruct: string
    desc: string
    fontSize: string
    classColumn: string
    columns: TableColumnClass
    data: TableDataClass
}

export interface TableColumnClass {
    header: string; // Nome do cabeçalho da coluna
    accessor: string; // Nome da propriedade do objeto para acessar o valor da coluna
}
  
export interface TableDataClass {
    [key: string]: any; // Permite que os objetos tenham propriedades arbitrárias
}

export const tabelas = {
    tabelas: [
        { id: "1",
            idStruct: "2.1.1",
            desc: "Download Rust",
            fontSize: "text-[14px]",
            fontSizesm: "text-[12px]",
            classTable: "table-auto border-collapse mt-4 mb-4",
            classColumn: "border px-2 py-1",
            columns: [
                { header: "Windows 32", accessor: "col1" },
                { header: "Windows 64", accessor: "col2" }
            ],
            data: [
                { "col1": `<a href="https://static.rust-lang.org/rustup/dist/i686-pc-windows-msvc/rustup-init.exe" target="_blank" class="text-decoration-line: underline">Download</a>`,
                  "col2": `<a href="https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe" target="_blank" class="text-decoration-line: underline">Download</a>` }
            ]
        },
        { id: "2",
            idStruct: "2.2.1",
            desc: "Estrutura do programa Rust",
            fontSize: "text-[14px]",
            fontSizesm: "text-[12px]",
            classTable: "table-auto border-collapse mt-4 mb-4",
            classColumn: "border px-2 py-1",
            columns: [
                { header: "Linha", accessor: "col1" },
                { header: "Identificador", accessor: "col2" },
                { header: "Descrição", accessor: "col3" }
            ],
            data: [
                { "col1": 1, "col2": "fn", "col3": "Declara que é uma função" },
                { "col1": 1, "col2": "main", "col3": "Nome da função" },
                { "col1": 1, "col2": "()", "col3": "Parâmetros da função, neste caso não tem parâmetros" },
                { "col1": 1, "col2": "{", "col3": "Início de função declarado como abre chaves" },
                { "col1": 2, "col2": "println!", "col3": "Corpo da função" },
                { "col1": 3, "col2": "}", "col3": "Término da função, fecha chaves" }
            ]
        },
        { id: "3",
            idStruct: "2.2.3",
            desc: "Arquivos do programa",
            fontSize: "text-[14px]",
            fontSizesm: "text-[12px]",
            classTable: "table-auto border-collapse mt-4 mb-4",
            classColumn: "border px-2 py-1",
            columns: [
                { header: "Arquivo", accessor: "col1" },
                { header: "Descrição", accessor: "col2" }
            ],
            data: [
                { "col1": "main.rs", "col2": "Arquivo fonte do Rust" },
                { "col1": "main.pdb", "col2": "Arquivo gerado pelo compilador que contém informações para depuração" },
                { "col1": "main.exe", "col2": "Arquivo executável que pode ser executado pelo sistema operacional" }
            ]
        },
        { id: "4",
            idStruct: "2.3.1",
            desc: "Estrutura do projeto Cargo",
            fontSize: "text-[14px]",
            fontSizesm: "text-[12px]",
            classTable: "table-auto border-collapse mt-4 mb-4",
            classColumn: "border px-2 py-1",
            columns: [
                { header: "Pasta", accessor: "col1" },
                { header: "Arquivo", accessor: "col2" },
                { header: "Descrição", accessor: "col3" }
            ],
            data: [
                { "col1": ".", "col2": "", "col3": "Pasta que contém nosso projeto." },
                { "col1": "src", "col2": "", "col3": "Pasta que contém os fontes do projeto" },
                { "col1": "src", "col2": "main.rs", "col3": "Arquivo main do projeto" },
                { "col1": "target", "col2": "", "col3": "Arquivos de distribuição do nosso projeto" },
                { "col1": "target\\debug", "col2": "", "col3": "Esta pasta vai conter o executável do nosso projeto" },
                { "col1": ".", "col2": "gitignore", "col3": "Arquivos do repositório do Git. Controle de versão." },
                { "col1": ".", "col2": "Cargo.lock", "col3": "Informações sobre as dependências é mantido pelo Cargo" },
                { "col1": ".", "col2": "Cargo.toml", "col3": "Informações do projeto e suas dependências" },
            ]
        },
        { id: "1000",
            idStruct: "A",
            desc: "Palavras Chave",
            fontSize: "text-[14px]",
            fontSizesm: "text-[12px]",
            classTable: "table-auto border-collapse mt-4 mb-4",
            classColumn: "border px-2 py-1",
            columns: [
                { header: "Palavra", accessor: "col1" },
                { header: "Descrição", accessor: "col2" }
            ],
            data: [
                { "col1": "as", "col2": "Realizar conversão primitiva, eliminar a ambiguidade da característica específica que contém um item ou renomear itens em instruções de uso" },
                { "col1": "async", "col2": "Retornar uma instância futura do encadeamento atual" },
                { "col1": "await", "col2": "Aguardar a execução até retornar a resposta" },
                { "col1": "break ", "col2": "Saia de um loop imediatamente" },
                { "col1": "const", "col2": "Defina itens constantes ou ponteiros brutos constantes" },
                { "col1": "continue", "col2": "Continue para a próxima iteração de loop" },
                { "col1": "crate", "col2": "Em um caminho de módulo, refere-se à raiz do crate" },
                { "col1": "dyn", "col2": "Envio dinâmico para um objeto de característica" },
                { "col1": "else", "col2": "Substituto de fluxo para construções if e if let" },
                { "col1": "enum", "col2": "Definir uma enumeração" },
                { "col1": "extern", "col2": "Vincular uma função ou variável externa" },
                { "col1": "false", "col2": "Literal false para expressão booleana" },
                { "col1": "fn", "col2": "Define uma função ou o tipo de ponteiro da função" },
                { "col1": "for", "col2": "Fazer uma repetição sobre itens de um iterador, implementar uma característica ou especificar um tempo de vida com classificação mais alta" },
                { "col1": "if", "col2": "Ramo baseado no resultado de uma expressão condicional" },
                { "col1": "impl", "col2": "Implementar funcionalidade inerente ou característica" },
                { "col1": "in ", "col2": "Parte da sintaxe do for loop" },
                { "col1": "let", "col2": "Vincular uma variável" },
                { "col1": "loop ", "col2": "Loop incondicionalmente" },
                { "col1": "match", "col2": "Combinar um valor com padrões" },
                { "col1": "mod", "col2": "Definir um módulo" },
                { "col1": "move", "col2": "Fazer com que um fechamento se aproprie de todas as suas capturas" },
                { "col1": "pub", "col2": "Denotar visibilidade pública em campos struct, impl blocos ou módulos" },
                { "col1": "ref", "col2": "Vincular por referência" },
                { "col1": "return", "col2": "Retorno da função" },
                { "col1": "Self", "col2": "Um alias de tipo para o tipo que estamos definindo ou implementando" },
                { "col1": "self", "col2": "Assunto do método ou módulo atual" },
                { "col1": "static", "col2": "Variável global ou tempo de vida que dura toda a execução do programa" },
                { "col1": "struct ", "col2": "Define uma estrutura" },
                { "col1": "super", "col2": "Módulo pai do módulo atual" },
                { "col1": "trait", "col2": "Definir uma característica" },
                { "col1": "true", "col2": "Literal true para expressão booleana" },
                { "col1": "type", "col2": "Definir um alias de tipo ou tipo associado" },
                { "col1": "union", "col2": "Definir uma união; é apenas uma palavra-chave quando usada em uma declaração de união" },
                { "col1": "unsafe", "col2": "Denotam código, funções, características ou implementações inseguras" },
                { "col1": "use", "col2": "Trazer símbolos para o escopo" },
                { "col1": "where", "col2": "Denotam cláusulas que restringem um tipo" },
                { "col1": "while", "col2": "Repetição condicional com base no resultado de uma expressão" },
            ]
        },
        { id: "1001",
            idStruct: "A",
            desc: "Palavras Reservadas",
            fontSize: "text-[14px]",
            fontSizesm: "text-[12px]",
            classTable: "table-auto border-collapse mt-4 mb-4",
            classColumn: "border px-2 py-1",
            columns: [
                { header: "Palavra", accessor: "col1" }
            ],
            data: [
                { "col1": "abstract" },
                { "col1": "become" },
                { "col1": "box" },
                { "col1": "do" },
                { "col1": "final" },
                { "col1": "macro" },
                { "col1": "override" },
                { "col1": "priv" },
                { "col1": "try" },
                { "col1": "typeof" },
                { "col1": "unsized" },
                { "col1": "virtual" },
                { "col1": "yield" },
            ]
        },
        { id: "1002",
            idStruct: "B",
            desc: "Operadores",
            fontSize: "text-[14px]",
            fontSizesm: "text-[12px]",
            classTable: "table-auto border-collapse mt-4 mb-4",
            classColumn: "border px-2 py-1",
            columns: [
                { header: "Operador", accessor: "col1" },
                { header: "Exemplo", accessor: "col2" },
                { header: "Descrição", accessor: "col3" },
            ],
            data: [
                { "col1": "!", "col2": "ident!(...), ident!{...}, ident![...]", "col3": "Expansão macro" },
                { "col1": "!", "col2": "!expr", "col3": "Negação ou bitwise (Bit-a-Bit)" },
                { "col1": "!=", "col2": "expr != expr", "col3": "Diferença (Não igual)" },
                { "col1": "%", "col2": "expr % expr", "col3": "Módulo, resto aritmético" },
                { "col1": "%=", "col2": "var %= expr", "col3": "Módulo e atribuição" },
                { "col1": "&", "col2": "&expr, &mut expr", "col3": "Borrow (empréstimo)" },
                { "col1": "&", "col2": "&type, &mut type, &'a type, &'a mut type", "col3": "Tipo de ponteiro empréstimo" },
                { "col1": "&", "col2": "expr & expr", "col3": "Bitwise AND (E)" },
                { "col1": "&=", "col2": "var &= expr", "col3": "Bitwise AND e atribuição" },
                { "col1": "&&", "col2": "expr && expr", "col3": "E lógico" },
                { "col1": "*", "col2": "expr * expr", "col3": "Multiplicação aritmética" },
                { "col1": "*=", "col2": "var *= expr", "col3": "Multiplicação aritmética e atribuição" },
                { "col1": "*", "col2": "*expr", "col3": "Sem referência" },
                { "col1": "*", "col2": "*const type, *mut type", "col3": "Ponteiro Raw" },
                { "col1": "+", "col2": "*const type, *mut type", "col3": "Restrição de tipo composto" },
                { "col1": "+", "col2": "trait + trait, 'a + trait", "col3": "Adição aritmética" },
                { "col1": "+=", "col2": "expr + expr", "col3": "Adição aritmética e atribuição" },
                { "col1": ",", "col2": "expr, expr", "col3": "Argumento e separador de elemento" },
                { "col1": "-", "col2": "- expr", "col3": "Negação aritmética" },
                { "col1": "-", "col2": "expr - expr", "col3": "Subtração aritmética" },
                { "col1": "-=", "col2": "var -= expr", "col3": "Subtração aritmética e atribuição" },
                { "col1": "->", "col2": "fn(...) -> type, |...| -> type", "col3": "Função e tipo de retorno de fechamento" },
                { "col1": ".", "col2": "expr.ident", "col3": "Acesso de membro" },
                { "col1": "..", "col2": ".., expr.., ..expr, expr..expr", "col3": "Literal de intervalo exclusivo à direita" },
                { "col1": "..=", "col2": "..=expr, expr..=expr", "col3": "Literal de intervalo inclusivo à direita" },
                { "col1": "..", "col2": "..expr", "col3": "Sintaxe de atualização literal estrutural" },
                { "col1": "..", "col2": "variant(x, ..), struct_type { x, .. }", "col3": "“E o resto” padrão de vinculação" },
                { "col1": "…", "col2": "expr...expr", "col3": "(Obsoleto, use ..= em vez disso) Em um padrão: padrão de intervalo inclusivo" },
                { "col1": "/", "col2": "expr / expr", "col3": "Divisão aritmética" },
                { "col1": "/=", "col2": "var /= expr", "col3": "Divisão aritmética e atribuição" },
                { "col1": ":", "col2": "pat: type, ident: type", "col3": "Restrições" },
                { "col1": ":", "col2": "ident: expr", "col3": "Inicializador de campo estrutural" },
                { "col1": ":", "col2": "'a: loop {...}", "col3": "Etiqueta de loop" },
                { "col1": ";", "col2": "expr;", "col3": "Terminador de declaração e item" },
                { "col1": ";", "col2": "[...; len]", "col3": "Parte da sintaxe de array de tamanho fixo" },
                { "col1": "<<", "col2": "expr << expr", "col3": "Deslocamento para a esquerda" },
                { "col1": "<<=", "col2": "var <<= expr", "col3": "Deslocamento para a esquerda e atribuição" },
                { "col1": "<", "col2": "expr < expr", "col3": "Comparação menor que" },
                { "col1": "<=", "col2": "expr <= expr", "col3": "Comparação menor que ou igual" },
                { "col1": "=", "col2": "var = expr, ident = type", "col3": "Atribuição/equivalência" },
                { "col1": "==", "col2": "expr == expr", "col3": "Comparação de igualdade" },
                { "col1": "=>", "col2": "pat => expr", "col3": "Parte da sintaxe do match" },
                { "col1": ">", "col2": "expr > expr", "col3": "Comparação maior que" },
                { "col1": ">=", "col2": "expr >= expr", "col3": "Comparação maior que ou igual" },
                { "col1": ">>", "col2": "expr >> expr", "col3": "Deslocamento para a direita" },
                { "col1": ">>=", "col2": "var >>= expr", "col3": "Deslocamento para a direita e atribuição" },
                { "col1": "@", "col2": "ident @ pat", "col3": "Vinculação padrão" },
                { "col1": "^", "col2": "expr ^ expr", "col3": "Bitwise XOR (OU exclusivo)" },
                { "col1": "^=", "col2": "var ^= expr", "col3": "Bitwise XOR e atribuição" },
                { "col1": "|", "col2": "pat | pat", "col3": "Alternativas de padrão" },
                { "col1": "|", "col2": "expr | expr", "col3": "Bitwise OU " },
                { "col1": "|=", "col2": "var |= expr", "col3": "Bitwise OU e atribuição" },
                { "col1": "||", "col2": "expr || expr", "col3": "OU lógico" },
                { "col1": "?", "col2": "expr?", "col3": "Propagação de erro" },
            ]
        },
    ]
}


/*

{ id: "1",
            idStruct: "2.1.1",
            desc: "Download Rust",
            fontSize: "text-[14px]",
            classTable: "table-auto border-collapse mt-4 mb-4",
            classColumn: "border px-4 py-2",
            columns: [

            ],
            data: [
                
            ]
        },

*/


/*
        { id: "1", nivel: 1, item: "" },
        { id: "2", nivel: 1, item: "" },
        { id: "2", nivel: 2, url: "/ui/chapters/2#", item: "" },
        { id: "3", nivel: 1, item: "" },
        { id: "4", nivel: 1, item: "" },

        Sombreamento, Escopo e Tempo de Vida
*/