import React, {FC} from 'react';
import {RouterProvider} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../routes';

export const auth = true;

const AppRouter: FC = () => {

    return (
        <RouterProvider router={auth ? privateRoutes : publicRoutes}/>
    )
};

export default AppRouter;