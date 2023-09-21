import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

export default function ListInfo() {
  return (
    <ListGroup>
        <ListGroupItem>
            <ListGroupItemHeading><strong>Escalabilidad</strong></ListGroupItemHeading>
            <ListGroupItemText>
                Los servicios en la nube se pueden escalar fácilmente para adaptarse a las necesidades cambiantes de la carga de trabajo.
            </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
            <ListGroupItemHeading><strong>Eliminación de la necesidad de mantenimiento</strong></ListGroupItemHeading>
            <ListGroupItemText>
                Los servicios en la nube se pueden implementar y mantener sin necesidad de intervención del usuario.
            </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
            <ListGroupItemHeading><strong>Reducción de costos</strong></ListGroupItemHeading>
            <ListGroupItemText>
                Los servicios en la nube pueden ayudar a las empresas a reducir sus costos de TI.
            </ListGroupItemText>
        </ListGroupItem>
    </ListGroup>
  )
}
