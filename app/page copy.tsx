import Image from "next/image";
import { Lato, Open_Sans, Source_Sans_3 } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: "400" });
const open = Open_Sans({ subsets: ["latin"], weight: "400" });
const sans = Source_Sans_3({ subsets: ["latin"], weight: "400" });

/* import { Lato, Roboto, Open_Sans, Source_Sans_3 } from "next/font/google"; */

export default function Home() {
  const h1 = "text-[26px] mb-2"
  const h2 = "text-[24px] mt-2 mb-2"
  const h3 = "text-[22px] mt-2 mb-2"
  const h4 = "text-[20px] mt-2 mb-2"
  const p = "indent-8 text-[12px]"
  return (
    <div>

    {/* Roboto */}
    <div>
      <h1 className={h1}>
        O que é a linguagem Rust
      </h1>
      <p className={p}>
        Segundo Nicholas Matsakis e Aaron Turon, com a linguagem Rust é possível programar em uma variedade de domínios que possa de forma simples e segura programar em baixo nível, fornecendo gerenciamento de memória, representação de dados e concorrência. Rust fornece ferramentas amigáveis que ajudam ao longo do caminho, sem correr riscos de erros ou brechas de segurança, te guiando naturalmente em direção de um código que é eficiente em termos de velocidade e uso de memória. É uma linguagem expressiva e ergonômica que possibilita a criação de aplicações de linha de comando (CLIS), servidores web e demais códigos prazerosos de serem escritos. Trabalhando em Rust você adquire habilidades transferíveis de um domínio para outro desde a criação de programas do lado do servidor evoluindo para servidores web até endereçar seu Raspberry PI.
      </p>
      <h2 className={h2}>
        Por que Rust?
      </h2>

      <p className={p}>
        Rust possui uma ótima documentação, um compilador amigável com mensagens de erros úteis, e ferramental de primeira qualidade uma ferramenta integrada de compilação e gerenciamento de pacotes, suporte inteligente para múltiplos editores com autocompleção e inspeções de tipos, um formatador automático, e muito mais.
      </p>

      <h3 className={h3}>
        Desempenho
      </h3>
      <p className={p}>
        Rust é extremamente rápido e gerencia memória eficientemente: sem runtime ou garbage collector, podendo potencializar a performance de serviços críticos, rodar em sistemas embarcados, e facilmente integrar-se a outras linguagens.
      </p>

      <h4 className={h4}>
        Confiabilidade
      </h4>

      <p className={p}>
	      O rico sistema de tipos de Rust e seu modelo de ownership garantem segurança de memória e segurança de concorrência e permite que você elimine muitas categorias de erros durante a compilação.
      </p>

    </div>

    {/* Sans */}
    <div className={sans.className}>
      <h1 className={h1}>
        O que é a linguagem Rust
      </h1>
      <p className={p}>
        Segundo Nicholas Matsakis e Aaron Turon, com a linguagem Rust é possível programar em uma variedade de domínios que possa de forma simples e segura programar em baixo nível, fornecendo gerenciamento de memória, representação de dados e concorrência. Rust fornece ferramentas amigáveis que ajudam ao longo do caminho, sem correr riscos de erros ou brechas de segurança, te guiando naturalmente em direção de um código que é eficiente em termos de velocidade e uso de memória. É uma linguagem expressiva e ergonômica que possibilita a criação de aplicações de linha de comando (CLIS), servidores web e demais códigos prazerosos de serem escritos. Trabalhando em Rust você adquire habilidades transferíveis de um domínio para outro desde a criação de programas do lado do servidor evoluindo para servidores web até endereçar seu Raspberry PI.
      </p>
      <h2 className={h2}>
        Por que Rust?
      </h2>

      <p className={p}>
        Rust possui uma ótima documentação, um compilador amigável com mensagens de erros úteis, e ferramental de primeira qualidade uma ferramenta integrada de compilação e gerenciamento de pacotes, suporte inteligente para múltiplos editores com autocompleção e inspeções de tipos, um formatador automático, e muito mais.
      </p>

      <h3 className={h3}>
        Desempenho
      </h3>
      <p className={p}>
        Rust é extremamente rápido e gerencia memória eficientemente: sem runtime ou garbage collector, podendo potencializar a performance de serviços críticos, rodar em sistemas embarcados, e facilmente integrar-se a outras linguagens.
      </p>

      <h4 className={h4}>
        Confiabilidade
      </h4>

      <p className={p}>
	      O rico sistema de tipos de Rust e seu modelo de ownership garantem segurança de memória e segurança de concorrência e permite que você elimine muitas categorias de erros durante a compilação.
      </p>

    </div>

    {/* Lato */}
    <div className={lato.className}>
      <h1 className={h1}>
        O que é a linguagem Rust
      </h1>
      <p className={p}>
        Segundo Nicholas Matsakis e Aaron Turon, com a linguagem Rust é possível programar em uma variedade de domínios que possa de forma simples e segura programar em baixo nível, fornecendo gerenciamento de memória, representação de dados e concorrência. Rust fornece ferramentas amigáveis que ajudam ao longo do caminho, sem correr riscos de erros ou brechas de segurança, te guiando naturalmente em direção de um código que é eficiente em termos de velocidade e uso de memória. É uma linguagem expressiva e ergonômica que possibilita a criação de aplicações de linha de comando (CLIS), servidores web e demais códigos prazerosos de serem escritos. Trabalhando em Rust você adquire habilidades transferíveis de um domínio para outro desde a criação de programas do lado do servidor evoluindo para servidores web até endereçar seu Raspberry PI.
      </p>
      <h2 className={h2}>
        Por que Rust?
      </h2>

      <p className={p}>
        Rust possui uma ótima documentação, um compilador amigável com mensagens de erros úteis, e ferramental de primeira qualidade uma ferramenta integrada de compilação e gerenciamento de pacotes, suporte inteligente para múltiplos editores com autocompleção e inspeções de tipos, um formatador automático, e muito mais.
      </p>

      <h3 className={h3}>
        Desempenho
      </h3>
      <p className={p}>
        Rust é extremamente rápido e gerencia memória eficientemente: sem runtime ou garbage collector, podendo potencializar a performance de serviços críticos, rodar em sistemas embarcados, e facilmente integrar-se a outras linguagens.
      </p>

      <h4 className={h4}>
        Confiabilidade
      </h4>

      <p className={p}>
	      O rico sistema de tipos de Rust e seu modelo de ownership garantem segurança de memória e segurança de concorrência e permite que você elimine muitas categorias de erros durante a compilação.
      </p>

    </div>

    {/* Open */}
    <div className={open.className}>
      <h1 className={h1}>
        O que é a linguagem Rust
      </h1>
      <p className={p}>
        Segundo Nicholas Matsakis e Aaron Turon, com a linguagem Rust é possível programar em uma variedade de domínios que possa de forma simples e segura programar em baixo nível, fornecendo gerenciamento de memória, representação de dados e concorrência. Rust fornece ferramentas amigáveis que ajudam ao longo do caminho, sem correr riscos de erros ou brechas de segurança, te guiando naturalmente em direção de um código que é eficiente em termos de velocidade e uso de memória. É uma linguagem expressiva e ergonômica que possibilita a criação de aplicações de linha de comando (CLIS), servidores web e demais códigos prazerosos de serem escritos. Trabalhando em Rust você adquire habilidades transferíveis de um domínio para outro desde a criação de programas do lado do servidor evoluindo para servidores web até endereçar seu Raspberry PI.
      </p>
      <h2 className={h2}>
        Por que Rust?
      </h2>

      <p className={p}>
        Rust possui uma ótima documentação, um compilador amigável com mensagens de erros úteis, e ferramental de primeira qualidade uma ferramenta integrada de compilação e gerenciamento de pacotes, suporte inteligente para múltiplos editores com autocompleção e inspeções de tipos, um formatador automático, e muito mais.
      </p>

      <h3 className={h3}>
        Desempenho
      </h3>
      <p className={p}>
        Rust é extremamente rápido e gerencia memória eficientemente: sem runtime ou garbage collector, podendo potencializar a performance de serviços críticos, rodar em sistemas embarcados, e facilmente integrar-se a outras linguagens.
      </p>

      <h4 className={h4}>
        Confiabilidade
      </h4>

      <p className={p}>
	      O rico sistema de tipos de Rust e seu modelo de ownership garantem segurança de memória e segurança de concorrência e permite que você elimine muitas categorias de erros durante a compilação.
      </p>

    </div>

    </div>
  );
}
