import React from "react";
import NewtonImg from "../../Isaac_Newton.jpeg";

const Newton = () => {
  return (
    <div style={{ margin: "20px", maxWidth: "800px", width: "100%" }}>
      <h3>Newton</h3>
      <div
        style={{ display: "flex", flexDirection: "row", marginBottom: "20px" }}
      >
        <img
          src={NewtonImg}
          width={100}
          alt="Isaac Newton"
          style={{ marginRight: "20px" }}
        />
        <p>
          Isaac Newton fue un físico, teólogo, inventor, alquimista y matemático
          inglés. Es autor de los Philosophiæ naturalis principia mathematica,
          más conocidos como los Principia, donde describe la ley de la
          gravitación universal y estableció las bases de la mecánica clásica
          mediante las leyes que llevan su nombre.
        </p>
      </div>
      <h5>Primera Ley</h5>
      <p>
        La primera ley de Newton, conocida también como Ley de inercía, nos dice
        que si sobre un cuerpo no actua ningún otro, este permanecerá
        indefinidamente moviéndose en línea recta con velocidad constante
        (incluido el estado de reposo, que equivale a velocidad cero).
      </p>
      <p>
        Como sabemos, el movimiento es relativo, es decir, depende de cual sea
        el observador que describa el movimiento. Así, para un pasajero de un
        tren, el interventor viene caminando lentamente por el pasillo del tren,
        mientras que para alguien que ve pasar el tren desde el andén de una
        estación, el interventor se está moviendo a una gran velocidad. Se
        necesita, por tanto, un sistema de referencia al cual referir el
        movimiento. La primera ley de Newton sirve para definir un tipo especial
        de sistemas de referencia conocidos como Sistemas de referencia
        inerciales, que son aquellos sistemas de referencia desde los que se
        observa que un cuerpo sobre el que no actua ninguna fuerza neta se mueve
        con velocidad constante.
      </p>
      <p>
        En realidad, es imposible encontrar un sistema de referencia inercial,
        puesto que siempre hay algún tipo de fuerzas actuando sobre los cuerpos,
        pero siempre es posible encontrar un sistema de referencia en el que el
        problema que estemos estudiando se pueda tratar como si estuviésemos en
        un sistema inercial. En muchos casos, suponer a un observador fijo en la
        Tierra es una buena aproximación de sistema inercial.
      </p>
      <h5>Segunda Ley</h5>
      <p>
        La Primera ley de Newton nos dice que para que un cuerpo altere su
        movimiento es necesario que exista algo que provoque dicho cambio. Ese
        algo es lo que conocemos como fuerzas. Estas son el resultado de la
        acción de unos cuerpos sobre otros.
      </p>
      <p>
        La Segunda ley de Newton se encarga de cuantificar el concepto de
        fuerza. Nos dice que la fuerza neta aplicada sobre un cuerpo es
        proporcional a la aceleración que adquiere dicho cuerpo. La constante de
        proporcionalidad es la masa del cuerpo, de manera que podemos expresar
        la relación de la siguiente manera:
      </p>
      <p>F = m a</p>
      <p>
        Tanto la fuerza como la aceleración son magnitudes vectoriales, es
        decir, tienen, además de un valor, una dirección y un sentido. De esta
        manera, la Segunda ley de Newton debe expresarse como:
      </p>
      <p>F = m a</p>
      <p>
        La unidad de fuerza en el Sistema Internacional es el Newton y se
        representa por N. Un Newton es la fuerza que hay que ejercer sobre un
        cuerpo de un kilogramo de masa para que adquiera una aceleración de 1
        m/s2, o sea,
      </p>
      <p>1 N = 1 Kg · 1 m/s2</p>
      <h5>Tercera Ley</h5>
      <p>
        Tal como comentamos en al principio de la Segunda ley de Newton las
        fuerzas son el resultado de la acción de unos cuerpos sobre otros.
      </p>
      <p>
        La tercera ley, también conocida como Principio de acción y reacción nos
        dice que si un cuerpo A ejerce una acción sobre otro cuerpo B, éste
        realiza sobre A otra acción igual y de sentido contrario.
      </p>
      <p>
        Esto es algo que podemos comprobar a diario en numerosas ocasiones. Por
        ejemplo, cuando queremos dar un salto hacia arriba, empujamos el suelo
        para impulsarnos. La reacción del suelo es la que nos hace saltar hacia
        arriba.
      </p>
    </div>
  );
};

export default Newton;
