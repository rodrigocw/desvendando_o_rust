import { rust } from "./data/livro";

function classNivel(nivel: number) {
    return 'ml-' + ((nivel - 1) * 4)
}

const livro = rust

export default function Menu() {
    return (
        <div className="ml-2 mt-2">
            <ul>
                {livro.struts.map((item,num) => (
                    <li key={num} className={'ml-' + ((item.nivel - 1) * 4)}>
                        {item.item}
                    </li>
                ))}
            </ul>
        </div>
    )
}