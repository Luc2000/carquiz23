import React from 'react';
import { useRouter } from 'next/router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Button from '../../src/components/Button';
import Widget from '../../src/components/Widget';

export default function Gif() {
    const router = useRouter();
    const [name, setName] = React.useState('');
  
    return(
        <Widget.Content>
            <div className="gif">
                <h2>Usuário: Abdalla Ali Jasem</h2>
                <p>IP: 201.178.165.22</p>
                <div className="dados">
                    <p>Tentando capturar dados bancários...</p>
                    <p className="line-1 anim-typewriter">Banco do Brasil S.A</p>
                    <p className="line-1 anim-typewriter2">Agência 7070</p>
                    <p className="line-1 anim-typewriter3">Conta 5952-8</p>
                    <p className="line-1 anim-typewriter4">Escaneamento pausado. Motivo:</p>
                    <p className="line-1 anim-typewriter5">Usuário é boilas, <a href="https://www.xvideos.com/gay" target="_blank">Saiba mais.</a></p>
                </div>
                
                <div className="bemdepois">
                    <img src='http://25.media.tumblr.com/ae106b293fca45a20900d41b3e6aeee8/tumblr_mk66vwUpoy1qleyp9o1_400.gif' alt="terrorista" />
                    <form onSubmit={function info(infosEvento) {
                        infosEvento.preventDefault();
                        router.push(`quiz?abud`)
                    }}>
                        <Button type="submit">
                            {`Quero ir pro Quiz vsf`}
                        </Button>
                    </form>
                </div>
            </div>
        </Widget.Content>
    );
}

