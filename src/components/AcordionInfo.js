import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Example(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Nube pública</AccordionHeader>
          <AccordionBody accordionId="1">
            La <strong>nube pública</strong> es un modelo de entrega en el que los recursos informáticos,
            como servidores, almacenamiento y redes, se proporcionan a través de Internet 
            a un público general. Los proveedores de servicios en la nube públicos, como 
            Amazon Web Services (AWS), Microsoft Azure y Google Cloud Platform, ofrecen una 
            amplia gama de servicios en la nube.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Nube privada</AccordionHeader>
          <AccordionBody accordionId="2">
            La <strong>nube privada</strong> es un modelo de entrega en el que los recursos informáticos se 
            implementan y gestionan en un entorno interno. Las empresas pueden crear su propia
            nube privada o contratar a un proveedor de servicios para que la administre.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Nube híbrida</AccordionHeader>
          <AccordionBody accordionId="3">
            La <strong>nube híbrida</strong> es una combinación de una nube pública y una nube privada. Las empresas
            pueden utilizar la nube pública para los recursos que necesitan escalabilidad y elasticidad, 
            y la nube privada para los recursos que necesitan seguridad y control.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Nube multicloud</AccordionHeader>
          <AccordionBody accordionId="4">
            La <strong>nube multicloud</strong> es un modelo de entrega en el que las empresas utilizan varios proveedores 
            de servicios en la nube. Esto puede proporcionar a las empresas flexibilidad y escalabilidad, 
            pero también puede complicar la gestión.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Example;