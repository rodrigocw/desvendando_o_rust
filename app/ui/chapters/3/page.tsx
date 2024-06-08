import Layout from "@/app/components/templates/Layout";
import ImageCaption from "../../ImageCaption";


export default function Ch3() {
    return (
        <Layout previousChapter={"/ui/chapters/2"} nextChapter={"/ui/chapters/4"}>
            <div className="ml-4 mr-4">
                <h1 id="3">Conceitos do Rust</h1>
                <h3 id="3.1.1">Meticulosamente sendo formatado...</h3>
                <ImageCaption
                    src="/images/K8zW.gif"
                    alt="Conceitos do Rust"
                    width={500}
                    height={225}
                />
            </div>
        </Layout>
    )
}