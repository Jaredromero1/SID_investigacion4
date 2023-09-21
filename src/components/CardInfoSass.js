import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

export default function CardInfoGoogle() {
  return (
    <Card style={{ width: '25rem' }}>
        <img alt="Sample" src="https://www.stratusmedia.io/cdn/posts/9fcf86d1-275d-4e84-b53b-40893d85c365/saas-software-como-servicio.jpg"/>
        <CardBody>
            <CardTitle tag="h5">Software como servicio</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">SaaS</CardSubtitle>
            <CardText>Proporciona el software y la infraestructura necesarios para ejecutarlo. El usuario no tiene que preocuparse por la implementación o el mantenimiento del software.</CardText>
        </CardBody>
    </Card>
  )
}
