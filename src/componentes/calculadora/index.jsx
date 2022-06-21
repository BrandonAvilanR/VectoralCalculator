import React, { useEffect, useState } from "react";
import { Form, Table, Button } from "react-bootstrap";

const Calculadora = () => {
  const [vectores, setVectores] = useState([
    {
      id: 0,
      x: 0,
      y: 0,
    },
  ]);
  const [finalVector, setFinalVector] = useState({});

  const agregarVector = () => {
    setVectores([
      // Copiar vectores actuales
      ...vectores,
      // Agregar un nuevo vector
      {
        id: Math.random(),
        x: 0,
        y: 0,
      },
    ]);
  };

  const eliminarVector = () => {
    const nuevosVectores = [...vectores];
    // Eliminar el último vector
    nuevosVectores.splice(-1);
    setVectores(nuevosVectores);
  };

  const onX = (id, nuevaX) => {
    const nuevosVectores = [];

    for (let i = 0; i < vectores.length; i++) {
      if (vectores[i].id === id) {
        vectores[i].x = nuevaX;
      }
      // Agregar el vector a la lista
      nuevosVectores.push(vectores[i]);
    }

    setVectores(nuevosVectores);
  };

  const onY = (id, nuevaY) => {
    const nuevosVectores = [];

    for (let i = 0; i < vectores.length; i++) {
      if (vectores[i].id === id) {
        vectores[i].y = nuevaY;
      }
      // Agregar el vector a la lista
      nuevosVectores.push(vectores[i]);
    }

    setVectores(nuevosVectores);
  };

  const obtenerMagnitud = (vector) => {
    const x = vector.x;
    const y = vector.y;

    // Si no existe x o y, no se puede calcular la magnitud
    // y se retorna 0 por defecto con dos decimales
    if (!x && !y) return (0).toFixed(2);

    const magnitud = Math.sqrt(x * x + y * y);
    return magnitud.toFixed(2);
  };

  const obtenerAngulo = (vector) => {
    const x = vector.x;
    const y = vector.y;

    // Si no existe x o y, no se puede calcular el angulo
    // y se retorna 0 por defecto con dos decimales
    if (!x && !y) return (0).toFixed(2);

    const angulo = (Math.atan(y / x) * 180) / Math.PI;
    return angulo.toFixed(2);
  };

  // Actualizar el vector final cada vez que
  // cambia(eliminar, agregar, o que camibie x o y de algun vector) 
  // la lista de vectores
  useEffect(() => {
    let vector = {
      x: 0,
      y: 0,
    };

    for (let i = 0; i < vectores.length; i++) {
      vector.x += vectores[i].x;
      vector.y += vectores[i].y;
    }

    setFinalVector(vector);
  }, [vectores]);

  return (
    <div
      id="calculadora"
      style={{ margin: "20px", maxWidth: "800px", width: "100%" }}
    >
      <h3>Calculadora Vectorial</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <Button variant="dark" onClick={agregarVector}>
          Agregar Vector
        </Button>
        <Button
          style={{ marginLeft: "20px" }}
          variant="dark"
          onClick={eliminarVector}
        >
          Eliminar ultimo Vector
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>X</th>
            <th>Y</th>
            <th>Magnitud</th>
            <th>Angulo</th>
          </tr>
        </thead>
        <tbody>
          {vectores.map((vector, index) => (
            <tr id={vector.id}>
              <td>{index + 1}</td>
              <td>
                <Form.Control
                  type="number"
                  value={vector.x}
                  onChange={(event) => onX(vector.id, event.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  value={vector.y}
                  onChange={(event) => onY(vector.id, event.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  value={obtenerMagnitud(vector)}
                  disabled
                />
              </td>
              <td>
                <Form.Control
                  value={obtenerAngulo(vector)}
                  disabled
                />
              </td>
            </tr>
          ))}
          <tr>
            <td>=</td>
            <td>
              <Form.Control value={finalVector.x || 0} disabled />
            </td>
            <td>
              <Form.Control value={finalVector.y || 0} disabled />
            </td>
            <td>
              <Form.Control
                type="number"
                value={obtenerMagnitud(finalVector)}
                disabled
              />
            </td>
            <td>
              <Form.Control
                type="number"
                value={obtenerAngulo(finalVector)}
                disabled
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Calculadora;
