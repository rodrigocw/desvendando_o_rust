import Layout from "../../Layout";

export default function Ch1() {
    return (
        <Layout>
            <div className="ml-4 mr-4">
                <h1 id="1">O que é a linguagem Rust</h1>
                <p>{`Segundo Nicholas Matsakis e Aaron Turon, com a linguagem Rust é possível programar em uma variedade de domínios de forma simples e segura, em baixo nível, fornecendo gerenciamento de memória, representação de dados e concorrência. Rust fornece ferramentas amigáveis que ajudam ao longo do caminho, sem correr riscos de erros ou brechas de segurança, te guiando naturalmente em direção de um código que é eficiente em termos de velocidade e uso de memória. É uma linguagem expressiva e ergonômica que possibilita a criação de aplicações de linha de comando (CLIS), servidores web e demais códigos prazerosos de serem escritos. Trabalhando em Rust você adquire habilidades transferíveis de um domínio para outro desde a criação de programas do lado do servidor evoluindo para servidores web até endereçar seu Raspberry PI.`}</p>
                <h2 id="1.1">Por que Rust?</h2>
                <h3 id="1.1.1">Desempenho</h3>
                <p>{`Rust é extremamente rápido e gerencia memória eficientemente: sem runtime ou garbage collector, podendo potencializar a performance de serviços críticos, rodar em sistemas embarcados, e facilmente integrar-se a outras linguagens.`}</p>
                <h3 id="1.1.2">Confiabilidade</h3>
                <p>{`O rico sistema de tipos de Rust e seu modelo de ownership garantem segurança de memória e segurança de concorrência e permite que você elimine muitas categorias de erros durante a compilação.`}</p>
                <h3 id="1.1.3">Produtividade</h3>
                <p>{`Rust possui uma ótima documentação, um compilador amigável com mensagens de erros úteis, e ferramental de primeira qualidade, uma ferramenta integrada de compilação e gerenciamento de pacotes, suporte inteligente para múltiplos editores com autocomplete e inspeções de tipos, um formatador automático, e muito mais.`}</p>
                <h2 id="1.2">Construindo com Rust</h2>
                <h3 id="1.2.1">Linha de Comando</h3>
                <p>{`Monte uma ferramenta de linha de comando rapidamente com o ecossistema robusto de Rust. Rust te ajuda a manter sua aplicação com confiança e a distribuí-la com facilidade.`}</p>
                <h3 id="1.2.2">WebAssembly</h3>
                <p>{`Use Rust para tornar seu JavaScript mais poderoso, um módulo por vez. Publique no npm, empacote com webpack, e você está pronto.`}</p>
                <h3 id="1.2.3">Redes</h3>
                <p>{`Desempenho previsível. Pouco uso de recursos. Alta confiabilidade. Rust é ótimo para serviços de rede.`}</p>
                <h3 id="1.2.4">Embarcados</h3>
                <p>{`Planejando usar aparelhos com poucos recursos? Precisa de controle de baixo nível sem desistir de conveniências de alto nível? Rust tem a solução.`}</p>
                <h2 id="1.3">Características</h2>
                <p>{`Rust é uma linguagem de programação moderna, multiparadigma compilada. Foi inicialmente desenvolvida pela Mozilla Research e criada por Graydon Hoare, lançada em 2010 e atualmente mantida pela Equipe do Rust.`}</p>
                <p>{`A linguagem Rust, assim como o C e C++ é uma linguagem compilada, isto permite que um binário executável .exe seja gerado pelo compilador, possibilitando que o sistema operacional execute este programa diretamente sem necessitar de um interpretador como as linguagens dinâmicas, por exemplo Python, JavaScript, Java, etc.`}</p>
            </div>
        </Layout>
    )
}

/*

                <h2 id=""></h2>
                <p>{``}</p>

                <h3 id=""></h3>
                <p>{``}</p>
            
*/