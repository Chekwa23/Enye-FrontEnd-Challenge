import React, { Component } from 'react'
import {  } from "module";
import axios from 'axios'
import { Container, Table } from 'react-bootstrap';

export default class App extends Component {
  constructor(){
    super();

    this.state ={
      records: [],
      keysArr: []
    }
  }

  async componentDidMount() {
    await axios.get(`https://api.enye.tech/v1/challenge/records`)
      .then(res => {
        const records = res.data.records.profiles;
        const keysArr = Object.keys(records[0]);
        // console.log(rec);
        // console.log(keysArr);
        this.setState({ records, keysArr });
      })
  }

  render() {
    return (
      <>
        <div>
          <Container>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  {this.state.keysArr.map((keyName, index) => (
                    <th key={index}>{keyName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.records.map((each, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    {Object.entries(each).map(([keyName, val], index) => ( 
                      <td key={index}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </div>
      </>
    )
  }
}
