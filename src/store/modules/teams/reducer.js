import * as types from '../types';
// import axios from '../../../services/axios';

const initialState = {
  teams: [
    {
      id: 1,
      teamName: 'Manchester United',
      description: 'Squad Man united 2020-21',
      teamWebsite: 'https://www.manutd.com/',
      teamType: 'Real',
      tags: 'English; PL; ChampionsLeage2020;',
      formation: '4 - 3 - 3',
    },
  ],
  searchedPlayers: [
    {
      player_id: 90421,
      player_name: 'Giuseppe Messina',
      firstname: 'Giuseppe',
      lastname: 'Messina',
      number: null,
      position: 'Goalkeeper',
      age: 26,
      birth_date: '12/02/1993',
      birth_place: 'Enna',
      birth_country: 'Italy',
      nationality: 'Italy',
      height: '186 cm',
      weight: '71 kg',
    },
  ],
};

// async function getData(action) {
//   return axios.get(`/players/search/${action.payload.searchPlayer}`);
// }

function VerificarProximoID(teams) {
  return (
    teams.sort((a, b) => {
      if (a.id > b.id) return -1;
      if (a.id < b.id) return 1;
      return 0;
    })[0].id + 1
  );
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SAVE_TEAM_REQUEST: {
      const newState = { ...state };

      const team = action.payload;

      if (team.id) {
        const savedTeam = newState.teams.filter((t) => t.id === +team.id)[0];
        if (savedTeam) {
          savedTeam.teamName = team.teamName;
          savedTeam.description = team.description;
          savedTeam.teamWebsite = team.teamWebsite;
          savedTeam.teamType = team.teamType;
          savedTeam.tags = team.tags;
          savedTeam.formation = team.formation;
          return newState;
        }
      }

      team.id = VerificarProximoID(newState.teams);
      newState.teams.push(team);
      return newState;
    }

    case types.DELETE_TEAM_REQUEST: {
      const newState = { ...state };

      const team = action.payload;
      newState.teams = newState.teams.filter((t) => t.id !== +team.id);

      return newState;
    }

    // case types.SEARCH_PLAYER_REQUEST: {
    //   const newState = { ...state };

    //   const response = getData(action);

    //   newState.searchedPlayers = response.data.api.players;

    //   return newState;
    // }

    default: {
      return state;
    }
  }
}
