import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Inicio from './pages/Inicio';
import SobreNos from './pages/SobreNos';
import NossosClientes from './pages/NossosClientes';
import Localizacao from './pages/Localizacao';
import Contato from './pages/Contato';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path:'/',
        element:<Inicio/>
    },
    {
        path:'/SobreNos',
        element:<SobreNos/>
    },
    {
        path:'Contato',
        element:<Contato/>
    },
    {
        path:'NossosClientes',
        element:<NossosClientes/>
    },
    {
        path:'Localizacao',
        element:<Localizacao/>
    }
])


root.render(
    <RouterProvider router={router}/>

    /*<div>
        <a href=''>Home</a>
        <a href=''>Sobre Nós</a>
        <a href=''>Contato</a>
        <a href=''>Nossos Clientes</a>
        <a href=''>Localização</a>       
    </div>
    */
);