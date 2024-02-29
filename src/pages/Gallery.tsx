import Nav from '../components/nav/nav';
import Button from '../components/button/button';
import { useState } from 'react';
import Product from '../components/overlay/Product';

export default function Gallery(){


    return(
        <>
            <Nav></Nav>
            <h1>Gallery</h1>
            <Product></Product>
        </>
    )
}