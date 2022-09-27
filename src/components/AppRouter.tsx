import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useSelector';
import { privateRoutes, publicRoutes } from '../router';

function AppRouter() {
    const {auth}=useTypeSelector(state=>state.auth)
    return ( 
        <Routes>
            {
                auth
                ?privateRoutes.map(({path, Component})=>
                    <Route element={Component} path={path} key={path}></Route>
                )
                :publicRoutes.map(({path, Component})=>
                <Route element={Component} path={path} key={path}></Route>
                )
            }
        </Routes> 
     );
}

export default AppRouter;