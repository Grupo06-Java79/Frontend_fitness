import CardUsuarios from "../cardusuario/CardUsuarios"

function ListaUsuarios() {

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-3 gap-8">
                        <CardUsuarios />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaUsuarios