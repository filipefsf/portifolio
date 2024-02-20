import '../estilos/Icones.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import FadeIn from 'react-fade-in';
import curriculo from '../resources/curriculopessoal.pdf';

export default function Icones(){
    return(
        <div className="iconesContato">
            <div className="iconeGitHub iconeUnico">
                <FadeIn delay="3500" transitionDuration="300">
                    <a className="linkGitHub" href="https://github.com/filipefsf" target="_blank"><FaGithub /></a>
                </FadeIn>
            </div>
            <div className="iconeLinkedIn iconeUnico">
                <FadeIn delay="4400" transitionDuration="300">
                    <a className="linkLinkedIn" href="https://www.linkedin.com/in/filipe-fernandes-2b4683209/" target="_blank"><FaLinkedin /></a>
                </FadeIn>
            </div>
            <div className="iconeCurriculum iconeUnico">
                <FadeIn delay="5300" transitionDuration="300">
                    <a className="linkCurriculum"
                        href={curriculo} 
                        download="Curriculo - Filipe Fernandes"
                        target="_blank"
                        rel="noreferrer"
                        ><GrDocumentPdf /></a>
                </FadeIn>
            </div>
    </div>
    );
}