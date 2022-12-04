import React, {FC} from 'react';
import {RouterProvider} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../routes';
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector((state) => state.auth)

    return (
        <RouterProvider router={isAuth ? privateRoutes : publicRoutes}/>
    )
};

export default AppRouter;