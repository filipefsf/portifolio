import '../estilos/ProjectSingle.css';
import React from 'react';

export default function ProjectSingle(props){
    const nomeProjeto = props.nomeProjeto;
    const imagemProjeto = props.imagemProjeto;
    const descricaoProjeto = props.descricaoProjeto;
    const tecnologiasProjeto = props.tecnologiasProjeto;
    const statusProjeto = props.statusProjeto;
    return(
        <div className="project">
            <h3>{nomeProjeto}</h3>
            <img src={imagemProjeto}></img>
            <h4 classname="desc">{descricaoProjeto}</h4>
            <p>{tecnologiasProjeto}</p>
            <img loading="lazy" src={statusProjeto} style={{ width: '200px' }}></img>
        </div>
    );
}