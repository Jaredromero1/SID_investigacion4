import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

export default function CardInfoAzure() {
  return (
    <Card style={{ width: '25rem' }}>
        <img alt="Sample" src="https://www.teamnet.com.mx/hubfs/PaaS.png"/>
        <CardBody>
            <CardTitle tag="h5">Plataforma como servicio</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">PaaS</CardSubtitle>
            <CardText>Proporciona una plataforma completa para el desarrollo y despliegue de aplicaciones. El usuario es responsable de desarrollar la aplicación.</CardText>
        </CardBody>
    </Card>
  )
}
