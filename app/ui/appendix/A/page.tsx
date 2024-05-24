import Layout from "../../Layout";
import Tabela from "../../Tabela";

export default function ChA() {
    return (
        <Layout>
            <div className="ml-4 mr-4">
                <h1 id="A1">Apêndice A: Palavras Chave</h1>
                <h3 id="A3">Palavras chave atualmente em uso</h3>
                <Tabela id={"1000"} />
                <h3 id="A3">Palavras chave reservadas para uso futuro</h3>
                <Tabela id={"1001"} />
            </div>
        </Layout>
    )
}