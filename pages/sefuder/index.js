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
            <img src='http://s.glbimg.com/po/tt/f/original/2012/04/16/07-a-cadeira-de-balanco-que-nao-esta-sozinha.gif' alt="Se fuder" className="gifsusto" />
                <form onSubmit={function info(infosEvento) {
                    infosEvento.preventDefault();
                    router.push(`/`)
                }}>
                    <Button type="submit" onClick={function meudeus() { alert('Finalmente hein')}}>
                        {`Voltar`}
                    </Button>
                </form>
        </Widget.Content>
    );
}

