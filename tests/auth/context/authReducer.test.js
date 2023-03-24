import { authReducer, types } from "../../../src/auth";


describe('Pruebas En El authReducer', () => { 


    test('Debe de retornar el estado por defecto', () => { 

        const state = authReducer( { logged: false }, {} );
        expect( state ).toEqual( { logged: false } );

    });


    test('Debe de llamar el login autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '123',

            }
        }

        const state = authReducer( { logged: false }, action );
        expect( state ).toEqual( { 
            logged: true,
            user: {
                name: 'Juan',
                id: '123',
            }
        } );

    }); 


    test('Debe de borrar el name del usuario y logged en false', () => {
        
        const action = {
            type: types.logout,
        }

        const initialState = {
            logged: true,
            user: { id: '123', name: 'Juan' }
        }
        
        const state = authReducer( initialState, action );
        expect( state ).toEqual({ logged: false });
    })
    



})