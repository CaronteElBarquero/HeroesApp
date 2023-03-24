
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui';


const mockedUseNavigate = jest.fn();


jest.mock( 'react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate

}));

describe('Pruebas en <Navbar />', () => { 
    
    const contextValue = {
        logged: true,
        user: {

            name: "Juan"
        },

        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() );



    test('Debe de mostrar el nombre de usuario loggeado', () => { 

        render(

            <MemoryRouter>

                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>

            </MemoryRouter>

        );


        expect( screen.getByText('Juan') ).toBeTruthy();
        
    });







    test('Debe de llamar el Logout y navigate cuando se hace click en el boton', () => {

        render(

            <MemoryRouter>

                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>

            </MemoryRouter>

        );

        
        const logoutBtn = screen.getByRole('button');

        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith( "/login", {"replace": true} );

    });



});