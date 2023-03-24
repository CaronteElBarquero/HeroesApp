import { HeroeList } from "../components/"

export const DcPages = () => {

    const publisher = "DC Comics";

    return (

        <>
            <h1>DC Comics</h1>
            <hr />
            

            <HeroeList publisher={publisher}/>

        
        </>
    )
}
