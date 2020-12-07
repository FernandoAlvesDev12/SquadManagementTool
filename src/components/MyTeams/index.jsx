import React from 'react';
import { FaTrash, FaShareAlt, FaPen, FaSort } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Table } from './styled';
import { Title } from '../../styles/GlobalStyles';

export default function MyTeams() {
  return (
    <>
      <Title>
        My teams
        <Link to="team">
          <button type="button" className="plus">
            +
          </button>
        </Link>
      </Title>
      <Table>
        <thead>
          <tr>
            <th>
              Name <FaSort size={12} />
            </th>
            <th colSpan="2">
              Description <FaSort size={12} />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Real Madrid</td>
            <td>Squad 2010-2011 Real</td>
            <td>
              <FaTrash size={12} title="Delete" />
              <FaShareAlt size={12} title="Share" />
              <FaPen size={12} title="Edit" />
            </td>
          </tr>
          <tr>
            <td>Real Madrid</td>
            <td>Galaticos</td>
            <td>
              <FaTrash size={12} />
              <FaShareAlt size={12} />
              <FaPen size={12} />
            </td>
          </tr>
          <tr>
            <td>Real Madrid</td>
            <td>Galaticos</td>
            <td>
              <FaTrash size={12} />
              <FaShareAlt size={12} />
              <FaPen size={12} />
            </td>
          </tr>
          <tr>
            <td>Real Madrid</td>
            <td>Galaticos</td>
            <td>
              <FaTrash size={12} />
              <FaShareAlt size={12} />
              <FaPen size={12} />
            </td>
          </tr>
          <tr>
            <td>Real Madrid</td>
            <td>Galaticos</td>
            <td>
              <FaTrash size={12} />
              <FaShareAlt size={12} />
              <FaPen size={12} />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
