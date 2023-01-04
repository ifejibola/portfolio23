import { useRoutes } from "react-router";

import AppMenu from "./AppMenu";
import Page from "./pages/home";
import IndexHeader from "./components/header";
const routes = [
    {
        path: "/",
        element: <AppMenu />,
        children: [
            // { index: true, element: <>Home Element</> },
            { index: true, element: <Page /> },
            // {
            //     // path:'/two',
            //     // element:<strong>twoowojfkdls</strong>
            //     path: "/dashboard",
            //     element: <DashboardPage />,
            // },
            // {
            //     path: "/login",
            //     element: <LoginPage />,
            // },
            {
                path: '/two',
                element: <IndexHeader />
            }
        ],
    },
    { path: "*", element: <>NO Match</> },
];

function AppRoutes() {
    // Routes
    const content = useRoutes(routes);

    return <>{content}</>;
}
export default AppRoutes;
