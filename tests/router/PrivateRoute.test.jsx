import { AuthContext } from "../../src/auth";
import { render, screen } from '@testing-library/react';
import { Routes, Route, MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../src/router/PrivateRoute";




describe('Puebas en el <PrivateRoute />', () => {

    test('Debe de mostrar el children si esta autenticado ', () => {

        Storage.prototype.setItem = jest.fn();

        
        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Juan',
            }
        }
        
        render(
            <AuthContext.Provider value={ contextValue }>

                <MemoryRouter>

                    <PrivateRoute> 
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>

                </MemoryRouter>

            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta Privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/');
        
    });
})