interface TableColumn {
    header: string; // Nome do cabeçalho da coluna
    accessor: string; // Nome da propriedade do objeto para acessar o valor da coluna
  }
  
  interface TableData {
    [key: string]: any; // Permite que os objetos tenham propriedades arbitrárias
  }

export default function Tabelas({ data, columns }: {
    data: TableData[]; 
    columns: TableColumn[]; 
  }) {
    return (
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex}>{row[column.accessor]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
}