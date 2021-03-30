import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import '../../../styles/turnImgComponent.css';

export default class UserTurn extends Component {
  render() {
    return (
      <div className="col-sm">
        <Card className="col-md-6 space  " color="danger">
          <CardImg
            bottom
            width="100%"
            src="../../../assets/userTurn.png"
            alt="İmage Not Found"
          />
          <CardBody>
            <CardTitle tag="h5">User Turn</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}
