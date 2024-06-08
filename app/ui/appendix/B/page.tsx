import Layout from "@/app/components/templates/Layout";
import Tabela from "../../Tabela";

export default function ChB() {
    return (
        <Layout previousChapter={"/ui/appendix/A"} nextChapter={null}>
            <div className="ml-4 mr-4">
                <h1 id="A1">Apêndice A: Operadores</h1>
                <h3 id="A3">Operadores</h3>
                <Tabela id={"1002"} />
            </div>
        </Layout>
    )
}