function Blog() {
    return (
        <div className="container py-4">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Cómo solucione el error <span className="text-danger">"permission denied"</span> con react-scripts</h1>
                    <p className="col-md-8 fs-4">Mientras trabajaba en un proyecto con React, me encontré con un error frustante: 
                        <span className="text-danger"> permission denied: react-scripts</span>.
                    </p>
                    <p className="col-md-8 fs-4">
                        Pensé que sería algo simple... y llego a ser difícil, perdiendo
                        mucho tiempo de lo que pensaba
                    </p>
                    <button class="btn btn-primary btn-lg" type="button">Ir a más detalle...</button> 
                </div>
            </div>
            <div className="row align-items-md-stretch">
                <div className="col-md-6">
                    <div className="h-100 p-5 text-bg-dark rounded-3">
                        <h2>Mi primer proyecto de <span className="text-success">Spring Boot</span> tuvo un problema</h2>
                        <p>
                            Mi primer proyecto con Spring Boot, después de haber agregado y quitar dependencias
                            que necesitaba en mi aplicación, había dejado de funcionar.
                        </p>
                        <button className="btn btn-outline-light" type="button">Más información...</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                        <h2>Mi SETUP como desarrollador</h2>
                        <p>
                            En mi tiempo como desarrollador, buscaba buenas herramientas para
                            ser más productivo. Lo tenía todo desordenado: proyectos, entornos, archivos por todos lados
                            , etc.
                            Buscaba configuraciones, cambie herramientas y otras cosas más.
                            Hasta que encontré el problema, y era en como yo lo usaba.
                        </p>
                        <button className="btn btn-outline-secondary" type="button">Más detalle...</button>
                    </div>
                </div>
            </div>
            <footer className="pt-3 mt-4 text-body-secondary border-top">
                © 2026
            </footer>
        </div>
    );
}

export default Blog;