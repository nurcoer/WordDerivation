import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import '../../../styles/turnImgComponent.css';

export default class ComputerTurn extends Component {
  render() {
    return (
      <div className="col-sm">
        <Card className="col-md-6  bg-dark text-white space">
          <CardImg
            top
            width="100%"
            src="../../../assets/computerTurn.png"
            alt="İmage Not Found"
          />
          <CardBody>
            <CardTitle tag="h5">Computer Turn</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}
