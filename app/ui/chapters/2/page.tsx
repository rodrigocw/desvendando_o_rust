import ImageCaption from "../../ImageCaption";
import Layout from "../../Layout";
import Tabelas from "../../Tabelas";
import Tabela from "../../Tabela";

export default function Ch2() {
    return (
        <Layout>
            <div className="ml-4 mr-4">
                <h1 id="2">Começando</h1>
                <h2 id="2.1">Instalação</h2>
                <h3 id="2.1.1">Windows</h3>
                <p>{`Para instalar o Rust é recomendado utilizar a ferramenta rustup que pode ser encontrada abaixo.`}</p>
                <Tabela id={"1"} />
                <p>{`Execute o programa relacionado a sua versão do Windows. Neste momento ele vai verificar se o C++ está instalado em seu sistema, se não estiver, ele vai solicitar a instalação do Visual Studio conforme tela abaixo.`}</p>
                <ImageCaption
                    src="/images/chapters/2/1_rustup-init.exe.webp"
                    alt="rustup-init"
                    width={685}
                    height={284}
                />
                <p>{`Neste caso pode ser informada a opção 1. Ele vai baixar o instalador do Visual Studio e executá-lo. Clique em Sim na janela do instalador.`}</p>
                <ImageCaption
                    src="/images/chapters/2/2_visual_studio_installer.webp"
                    alt="Visual Studio Installer"
                    width={296}
                    height={255}
                />
                <p>{`O instalador vai informar as políticas de privacidade e licenciamento, clique em Continuar.`}</p>
                <ImageCaption
                    src="/images/chapters/2/3_visual_studioInstaller.webp"
                    alt="Visual Studio Installer Políticas"
                    width={336}
                    height={197}
                />
                <p>{`Será apresentada uma tela informando quais pacotes serão instalados, clique em Instalar.`}</p>
                <ImageCaption
                    src="/images/chapters/2/4_visual_studio_installer.webp"
                    alt="Visual Studio Installer Pacotes"
                    width={518}
                    height={388}
                />
                <p>{`O instalador vai baixar os pacotes necessários e fazer a instalação do Visual Studio, os passos serão informados na tela de instalação. Ao concluir a instalação será apresentada a tela de conclusão do processo, Clique em fechar.`}</p>
                <ImageCaption
                    src="/images/chapters/2/5_visual_studio_installer.webp"
                    alt="Visual Studio Installer Conclusão"
                    width={518}
                    height={388}
                />
                <p>{`A partir deste ponto o instalador rustup continua com a instalação do Rust em seu sistema e será solicitado para escolher o tipo de instalação.`}</p>
                <ImageCaption
                    src="/images/chapters/2/6_rustp-init.webp"
                    alt="rustup-init Tipo de Instalação"
                    width={685}
                    height={284}
                />
                <p>{`Neste ponto pode ser informada a opção 1 ou pressionar Enter.`}</p>
                <ImageCaption
                    src="/images/chapters/2/7_rustp-init.webp"
                    alt="rustup-init Tipo de Instalação"
                    width={685}
                    height={284}
                />
                <p>{`O instalador fará o download e instalação dos pacotes necessários.`}</p>
                <ImageCaption
                    src="/images/chapters/2/8_rustp-init.webp"
                    alt="rustup-init Download Pacotes"
                    width={685}
                    height={284}
                />
                <p>{`Ao final será apresentada a mensagem de conclusão do processo, pressione Enter.`}</p>
                <ImageCaption
                    src="/images/chapters/2/9_rustp-init.webp"
                    alt="rustup-init Conclusão"
                    width={685}
                    height={284}
                />
                <p>{`Após instalado, pelo Painel de Controle é possível verificar tudo que foi instalado.`}</p>
                <ImageCaption
                    src="/images/chapters/2/10_painel_controle.webp"
                    alt="Painel de Controle"
                    width={690}
                    height={311}
                />
                <h3 id="2.1.2">Instalação Visual Studio Code</h3>
                <p>{`Se desejar uma IDE para o desenvolvimento poderá ser utilizado o Visual Studio Code, que pode ser baixado no link abaixo.`}</p>
                <a href="https://code.visualstudio.com/download" target="_blank" className="underline text-blue-500">
                    <p>{`https://code.visualstudio.com/download`}</p>
                </a>
                <p>{`Execute o VSCodeUserSetup baixado, aceite os termos de licença e siga a instalação até quando for solicitado a Selecionar Tarefas Adicionais.`}</p>
                <ImageCaption
                    src="/images/chapters/2/11_Instalacao_vscode.webp"
                    alt="Instalação do Visual Studio Code"
                    width={418}
                    height={324}
                />
                <p>{`Na seleção de tarefas adicionais, deixe marcada as opções a seguir e conclua a instalação.`}</p>
                <ImageCaption
                    src="/images/chapters/2/12_Instalacao_vscode.webp"
                    alt="Instalação do Visual Studio Code Selecionar Tarefas"
                    width={418}
                    height={324}
                />
                <p>{`Após a instalação do VS Code instale a extensão rust-analizer (Crtl+Shit+X), conforme tela abaixo.`}</p>
                <ImageCaption
                    src="/images/chapters/2/13_Instalacao_RustAnalyzer.webp"
                    alt="Instalação rust-analizer"
                    width={687}
                    height={399}
                />
                <h2 id="2.2">Olá Mundo</h2>
                <p>{`Para entendermos como estruturar nossos programas em Rust, vamos criar um projeto Olá Mundo, que ao ser executado vai mostrar na tela Olá, Mundo!`}</p>
                <p>{`Iniciamos criando uma pasta projetos e dentro dela uma nova pasta ola_mundo, a convenção é que nomes compostos por mais de uma palavra sejam separados com o _ (underscore), em seguida executamos o VS Code na pasta criada, para criar nosso programa da seguinte forma:`}</p>
                <ImageCaption
                    src="/images/chapters/2/15_Ola_Mundo.webp"
                    alt="Criação pastas projeto Olá Mundo!"
                    width={685}
                    height={177}
                />
                <p className="mb-2" dangerouslySetInnerHTML={{ __html: `Na primeira vez que executarmos o VS Code na pasta do nosso projeto ele vai solicitar que você confie nos autores dos arquivos na pasta. Selecione <kbd>Trust the authors…</kbd> e clique em <kbd>Yes</kbd>, conforme podemos ver abaixo.` }} />
                <ImageCaption
                    src="/images/chapters/2/16_vs_code.webp"
                    alt="Abrindo o VS Code"
                    width={687}
                    height={440}
                />
                <p>{`Agora vamos criar nosso programa que vai mostrar a mensagem Olá, Mundo na saída dele. Neste ponto criamos um novo programa chamado main com a extensão rs que é o padrão do Rust.`}</p>
                <ImageCaption
                    src="/images/chapters/2/17_main.webp"
                    alt="Olá, Mundo! Início"
                    width={503}
                    height={130}
                />
                <p>{`Após nosso programa criado vamos salvar (Ctrl+s), compilar e rodar. Abra um terminal no VS Code (Ctrl+’)`}</p>
                <ImageCaption
                    src="/images/chapters/2/18_terminal.webp"
                    alt="Olá, Mundo! Salvar"
                    width={503}
                    height={174}
                />
                <p dangerouslySetInnerHTML={{ __html: `Para compilar vamos usar o comando <span class="font-bold">rustc main.rs</span> e para executar <span class="font-bold">.\\main.exe</span>.` }} />
                <ImageCaption
                    src="/images/chapters/2/19_ola_mundo_exe.webp"
                    alt="Olá, Mundo! Compilar"
                    width={503}
                    height={211}
                />
                <p>{`Ao executarmos ele mostra no terminal a string Olá Mundo!.`}</p>
                <p>{`Parabéns, fizemos nosso primeiro programa em Rust.`}</p>
                <h3 id="2.2.1">Estrutura do programa Rust</h3>
                <p>{`Um programa executável Rust vai sempre ser iniciado da seguinte forma.`}</p>
                <ImageCaption
                    src="/images/chapters/2/20_main.webp"
                    alt="rustup-init Tipo de Instalação"
                    width={434}
                    height={47}
                />
                <p>{`No Rust nós temos uma função especial chamada main que sempre será inicializada por padrão em um programa executável, esta é a porta de entrada do nosso programa.`}</p>
                <Tabela id={"2"} />
                <p>{`Uma função em Rust é um procedimento que pode receber parâmetros que são identificados entre o par de parênteses, como padrão neste caso ela não recebe nenhum parâmetro, uma função também pode ter um retorno, neste caso por ser a função main não tem retorno implícito, ela apenas mostra na tela do terminal a string “Olá, Mundo!”.`}</p>
                <h3 id="2.2.2">Corpo da função</h3>
                <p>{`Todo código presente dentro do par de chaves é o corpo da função main, neste caso particular estamos chamando uma macro do Rust, a println!, o ! representa uma macro em Rust, a função desta macro é mostrar na tela a expressão passada como parâmetro, a string “Olá, Mundo!”. Note que para melhorar a clareza do nosso código nós utilizamos um alinhamento composto por 4 espaços antes das expressões que iremos executar dentro do par de chaves de abertura e encerramento, a este alinhamento identificamos como indentação. Cada expressão em Rust deve terminar com um ;.`}</p>
                <h3 id="2.2.3">Arquivos do programa</h3>
                <ImageCaption
                    src="/images/chapters/2/14_arquivos.webp"
                    alt="Arquivos do programa"
                    width={503}
                    height={141}
                />
                <Tabela id={"3"} />
                <p dangerouslySetInnerHTML={{ __html: `Até este ponto, criamos toda estrutura do nosso projeto de forma manual e utilizamos o <span class="font-bold">rustc</span> para compilar nosso programa. Para um projeto simples isto é suficiente mas para projetos mais complexos podemos usar a ferramenta Cargo que vem com o Rust e automatiza grande parte deste processo.` }} />
            
                <h2 id="2.3">Olá Cargo</h2>
                <p>{`Cargo é o gestor de sistemas e pacotes do Rust. Esta ferramenta é utilizada para gerenciar seus projetos Rust, com ela é possível criar seu código, baixar e gerar as bibliotecas de dependência.`}</p>
                <p dangerouslySetInnerHTML={{ __html: `Para criar um novo projeto com o cargo utilize <span class="font-bold">cargo new nome_do_projeto</span>. Por default o cargo new gera um executável cuja opção é  --bin, mas também é possível gerar uma biblioteca com a opção --lib.` }} />
                <ImageCaption
                    src="/images/chapters/2/22_Ola_Cargo.webp"
                    alt="Olá! Cargo"
                    width={685}
                    height={322}
                />
                <p>{`O Cargo criou uma pasta com o nome do projeto informado e dentro desta pasta estão os arquivos do nosso projeto Rust.`}</p>
                <h3 id="2.3.1">Estrutura do projeto Cargo</h3>
                <ImageCaption
                    src="/images/chapters/2/23_vs_estrutura.webp"
                    alt="Estrutura do projeto Cargo"
                    width={501}
                    height={207}
                />
                <Tabela id={"4"} />
                <h3 id="2.3.2">Arquivos fontes</h3>
                <p>{`O Cargo gerou uma pasta para armazenar os programas fontes de nosso projeto, é nesta pasta que vamos criar nossos arquivos .rs, automaticamente ele criou para nós o arquivo main.rs. Esta pasta tem o nome src que significa sources.`}</p>
                <h3 id="2.3.3">Arquivos de distribuição</h3>
                <p>{`Os arquivos de distribuição do projeto vão ser gerados pelo Cargo na pasta target. Quando compilado o projeto o executável vai estar disponível na pasta target\\debug.`}</p>
                <h3 id="2.3.4">Arquivo de configuração</h3>
                <p>{`Existe um arquivo de configuração do projeto que se chama Cargo.toml. Sua estrutura é:`}</p>
                <ImageCaption
                    src="/images/chapters/2/24_cargo.webp"
                    alt="Arquivo de configuração"
                    width={440}
                    height={137}
                />
                <p>{`Na linha 1 temos o identificador [package] que descreve as informações do pacote do nosso projeto como o name, version e edition.`}</p>
                <p>{`Na linha 8 temos o identificador [dependencies] que vai relacionar as bibliotecas de dependências do nosso projeto.`}</p>
                <h3 id="2.3.5">Construindo e executando um projeto cargo</h3>
                <p dangerouslySetInnerHTML={{ __html: `Para construir nosso projeto utilizamos o comando <span class="font-bold">cargo build</span> e para executar utilizamos <span class="font-bold">.\\target\\debug\\ola_cargo.</span>` }} />
                <ImageCaption
                    src="/images/chapters/2/26_cargo_build.webp"
                    alt="Arquivo main"
                    width={503}
                    height={343}
                />
                <h3 id="2.3.6">Executando diretamente</h3>
                <p>{`É possível fazer a compilação e execução ao mesmo tempo utilizando o comando cargo run.`}</p>
                <ImageCaption
                    src="/images/chapters/2/27_cargo_run.webp"
                    alt="Executando diretamente"
                    width={434}
                    height={81}
                />
                <h3 id="2.3.7">Verificando erros de compilação</h3>
                <p>{`Antes de compilar e executar é possível fazer uma checagem por erros se você alterou seu código com o comando cargo check.`}</p>
                <ImageCaption
                    src="/images/chapters/2/28_cargo_check.webp"
                    alt="cargo check"
                    width={434}
                    height={42}
                />
                <p>{`Simulando um erro para o cargo check.`}</p>
                <ImageCaption
                    src="/images/chapters/2/29_cargo_check_erro.webp"
                    alt="Simulando erro"
                    width={452}
                    height={275}
                />
                <h3 id="2.3.8">Construindo o projeto para produção</h3>
                <p dangerouslySetInnerHTML={{ __html: `Após você concluir todo desenvolvimento de seu sistema o cargo possibilita uma forma otimizada de construção do seu projeto para deploy em ambiente de produção, isto é feito passando o parâmetro release, com o comando <span class="font-bold">cargo build –release</span>.` }} />
                <ImageCaption
                    src="/images/chapters/2/30_cargo_build_release.webp"
                    alt="cargo build"
                    width={502}
                    height={360}
                />
                <p>{`Quando o executável é  gerado desta forma ele fica disponível na pasta \\target\\release e não mais na pasta debug, conforme podemos verificar acima.`}</p>
                <p>{`Concluímos aqui a nossa visão geral sobre o utilitário Cargo e como ele simplifica os passos para desenvolvimento, manutenção, compilação e execução do nosso projeto Rust. Nos próximos capítulos vamos adentrar a fundo na linguagem Rust e suas características que a tornam única.`}</p>
            </div>
        </Layout>
    )
}

/*
<span class="font-bold"></span>
<p dangerouslySetInnerHTML={{ __html: `` }} />
<p>{``}</p>
                <ImageCaption
                    src="/images/chapters/2/"
                    alt="rustup-init Tipo de Instalação"
                    width={685}
                    height={284}
                />




/*

/*
                <p>{``}</p>
                <h2 id="2.1"></h2>
                <h3 id="2.1.1"></h3>
                <p>{``}</p>
*/