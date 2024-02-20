import '../estilos/Icones.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import curriculo from '../resources/curriculopessoal.pdf';
import React, { useState, useEffect } from 'react';

export default function Icones(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 4600);
  
      return () => clearTimeout(timeout);
    }, []);

    return(
        <div className="iconesContato">
             <div className={`fade-in-bottom ${isVisible ? 'active' : ''} iconeGitHub iconeUnico`}>
                <a className="linkGitHub" href="https://github.com/filipefsf" target="_blank"><FaGithub /></a>
            </div>
            <div className={`fade-in-bottom ${isVisible ? 'active' : ''} iconeLinkedIn iconeUnico`}>
                <a className="linkLinkedIn" href="https://www.linkedin.com/in/filipe-fernandes-2b4683209/" target="_blank"><FaLinkedin /></a>
            </div>
            <div className={`fade-in-bottom ${isVisible ? 'active' : ''} iconeCurriculum iconeUnico`}>
                <a className="linkCurriculum"
                    href={curriculo} 
                    download="Curriculo - Filipe Fernandes"
                    target="_blank"
                    rel="noreferrer"
                ><GrDocumentPdf /></a>
            </div>
        </div>
    );
}