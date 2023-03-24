
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { Routes, Route, MemoryRouter } from 'react-router-dom';


import { PublicRouter} from '../../src/router/PublicRouter';


describe('Prubeas en <PublicRoute />', () => {

  

    test('Debe de mostrar el children si no esta autenticado ', () => {
        
        const contextValue = {
            logged: false,
        }
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRouter>
                    <h1>Ruta Publica</h1>
                </PublicRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta Publica') ).toBeTruthy();
        
    });


    test('Debe de navegar si esta autenticado ', () => {
            
            const contextValue = {
                logged: true,
                user: {
                    name: 'Pepe',
                    id: 'ABC123',
                }

            }
            
            render(
                <AuthContext.Provider value={ contextValue }>

                    <MemoryRouter initialEntries={['/login']}>

                        <Routes>

                            <Route path='login' element={
                                <PublicRouter>
                                    <h1>Ruta Publica</h1>
                                </PublicRouter>
                            } />

                            <Route path='marvel' element={ <h1>Pagina Marvel</h1> } />
                        </Routes>


                    </MemoryRouter>
                    
                </AuthContext.Provider>
            );
    
        expect( screen.getByText('Pagina Marvel') ).toBeTruthy();
            

    });




})