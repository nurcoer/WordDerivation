import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class NameListEl extends Component {
  state = {
    usedNames: this.props.usedNames,
  };
  render() {
    return (
      <div className="row ">
        <Table dark id="tasks-table ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Word</th>
            </tr>
          </thead>
          <tbody id="table-tbody">
            {this.props.usedNames.map((name,index) => (
              <tr key={index}>
                <td>{name.slice(-1)}</td>
                <td>{name}</td>
              </tr>
            ))} 
          </tbody>
        </Table>
      </div>
    );
  }
}
