import Layout from "@/app/components/templates/Layout";

export default function Appendix() {

    return (
        <Layout previousChapter={"/ui/chapters/next"} nextChapter={"/ui/appendix/A"}>
            <div className="ml-4 mr-4">
                <h1 id="100">Apêndices</h1>
                <p>{`As seções a seguir contêm material de referência que você pode achar útil em sua jornada no Rust.`}</p>
            </div>
        </Layout>
    )
}