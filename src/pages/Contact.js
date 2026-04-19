function Contact() {
    return (
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
            <div class="row align-items-center g-lg-5 py-5">
                <div class="col-lg-7 text-center text-lg-start">
                    <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Quieres contratarme para un trabajo</h1>
                    <p class="col-lg-10 fs-4">Que esperas!!!!, estoy buscando CHAMBA</p>
                </div>
                <div class="col-md-10 mx-auto col-lg-5">
                    <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
                            <label for="floatingInput">Correo Electrónico</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
                            <label for="floatingPassword">Contraseña</label>
                        </div>
                        <div class="checkbox mb-3">
                            <label> <input type="checkbox" value="remember-me"> Recordad </input> </label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>
                        <hr class="my-4">
                            <small class="text-body-secondary">Al dar clic en Registrar, aceptas los términos de uso.</small>
                        </hr>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;