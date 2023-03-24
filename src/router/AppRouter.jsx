import { Routes, Route } from 'react-router-dom';

import { HeroesRoutes } from '../heroes'
import { LoginPages } from '../auth'
import { PrivateRoute } from './PrivateRoute';
import { PublicRouter } from './PublicRouter';




 

export const AppRouter = () => {
    return (
       <>   

            <Routes>


                {/* <Route path="login" element={ <LoginPages />} /> */}

                <Route path="login" element={

                    <PublicRouter>

                        <LoginPages />

                    </PublicRouter>

                } />


                <Route path="/*" element={

                    <PrivateRoute>

                        <HeroesRoutes />

                    </PrivateRoute>

                } />

                {/* <Route path="/*" element={ <HeroesRoutes />} /> */}

            </Routes>

       </>
    )
}
