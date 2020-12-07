import React from 'react';
import { Row, Col, Title } from '../../styles/GlobalStyles';
import { Table, TitleTable } from './styled';

export default function TopTeams() {
  return (
    <>
      <Title>Top 5</Title>
      <Row>
        <Col default="50" mobile="100">
          <TitleTable>Highest avg age</TitleTable>
          <Table>
            <tbody>
              <tr>
                <td>Inter Milan</td>
                <td>31.9</td>
              </tr>
              <tr>
                <td>APOEL Nicosia</td>
                <td>31.7</td>
              </tr>
              <tr>
                <td>AC Milan</td>
                <td>31.6</td>
              </tr>
              <tr>
                <td>APOEL Nicosia</td>
                <td>31.7</td>
              </tr>
              <tr>
                <td>AC Milan</td>
                <td>31.6</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col default="50" mobile="100">
          <TitleTable>Lowest avg age</TitleTable>
          <Table>
            <tbody>
              <tr>
                <td>Inter Milan</td>
                <td>31.9</td>
              </tr>
              <tr>
                <td>APOEL Nicosia</td>
                <td>31.7</td>
              </tr>
              <tr>
                <td>AC Milan</td>
                <td>31.6</td>
              </tr>
              <tr>
                <td>APOEL Nicosia</td>
                <td>31.7</td>
              </tr>
              <tr>
                <td>AC Milan</td>
                <td>31.6</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
