import Layout from "@/app/components/templates/Layout";
import ImageCaption from "../../ImageCaption";

export default function Next() {
    return (
        <Layout previousChapter={"/ui/chapters/4"} nextChapter={"/ui/appendix"}>
            <div className="ml-4 mr-4">
                <h1 id="99">* Próximos Capítulos *</h1>
                <h3 id="99.1.1">Carinhosamente sendo concebidos...</h3>
                <ImageCaption
                    src="/images/inspiracao.gif"
                    alt="Conceitos do Rust"
                    width={346}
                    height={257}
                />
            </div>
        </Layout>
    )
}