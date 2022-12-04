import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";
import Events from "../pages/Events";
import Login from "../pages/Login";

export enum RouteNames {
    LOGIN = "/login",
    EVENT = "/",
}

export const publicRoutes = createBrowserRouter([
    {path: RouteNames.LOGIN, element: <Login/>},
    {path: "*", element: <Navigate to={RouteNames.LOGIN} replace/>}
]);

export const privateRoutes = createBrowserRouter([
    {path: RouteNames.EVENT, element: <Events/>},
    {path: "*", element: <Navigate to={RouteNames.EVENT} replace/>}
]);
