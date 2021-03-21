import { Component } from "react"
import { Col, Container, Row, Card } from "react-bootstrap"
import PhonesService from "../../../service/phones.service"
import Spinner from '../../Shared/Spinner/Spinner'
import './PhoneDetails.css'

class PhoneDetails extends Component {

    constructor() {
        super()
        this.state = {
            phone: []
        }

        this.phonesService = new PhonesService()
    }

    componentDidMount() {
        const phone_id = this.props.match.params.id
        
        this.phonesService
            .getPhones()
            .then(response => this.setState({phone: response.data[phone_id]}))
            .catch(err => console.log({err}))

        
    }


    
    render() {

        return(
            <Container>
                {this.state.phone
                    ?
                    
                    <Row>
                        <Col>
                            <h1>{this.state.phone?.name}</h1>
                            <Card.Img variant='top' src={this.state.phone?.imageFileName} alt=''></Card.Img>

                        </Col>
                        <Col className='details-section'>
                            <h2>{this.state.phone?.description}</h2>
                            <h4>Manufacturer: {this.state.phone?.manufacturer}</h4>
                            <h4>Color: {this.state.phone?.color}</h4>
                            <h4>Price: {this.state.phone?.price} €</h4>
                            <h4>Screen: {this.state.phone?.screen}</h4>
                            <h4>Processor: {this.state.phone?.processor}</h4>
                            <h4>Ram: {this.state.phone?.ram} GB</h4>
                        </Col>
                    </Row>
                    :
                <Spinner></Spinner>}
            </Container>




        )
    }
}

export default PhoneDetails