import '../estilos/ProjectBanner.css';
import ProjectSingle from './ProjectSingle';
import imagem from '../resources/projeto1portifolio.png'
import imagem2 from '../resources/projeto2portifolio.png'

export default function ProjectBanner(){
    return(
        <div id="secaoProjetos" className="projectsBanner">
            <h2>PROJETOS</h2>
            <div className="centerProject">
                <div className="w50">
                    <a href="" target="_blank"><ProjectSingle 
                        imagemProjeto={imagem2}
                        nomeProjeto="Portifólio pessoal"
                        descricaoProjeto="Descrição: demonstar habilidades, tecnologias e conhecimentos prévios na área de tecnologia."
                        tecnologiasProjeto="Skills: HTML5, CSS3, JavaScript, ReactJS e design responsivo"
                    /></a>
                </div>
                <div className="w50">
                    <a href="https://ieqlindeia.000webhostapp.com/" target="_blank"><ProjectSingle 
                        imagemProjeto={imagem}
                        nomeProjeto="WebSite Institucional - Igreja Evangélica"
                        descricaoProjeto="Descrição: promover uma melhor interação com os fiéis aprimorando a divulgação de informações, o contato com a igreja, o acesso às redes sociais e a localização do templo no mapa."
                        tecnologiasProjeto="Skills: HTML5, CSS3, JavaScript, jQuery, e Design Responsivo"
                    /></a>
                </div>
            </div>
        </div>
    );
}