import { Form, Formik } from "formik";
import { createRegistroRequest } from "../api/registro.api.js";

function RegistroPage() {
    return (
        <div>
            <Formik
                initialValues={{
                    Nombre: "",
                    Apellido: "",
                    edad: "",
                    correo: "",
                    clave: "",

                }}
                onSubmit={async (values) => {
                    console.log(values)
                    try {
                        const response = await createRegistroRequest(values)
                        console.log(response)
                    } catch (error) {
                        console.error(error)

                    }

                }}
            >
                {({ handleChange, handleSubmit }) => (


                    <Form onSubmit={handleSubmit}>
                        <li>
                            <label>Nombre</label>
                            <input type="text" name="Nombre"
                                onChange={handleChange} />


                        </li>
                        <li>
                            <label>Apellido</label>
                            <input type="text" name="Apellido"
                                onChange={handleChange} />
                        </li>
                        <li>
                            <label>Edad</label>
                            <input type="text" name="Edad"
                                onChange={handleChange} />
                        </li>
                        <li>
                            <label>Correo</label>
                            <input type="text" name="Correo"
                                onChange={handleChange} />
                        </li>
                        <li>
                            <label>Clave</label>
                            <input type="text" name="Clave"
                                onChange={handleChange} />
                        </li>
                        <button type="onSubmit">
                            Save
                        </button>


                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegistroPage