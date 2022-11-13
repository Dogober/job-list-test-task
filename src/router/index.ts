import JobDetalis from "../pages/JobDetalis";
import JobList from "../pages/JobList";

export interface Route {
    path: string;
    element: JSX.Element
}

export const routes: Route[] = [
    {path: '/home', element: {type: JobList, props: null, key: null}},
    {path: '/home:id', element: {type: JobDetalis, props: null, key: null}},
]