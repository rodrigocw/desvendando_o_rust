import Layout from "@/app/components/templates/Layout";
import ImageCaption from "../../ImageCaption";

export default function Ch4() {
    return (
        <Layout previousChapter={"/ui/chapters/3"} nextChapter={"/ui/chapters/next"}>
            <div className="ml-4 mr-4">
                <h1 id="4">Ownership</h1>
                <h3 id="4.1.1">Meticulosamente sendo formatado...</h3>
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