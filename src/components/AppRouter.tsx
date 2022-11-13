import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import JobDetalis from '../pages/JobDetalis';
import JobList from '../pages/JobList';

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path='/home' element={<JobList/>} />
            <Route path='/home/:id' element={<JobDetalis/>}/>
            <Route path='*' element={<Navigate replace to='/home'/>}/>
        </Routes>
    );
};

export default AppRouter;