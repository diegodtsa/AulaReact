import React from 'react';
import ReactDOM from 'react-dom/client';
import BotaoLegal from './BotaoLegal';
import Titulo from './Titulo';
import Card from './components/card/Card';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <div>
        <Card imagem="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60" titulolegal="Aprenda Fazer uma Salada Deliciosa !!!">
        TexTo dentro da Tag
        </Card>

        <Card imagem="https://spdm.org.br/wp-content/uploads/2015/01/k2_items_src_ef2cbc28bb74bd18fb9aaefb55569150.jpg" titulolegal="Perca 10Kg com essa receita de Suco Detox !!!" >
        Receita do Suco Detox
        </Card>
       
      
       
    </div>
    
);