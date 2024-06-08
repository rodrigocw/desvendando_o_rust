"use client"

import Link from "next/link";
import { rust } from "../../ui/data/livro"; 

const Sumario = () => {
  return (
    <div className="ml-2 mr-2">
      <ul>
        {renderSumario(rust.struts)}
      </ul>
    </div>
  );
};

const renderSumario = (items: any[]) => {
  return items.map((item: any, index: number) => {
    const marginLeftClass = getMarginLeftClass(item.nivel);
    const itemText = getItem(item);
    const href = item.url;

    return (
      <li key={index} className={`${marginLeftClass}`}>
        <Link href={href} className="hover:underline">
          {itemText}
        </Link>
      </li>
    );
  });
};

const getMarginLeftClass = (nivel: number) => {
    const classe = "ml-" + (nivel-1) * 2; // Corrigido para interpolação de strings
    return classe;
  };
  
  const getItem = (obj: any) => {
    let item = obj.item;
    if (obj.nivel < 3) {
      item = obj.id + ' ' + item;
    }
    return item;
  };

export default Sumario;