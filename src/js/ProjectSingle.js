import '../estilos/ProjectSingle.css';

export default function ProjectSingle(props){
    const nomeProjeto = props.nomeProjeto;
    const imagemProjeto = props.imagemProjeto;
    const descricaoProjeto = props.descricaoProjeto;
    const tecnologiasProjeto = props.tecnologiasProjeto;
    return(
        <div className="project">
            <h3>{nomeProjeto}</h3>
            <img src={imagemProjeto}></img>
            <h4 classname="desc">{descricaoProjeto}</h4>
            <p>{tecnologiasProjeto}</p>

        </div>
    );
}