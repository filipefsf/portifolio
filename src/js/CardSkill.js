import '../estilos/CardSkill.css';
import React from 'react';

export default function CardSkill(props){
    const habilidade = props.habilidade;
    const icone = props.icone;
    const descricao = props.descricao;
    return(
        <div className="card">
            <h3>{icone}</h3>
            <p>{descricao}</p>
        </div>
    );
}