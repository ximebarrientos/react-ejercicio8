import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [mensaje,setMensaje]=useState("")

  const limpiarForm = () => {
    reset();
  };
  
  return (
    <section>
      <Form
        onSubmit={handleSubmit(limpiarForm)}
        className="border p-3 rounded-3"
      >
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Juan"
            {...register("nombre", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 3,
                message: "El nombre debe tener como minimo 3 caracteres",
              },
              maxLength: {
                value: 50,
                message: "El nombre debe tener como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ej:Perez" {...register("apellido", {
              required: "El apellido es obligatorio",
              minLength: {
                value: 3,
                message: "El apellido debe tener como minimo 3 caracteres",
              },
              maxLength: {
                value: 50,
                message: "El apellido debe tener como maximo 50 caracteres",
              },
            })}/>
          <Form.Text className="text-danger">
            {errors.apellido?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="number" placeholder="Ej:12345678" {...register("dni", {
              required: "El DNI es obligatorio",
              minLength: {
                value: 7,
                message: "El DNI debe tener como minimo 7 caracteres",
              },
              maxLength: {
                value: 8,
                message: "El DNI debe tener como maximo 8 caracteres",
              },
            })}/>
          <Form.Text className="text-danger">
            {errors.dni?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ej: juanperez@mail.com" {...register("email", {
              required: "El email es obligatorio",
              minLength: {
                value: 12,
                message: "El email debe tener como minimo 12 caracteres",
              },
              maxLength: {
                value: 30,
                message: "El email debe tener como maximo 30 caracteres",
              },
            })}/>
          <Form.Text className="text-danger">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </section>
  );
};

export default Formulario;
