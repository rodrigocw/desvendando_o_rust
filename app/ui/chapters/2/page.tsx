"use client"

import ImageCaption from "../../ImageCaption";
import Layout from "../../Layout";

export default function Ch2() {
    return (
        <Layout>
            <div className="ml-4 mr-4">
                <h1 id="1">Começando</h1>
                <h2 id="2.1">Instalação</h2>
                <h3 id="2.1.1">Windows</h3>
                <p>{`Para instalar o Rust é recomendado utilizar a ferramenta rustup que pode ser encontrada abaixo.`}</p>
                <table className="border border-collapse mt-2 mb-2">
                    <thead>
                        <tr className="text-[14px]">
                            <th className="border px-4 py-2">Windows 32</th>
                            <th className="border px-4 py-2">Windows 64</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-[14px]">
                            <td className="border px-4 py-2 text-center"><a href="https://static.rust-lang.org/rustup/dist/i686-pc-windows-msvc/rustup-init.exe" target="_blank" className="underline text-blue-500">Download</a></td>
                            <td className="border px-4 py-2 text-center"><a href="https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe" target="_blank" className="underline text-blue-500">Download</a></td>
                        </tr>
                    </tbody>
                </table>
                <p>{`Execute o programa relacionado a sua versão do Windows. Neste momento ele vai verificar se o C++ está instalado em seu sistema, se não estiver, ele vai solicitar a instalação do Visual Studio conforme tela abaixo.`}</p>
                <ImageCaption
                    src="/images/chapters/2/1_rustup-init.exe.webp"
                    alt="rustup-init"
                    width={685}
                    height={284}
                />
                <p>{`Neste caso pode ser informada a opção 1. Ele vai baixar o instalador do Visual Studio e executá-lo. Neste caso clique em Sim na janela do instalador.`}</p>
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
                <p>{`Para compilar vamos usar o comando rustc main.rs e para executar .\main.exe.`}</p>
                <ImageCaption
                    src="/images/chapters/2/19_ola_mundo_exe.webp"
                    alt="Olá, Mundo! Compilar"
                    width={503}
                    height={211}
                />
                <p>{`Ao executarmos ele mostra no terminal a string Olá Mundo!.`}</p>
                <p>{`Parabéns, fizemos nosso primeiro programa em Rust.`}</p>
                <h3 id="2.2.1">Estrutura do programa Rust</h3>

                <h3 id="2.2.2">Corpo da função</h3>

                <h3 id="2.2.3">Arquivos do programa</h3>
                <ImageCaption
                    src="/images/chapters/2/14_arquivos.webp"
                    alt="Arquivos do programa"
                    width={503}
                    height={141}
                />

                <table className="table-auto border-collapse mt-4 mb-4">
                    <thead>
                        <tr className="text-[14px]">
                            <th className="border px-4 py-2">Arquivo</th>
                            <th className="border px-4 py-2">Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-[14px]">
                            <td className="border px-4 py-2">main.rs</td>
                            <td className="border px-4 py-2">Arquivo fonte do Rust</td>
                        </tr>
                        <tr className="text-[14px]">
                            <td className="border px-4 py-2">main.pdb</td>
                            <td className="border px-4 py-2">Arquivo gerado pelo compilador que contém informações para depuração</td>
                        </tr>
                        <tr className="text-[14px]">
                            <td className="border px-4 py-2">main.exe</td>
                            <td className="border px-4 py-2">Arquivo executável que pode ser executado pelo sistema operacional</td>
                        </tr>
                    </tbody>
                </table>
                <p dangerouslySetInnerHTML={{ __html: `Até este ponto, criamos toda estrutura do nosso projeto de forma manual e utilizamos o <span class="font-bold">rustc</span> para compilar nosso programa. Para um projeto simples isto é suficiente mas para projetos mais complexos podemos usar a ferramenta Cargo que vem com o Rust e automatiza grande parte deste processo.` }} />
            </div>
        </Layout>
    )
}

/*

<p>{``}</p>
                <ImageCaption
                    src="/images/chapters/2/"
                    alt="rustup-init Tipo de Instalação"
                    width={685}
                    height={284}
                />

14_arquivos.webp


21_arquivos.webp
22_Ola_Cargo.webp
23_vs_estrutura.webp
24_cargo.webp
25_cargo.toml.webp
26_cargo_build.webp
27_cargo_run.webp
28_cargo_check.webp
29_cargo_check_erro.webp
30_cargo_build_release.webp
/*

/*
                <p>{``}</p>
                <h2 id="2.1"></h2>
                <h3 id="2.1.1"></h3>
                <p>{``}</p>
*/