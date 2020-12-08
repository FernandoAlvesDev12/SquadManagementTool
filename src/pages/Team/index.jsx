import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isURL } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import InitialsIcon from '../../components/InitialsIcon';
import * as actions from '../../store/modules/teams/actions';

import { Form } from './styled';
import { SoccerField } from '../../styles/SoccerField';
import {
  Container,
  Row,
  Col,
  Title,
  Subtitle,
} from '../../styles/GlobalStyles';

import { formationsOptions } from '../../config/squadFomation';

const squadPlayers = [
  'De Gea',
  'Wan Bissaka',
  'Lindelof',
  'Maguire',
  'Alex Telles',
  'Fred',
  'McTominay',
  'Bruno Fernandes',
  '',
  'Rashford',
  'Cavani',
];
const teamTypeOptions = ['Real', 'Fantasy'];

export default function Team({ match, history }) {
  const dispatch = useDispatch();
  const { teams } = useSelector((state) => state.teams);

  const id = get(match, 'params.id', '');
  const [teamName, setTeamName] = useState('');
  const [description, setDescription] = useState('');
  const [teamWebsite, setTeamWebsite] = useState('');
  const [teamType, setTeamType] = useState('');
  const [tags, setTags] = useState('');
  const [searchPlayer, setSearchPlayer] = useState('');
  const [focusedTeamName, setFocusedTeamName] = useState(false);
  const [focusedDescription, setFocusedDescription] = useState(false);
  const [focusedTeamWebsite, setFocusedTeamWebsite] = useState(false);
  const [focusedTags, setFocusedTags] = useState(false);
  const [focusedSearchPlayer, setFocusedSearchPlayer] = useState(false);
  const [formation, setFormation] = useState('5 - 4 - 1');

  useEffect(() => {
    if (!id) return;

    async function getData() {
      const data = teams.filter((team) => team.id === +id)[0];

      if (!data) return;

      setTeamName(data.teamName);
      setDescription(data.description);
      setTeamWebsite(data.teamWebsite);
      setTeamType(data.teamType);
      setTags(data.tags);
      setFormation(data.formation);
    }

    getData();
  }, [id, history]);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (teamName.length < 3 || teamName.length > 40) {
      formErrors = true;
      toast.error('Team name must be between 3 and 40 characters.');
    }

    if (!description) {
      formErrors = true;
      toast.error('The description field is required.');
    }

    if (!isURL(teamWebsite)) {
      formErrors = true;
      toast.error('Please enter a valid website.');
    }

    if (!teamType) {
      formErrors = true;
      toast.error('The team type field is required.');
    }

    if (!tags) {
      formErrors = true;
      toast.error('At least one tag is required for the team.');
    }

    if (formErrors) return;

    dispatch(
      actions.saveTeamRequest({
        id,
        teamName,
        description,
        teamWebsite,
        teamType,
        tags,
        formation,
      })
    );
    Swal.fire({
      title: 'Saved successfully',
      text: 'Your team was successfully saved!',
      icon: 'success',
    }).then(() => {
      history.push('/');
    });
  }

  return (
    <Row>
      <Col mobile="100" default="100">
        <Container>
          <Title>{id ? 'Edit' : 'Create'} your team</Title>
          <Subtitle>Team Information</Subtitle>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col mobile="100" default="30">
                <label
                  htmlFor={teamName}
                  style={{ color: focusedTeamName ? '#C50341' : '' }}
                >
                  Team name
                  <input
                    type="text"
                    id="teamName"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    onFocus={() => setFocusedTeamName(true)}
                    onBlur={() => setFocusedTeamName(false)}
                    placeholder="Insert team name"
                  />
                </label>
                <label
                  htmlFor={description}
                  style={{ color: focusedDescription ? '#C50341' : '' }}
                >
                  Description
                  <textarea
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onFocus={() => setFocusedDescription(true)}
                    onBlur={() => setFocusedDescription(false)}
                  />
                </label>
              </Col>
              <Col mobile="100" default="30">
                <label
                  htmlFor={teamWebsite}
                  style={{ color: focusedTeamWebsite ? '#C50341' : '' }}
                >
                  Team website
                  <input
                    type="text"
                    id="teamWebsite"
                    value={teamWebsite}
                    onChange={(e) => setTeamWebsite(e.target.value)}
                    onFocus={() => setFocusedTeamWebsite(true)}
                    onBlur={() => setFocusedTeamWebsite(false)}
                    placeholder="http://myteam.com"
                  />
                </label>
                <label htmlFor={teamType}>
                  Team type
                  {teamTypeOptions.map((option) => (
                    <>
                      <input
                        key={option}
                        type="radio"
                        id="teamType"
                        name="teamType"
                        value={option}
                        checked={teamType === option}
                        onChange={(e) => setTeamType(e.target.value)}
                      />
                      {option}
                    </>
                  ))}
                </label>
                <label
                  htmlFor={tags}
                  style={{ color: focusedTags ? '#C50341' : '' }}
                >
                  Tags
                  <textarea
                    type="text"
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    onFocus={() => setFocusedTags(true)}
                    onBlur={() => setFocusedTags(false)}
                  />
                </label>
              </Col>
            </Row>
            <Subtitle>Configure Squad</Subtitle>
            <Row>
              <Col mobile="100" default="30">
                <label htmlFor="formation">
                  Formation
                  <select
                    value={formation}
                    onChange={(e) => setFormation(e.target.value)}
                    id="formation"
                  >
                    {formationsOptions.map((formationOption) => (
                      <option
                        key={formationOption.formation}
                        value={formationOption.formation}
                      >
                        {formationOption.formation}
                      </option>
                    ))}
                  </select>
                </label>
                <SoccerField>
                  <div className="halfField" />
                  <div className="circleField" />
                  {formationsOptions
                    .filter((f) => f.formation === formation)[0]
                    .players.map((player, index) => (
                      <InitialsIcon
                        key={player.i}
                        name={squadPlayers[index]}
                        size={45}
                        fontSize={20}
                        squad
                        x={player.x}
                        y={player.y}
                      />
                    ))}
                </SoccerField>
                <button type="submit" className="block">
                  Save
                </button>
              </Col>
              <Col mobile="100" default="30">
                <label
                  htmlFor={searchPlayer}
                  style={{ color: focusedSearchPlayer ? '#C50341' : '' }}
                >
                  Search Players
                  <input
                    type="text"
                    id="searchPlayer"
                    value={searchPlayer}
                    onChange={(e) => setSearchPlayer(e.target.value)}
                    onFocus={() => setFocusedSearchPlayer(true)}
                    onBlur={() => setFocusedSearchPlayer(false)}
                    placeholder="Insert name player"
                  />
                </label>
              </Col>
            </Row>
          </Form>
        </Container>
      </Col>
    </Row>
  );
}

Team.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape([]).isRequired,
};
