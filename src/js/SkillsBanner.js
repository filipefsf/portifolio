import '../estilos/SkillsBanner.css';
import CardSkill from './CardSkill';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiArduino } from "react-icons/si";

export default function SkillsBanner(){
    return(
        <div id="secaoSkills" className="bannerSkills">
            <h2>SKILLS / HABILIDADES</h2>
            <div className="centerSkill">
                <div className="w33">
                    <CardSkill 
                        icone={<FaHtml5 />} 
                        descricao="Adquiri experiência com marcações HTML organizadas realizando projetos práticos usando o que de melhor há no HTML5."
                    />
                </div>
                <div className="w33">
                    <CardSkill 
                        icone={<FaCss3Alt />} 
                        descricao="Possuo habilidades em estilizações de conteúdo com as ferramentas do CSS3 utilizando, inclusive, boas práticas de boot para facilitar o processo de estilização e responsividade."
                    />
                </div>
                <div className="w33">
                    <CardSkill 
                        icone={<IoLogoJavascript />} 
                        descricao="Criação de páginas interativas com os recursos da linguagem JavaScript além de suas bibliotecas como jQuery e React."
                    />
                </div>
                <div className="w33">
                    <CardSkill 
                        icone={<FaReact />} 
                        descricao="Possuo habilidades com um dos frameworks mais conhecidos do momento. Este portifólio, inclusive, foi construído usando uma das bibliotecas mais poderosas da atualidade: o React."
                    />
                </div>
                <div className="w33">
                    <CardSkill 
                        icone={<BiLogoPhp />} 
                        descricao="Tenho experiência com manipulação de URL's, programação orientada a objetos e integração com banco de dados utilizando uma das principais linguagens de programação para back-end."
                    />
                </div>
                <div className="w33">
                    <CardSkill 
                        icone={<SiMysql />} 
                        descricao="Possuo noção de modelos relacionais, conhecimento de comandos SQL como SELECT, INSERT, DELETE, UPDATE, INNER JOIN, LEFT JOIN e etc para manipulação de banco de dados."
                    />
                </div>
                <div className="w33">
                    <CardSkill 
                        habilidade ="Python" 
                        icone={<FaPython />} 
                        descricao="Possuo conhecimentos básicos em linguagem Python realizando alguns projetos acadêmicos."
                    />
                </div>
                <div className="w33">
                    <CardSkill 
                        icone={<TbBrandCpp />} 
                        descricao="Possuo vasto conhecimento em C++. Com esta linguagem recebi uma sólida base de conceitos como: estrutura de dados, algoritmos, orientação a objetos, análise de complexidade, herança, polimorfismos, interface, documentação (para fins acadêmicos)"
                    />
                </div>
                <div className="w33">
                    <CardSkill 
                        icone={<SiArduino />} 
                        descricao="Possuo conhecimento em programação focada em sistemas embarcados para construção de projetos em formato IoT possuindo noção tanto de Arduino quanto de MSP's."
                    />
                </div>
                <div className="w33"></div>
                <div className="w33"></div>
            </div>
        </div>
    );
}