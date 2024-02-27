import '../estilos/ProjectBanner.css';
import ProjectSingle from './ProjectSingle';
import imagem from '../resources/projeto1portifolio.png'
import imagem2 from '../resources/projeto2portifolio.png'
import imagem3 from '../resources/projeto3portifolio.png'
import React from 'react';

export default function ProjectBanner(){
    return(
        <div id="secaoProjetos" className="projectsBanner">
            <h2>PROJETOS</h2>
            <h3>Clique em algum projeto e verifique a funcionalidade!</h3>
            <div className="centerProject">
                <div className="w50">
                    <a href="" target="_blank"><ProjectSingle 
                        imagemProjeto={imagem2}
                        nomeProjeto="Portifólio pessoal"
                        descricaoProjeto="Descrição: demonstar habilidades, tecnologias e conhecimentos prévios na área de tecnologia."
                        tecnologiasProjeto="Skills: HTML5, CSS3, JavaScript, ReactJS e design responsivo"
                        statusProjeto="https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge"
                    /></a>
                </div>
                <div className="w50">
                    <a href="https://ieqlindeia.000webhostapp.com/" target="_blank"><ProjectSingle 
                        imagemProjeto={imagem}
                        nomeProjeto="WebSite Institucional - Igreja Evangélica"
                        descricaoProjeto="Descrição: promover uma melhor interação com os fiéis aprimorando a divulgação de informações, o contato com a igreja, o acesso às redes sociais e a localização do templo no mapa."
                        tecnologiasProjeto="Skills: HTML5, CSS3, JavaScript, jQuery, e Design Responsivo"
                        statusProjeto="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge"
                    /></a>
                </div>
                <div className="w50">
                    <a href="https://github.com/filipefsf/redecodex" target="_blank"><ProjectSingle 
                        imagemProjeto={imagem3}
                        nomeProjeto="Rede Social Codex"
                        descricaoProjeto="Descrição: simulação de uma rede social voltada para desenvolvedores aos moldes do Instagram e Twitter onde os usuários poderão adicionar amigos, compartilhar imagens, conteúdos no feed e etc."
                        tecnologiasProjeto="Skills: PHP, MySQL, HTML5, CSS3, JavaScript, e Design Responsivo"
                        statusProjeto="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge"
                    /></a>
                </div>
            </div>
        </div>
    );
}