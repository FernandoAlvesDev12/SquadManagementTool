import React from 'react';
// import { useDispatch } from 'react-redux';

import { Container, Row, Col } from '../../styles/GlobalStyles';
import { SoccerField } from '../../styles/SoccerField';
import MyTeams from '../../components/MyTeams';
import TopTeams from '../../components/TopTeams';
import InitialsIcon from '../../components/InitialsIcon';
import { GroupMostLessPicked } from './styled';
// import * as exampleActions from '../../store/modules/example/actions';

const mostPicked = 'Jesé Rodríguez Ruiz';
const mostPickedPerc = 46;
const lessPicked = 'Harry Kane';
const lessPickedPerc = 5;

export default function Home() {
  // const dispatch = useDispatch();

  return (
    <Row>
      <Col mobile="100" default="50">
        <Container fullscreenHeight>
          <MyTeams />
        </Container>
      </Col>
      <Col mobile="100" default="50">
        <Container>
          <TopTeams />
        </Container>
        <SoccerField orientation="Landscape">
          <div className="halfField" />
          <div className="circleField" />
          <GroupMostLessPicked>
            <Row>
              <Col mobile="50" default="50">
                <h2>Most picked player</h2>
                <Row>
                  <Col mobile="50" default="50">
                    <InitialsIcon
                      name={mostPicked}
                      size={100}
                      fontSize={50}
                      effect="mostPicked"
                    />
                  </Col>
                  <Col mobile="50" default="50">
                    <h3>{mostPickedPerc}%</h3>
                    <h4>{mostPicked}</h4>
                  </Col>
                </Row>
              </Col>
              <Col mobile="50" default="50">
                <h2>Less picked player</h2>
                <Row>
                  <Col mobile="50" default="50">
                    <InitialsIcon
                      name={lessPicked}
                      size={100}
                      fontSize={50}
                      effect="lessPicked"
                    />
                  </Col>
                  <Col mobile="50" default="50">
                    <h3>{lessPickedPerc}%</h3>
                    <h4>{lessPicked}</h4>
                  </Col>
                </Row>
              </Col>
            </Row>
          </GroupMostLessPicked>
        </SoccerField>
      </Col>
    </Row>
  );
}
