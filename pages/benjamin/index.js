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
                <h2>Não largue o quiz no meio para transar, Por favor</h2>
                <img src='https://i.makeagif.com/media/10-09-2015/Ges5kN.gif' alt="dog transando" />
                <form onSubmit={function info(infosEvento) {
                    infosEvento.preventDefault();
                    router.push(`quiz?benjaminharola`)
                }}>
                    <Button type="submit">
                        {`Entendido`}
                    </Button>
                </form>
            </div>
        </Widget.Content>
    );
}

