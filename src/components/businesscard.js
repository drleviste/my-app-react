import React from "react";
import { Table } from "reactstrap";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import logo from "../assets/images/gradpic.jpg";

const BusinessCard = ({ name, organization }) => (
    <React.Fragment>
    <div>
        <Card>
            <CardBody>
            <img height="100px" src={logo}></img>
            {/* <CardImg top height="100px" src={logo} class="img-thumbnail" alt="Card image cap" /> */}
            <CardTitle>Denise Leviste</CardTitle>
            <CardSubtitle>Marketing assistant</CardSubtitle>
            <CardText></CardText>
            <Button>Show Me!</Button>
            </CardBody>
      </Card>
    </div>

    </React.Fragment>

);

export default BusinessCard;
