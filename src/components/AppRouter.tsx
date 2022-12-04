import React, {FC} from 'react';
import {RouterProvider} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../routes';

const AppRouter: FC = () => {
    const auth = true;

    return (
        <RouterProvider router={auth ? privateRoutes : publicRoutes}/>
    )
};

export default AppRouter;