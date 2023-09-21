import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

export default function CardInfo() {
  return (
    <Card style={{ width: '25rem' }}>
        <img alt="Sample" src="https://gtsperu.com/wp-content/uploads/2022/08/02a-Servicios-de-Infraestructura-como-Servicio-IAAS.jpg"/>
        <CardBody>
            <CardTitle tag="h5">Infraestructura como servicio</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">IaaS</CardSubtitle>
            <CardText>Proporciona la infraestructura subyacente, como servidores, almacenamiento y redes. El usuario es responsable de instalar y administrar el software.</CardText>
        </CardBody>
    </Card>
  )
}
