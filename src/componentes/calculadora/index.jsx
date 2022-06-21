import React, { useEffect, useState } from "react";
import { Form, Table, Button } from "react-bootstrap";

const Calculadora = () => {
  const [vectores, setVectores] = useState([
    {
      id: 0,
      angulo: null,
      magnitud: null,
      x: null,
      y: null,
    },
  ]);
  const [finalVector, setFinalVector] = useState({});

  const agregarVector = () => {
    setVectores([
      ...vectores,
      {
        id: Math.random(),
        angulo: null,
        magnitud: null,
        x: null,
        y: null,
      },
    ]);
  };

  const eliminarVector = () => {
    const newVectores = [...vectores];
    newVectores.splice(-1);
    setVectores(newVectores);
  };

  const onX = (id, nuevaX) => {
    const newVectores = vectores.map((vec) => {
      if (vec.id === id) vec.x = nuevaX;
      return vec;
    });

    setVectores([...newVectores]);
  };

  const onY = (id, nuevaY) => {
    const newVectores = vectores.map((vec) => {
      if (vec.id === id) vec.y = nuevaY;
      return vec;
    });

    setVectores([...newVectores]);
  };

  const obtenerMagnitud = (vector) => {
    const x = vector.x;
    const y = vector.y;

    if (!x && !y) return (0).toFixed(2);

    const magnitud = Math.sqrt(x * x + y * y);
    return magnitud.toFixed(2);
  };

  const obtenerAngulo = (vector) => {
    const x = vector.x;
    const y = vector.y;

    if (!x && !y) return (0).toFixed(2);

    const angulo = (Math.atan(y / x) * 180) / Math.PI;
    return angulo.toFixed(2);
  };

  useEffect(() => {
    let vector = {
      x: 0,
      y: 0,
    };

    vectores.forEach((vec) => {
      vector.x += +vec.x;
      vector.y += +vec.y;
    });

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
                  onChange={(e) => onX(vector.id, e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  value={vector.y}
                  onChange={(e) => onY(vector.id, e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  value={obtenerMagnitud(vector)}
                  disabled
                />
              </td>
              <td>
                <Form.Control
                  type="number"
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
