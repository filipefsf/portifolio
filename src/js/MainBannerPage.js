import '../estilos/MainBannerPage.css';
import Icones from './Icones';
import CopiarClipBoard from './useCopiarClipBoard';
import useCopiarClipBoard from './useCopiarClipBoard';
import TypingTextAnimation from 'react-typing-text-animation'
import FadeIn from 'react-fade-in';
import React, { useState } from 'react';

export default function MainBannerPage(){
    const { copied, copyToClipboard } = useCopiarClipBoard(); 

    const handleCopyToClipboard = (text) => {
        copyToClipboard(text);
    };
    return(
        <div id="secaoInicio" className="mainBanner">
            <div className="presentation">
                <h2><TypingTextAnimation delay={50} text='Olá, meu nome é Filipe e eu sou um...' /></h2>
            </div>
            <div className="mainTitle">
                <div className="tituloAEicones">
                    <div className="tituloA">
                        <FadeIn delay={1900} transitionDuration={1000}><h1>REACT</h1></FadeIn>
                    </div>
                    <div className="icones">
                        <Icones />
                    </div>
                </div>
                <div className="tituloB">
                    <FadeIn delay={2500} transitionDuration={1000}><h1>DEVELOPER</h1></FadeIn>
                </div>
                <FadeIn delay={6000}transitionDuration={1000}>
                    <div className="emailEParagrafoFinal">
                        <div className="paragrafoFinal w50">
                            <p><strong>"O QUE VOCÊ FARIA DE GRAÇA, SE POSSÍVEL?"</strong> Um dia ouvi essa pergunta e me fez
                            refletir o quanto a prática da programação é algo pelo que me atraio, não apenas para fins profissionais,
                            mas também por hobbie.</p><br></br>
                            <p> Meu nome é Filipe Santos Fernandes, tenho 24 anos e, como desenvolvedor web, sou apaixonado por criar experiências 
                                digitais interativas e dinâmicas. </p><br></br>
                            <p>Meu foco está em desenvolver sistemas responsivos e elegantes que oferecem uma 
                                experiência de usuário agradável e atrativa. Da concepção à implementação, estou comprometido em transformar ideias em 
                                realidade digital de forma eficiente e eficaz.</p>
                                
                            </div>
                        <div className="formularioEmail w50">
                            <h3>Fique à vontade para me enviar um email:</h3>
                            <button
                                className={`campoEmail ${copied ? 'copied-success' : ''}`}
                                onClick={() => handleCopyToClipboard('sfilipe41@outlook.com')}
                                disabled={copied} >{copied ? 'Email copiado com sucesso!' : 'Copiar email para área de transferência'}
                            </button>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}