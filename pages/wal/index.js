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
                <h2>Boa sorte menino wal, antes de tu ir pro teste deixa só eu ver uma coisa</h2>
                <p className="line-1 anim-typewriter">Escolha sabiamente...</p>
                <p className="line-1 anim-typewriter5">Que indecisão é essa? Precisa nem pensar pra isso ai</p>
                <img src='https://i.makeagif.com/media/6-29-2016/EfbYFo.gif' alt="CR7 vs Messi" />
                <h2>Melhor da historia:</h2>
                <form onSubmit={function info(infosEvento) {
                    infosEvento.preventDefault();
                    router.push(`quiz?meninowal`)
                }}>
                    <Button type="submit" onClick={function meudeus() { alert('A última é a jecê, boa escolha')}}>
                        {`Cristiano`}
                    </Button>
                    <Button onClick={function meudeus() { alert('Bom saber... Seus dados estarão seguros comigo...')}}>
                        {`Messi`}
                    </Button>
                </form>
            </div>
        </Widget.Content>
    );
}

