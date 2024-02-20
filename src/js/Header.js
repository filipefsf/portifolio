import '../estilos/Header.css';
import { SiCodeship } from "react-icons/si";
import { TiThMenu } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import React, { useState } from 'react';
import curriculo from '../resources/curriculopessoal.pdf';


export default function Header(){
    const [menuVisivel, setMenuVisivel] = useState(false);

    const toggleMenuMobile = () => {
        setMenuVisivel(!menuVisivel); // Inverte o estado de visibilidade do menu
      };

    const rolarParaInicio = () => {
        document.getElementById("secaoInicio").scrollIntoView({ behavior: "smooth" });
    }

    const rolarParaSkills = () => {
        document.getElementById("secaoSkills").scrollIntoView({ behavior: "smooth" });
    }

    const rolarParaProjetos = () => {
        document.getElementById("secaoProjetos").scrollIntoView({ behavior: "smooth" });
    }

    return(
        <div className="header">
            <div className="headerLeft">
                <div className="iconeInicio">
                    <a onClick={rolarParaInicio}><SiCodeship/></a>
                </div>

                <div className="nomeInicio">
                    <a onClick={rolarParaInicio}>Filipe Fernandes</a>
                </div>
            </div>
            <div className="headerRight">
                <a onClick={rolarParaInicio}>Início</a>
                <a onClick={rolarParaSkills}>Habilidades</a>
                <a onClick={rolarParaProjetos}>Projetos</a>
            </div>

        <div className="headerRightMobile">
            <div className="botaoCurriculo iconeResponsivo">
            <a className="linkCurriculum"
                href={curriculo} 
                download="Curriculo - Filipe Fernandes"
                target="_blank"
                rel="noreferrer"
                ><GrDocumentPdf />
            </a>
            </div>
            <div className="botaoGitHub iconeResponsivo w25">
                <a className="linkGitHub" href="https://github.com/filipefsf" target="_blank"><FaGithub /></a>
            </div>
            <div className="botaoLinkedIn iconeResponsivo w25">
                <a className="linkLinkedIn" href="https://www.linkedin.com/in/filipe-fernandes-2b4683209/" target="_blank"><FaLinkedin /></a>
            </div>
            <div onClick={toggleMenuMobile} className="botaoMobile iconeResponsivo w25">
                <TiThMenu />
            </div>
            {menuVisivel && (
                <div className="menuMobile">
                    <a onClick={rolarParaInicio}>Início</a>
                    <a onClick={rolarParaSkills}>Habilidades</a>
                    <a onClick={rolarParaProjetos}>Projetos</a>
                </div>
            )}
        </div>

      </div>
    );
}