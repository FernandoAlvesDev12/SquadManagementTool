import * as types from '../types';

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
};

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

    default: {
      return state;
    }
  }
}
