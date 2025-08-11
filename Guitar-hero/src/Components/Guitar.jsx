export default function Guitar(props) {

    return (
        <>
            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src="./" alt="imagen guitarra" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{props.nombre}</h3>
                    <p>{props.descri}</p>
                    <p className="fw-black text-primary fs-3">{props.precio}</p>
                    <button
                        type="button"
                        className="btn btn-dark w-100"
                    >Agregar al Carrito</button>
                </div>
            </div>
        </>

    )
}