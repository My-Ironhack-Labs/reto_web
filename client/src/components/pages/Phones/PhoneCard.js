import {Card, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './PhoneCard.css'

const PhoneCard = ({name, manufacturer, description, color, price, imageFileName, screen, processor, ram, id}) => {
    return(
        <Col md={3} sm={4} xs={6}>
            <Card className='phone-card'>
                <Card.Body className='phone-card-body'>
                    <Link className='phone-links' to={`/${id}`} style={{textDecoration: 'none'}}>
                        <Card.Img variant='top' src={imageFileName} alt={name}></Card.Img>
                        <h3>{name}</h3>
                    </Link>
                    <h4>{color}</h4>
                    <h4>{price} €</h4>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default PhoneCard