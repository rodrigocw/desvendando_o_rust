"use client"

import { TableColumnClass, TableDataClass, tabelas } from "./data/livro"
import useWindowWidth from "../components/useWindowWidth";

interface TabelaProps {
    id: string
}

export default function Tabela(props: TabelaProps) {

    const windowWidth = useWindowWidth();

    const tabela = tabelas.tabelas.find( (id) => id.id === props.id )
    const data: TableDataClass[] = tabela?.data as TableDataClass[]
    const columns: TableColumnClass[] = tabela?.columns as TableColumnClass[]

    return (
        <table className={tabela?.classTable}>
          <thead>
            <tr className={windowWidth < 1024 ? tabela?.fontSizesm : tabela?.fontSize}>
              {columns.map((column, index) => (
                <th key={index} className={tabela?.classColumn}>{column.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={windowWidth < 1024 ? tabela?.fontSizesm : tabela?.fontSize}>
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex} className={tabela?.classColumn}>
                    <div className="post-excerpt" dangerouslySetInnerHTML={{ __html: row[column.accessor]}} ></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
}
/* 

*/