import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase/utils'
import BestApar from '../BestApar'
import './style.css';

const AparLand = () => {
    const [deptosHome, setDeptosHome] = useState([]);

    useEffect (() => {
        firestore
        .collection("bestap")
        .get()
        .then(res => {
        const tempDeps = []
        res.forEach(dep => {
            tempDeps.push(dep.data())
        })
        setDeptosHome(tempDeps.slice(0, 3))
        })
        .catch(err => console.log(err))
    }, [])

    return ( 
        <div className="cont-al">
                <div className="inclined-bar"></div>
                    <h2 className="titulo-aparland1">CONOCÉ NUESTROS</h2>
                    <h2 className="titulo-aparland2">deptos Best</h2>
                <div className="inclined-bar"></div>
            {deptosHome &&
            <div className="container-fotos">
                <BestApar deptos={deptosHome} showArrow={false}/>
                <a href="/departamentos"><button className="button-al">VER TODOS</button></a>
            </div>
            }
        </div>
    )
}
 
export default AparLand;