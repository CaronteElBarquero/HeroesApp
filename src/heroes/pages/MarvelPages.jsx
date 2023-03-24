import { HeroeList } from "../components"

export const MarvelPages = () => {
    
    const publisher = "Marvel Comics";
    
    return (


        <>
            <h1>MarvelPages</h1>
            <hr />

            <HeroeList publisher={ publisher }/>
        </>
    )
}
