import React, { useEffect, useState } from 'react';

import axios from 'axios';

const apiKey = 'ccea16844b5a447fb3c7a00703a0e4ec';
const url = 'http://api.football-data.org/v2/competitions/2021/standings';

export default function FootballTable(){
    const [showTable, setShowTable] = useState(false);
    return (<div>
        <h1>Premier League Table page.</h1>
        <button onClick={() => setShowTable(!showTable)}>Show the Premier League table</button>
        { showTable && <Table></Table>}
    </div>)

}

function Table() {

    let standings = [];
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url, { headers: { 'X-Auth-Token': apiKey } });
            setData(result.data.standings[0].table);
        };

        fetchData();
    }, []);

    if (data) {
        standings = data;
    }

    console.log(standings);
    return (
        <div>
            {standings.length > 0 ? (
                <table>
                    <div>Here is the table{' '}</div>
                    <tbody>
                        <tr>
                            <th>Position</th>
                            <th>Team</th>
                            <th>P</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>GD</th>
                        </tr>
                        {standings.map((team) => {
                            return (
                                <tr>
                                    <td>{team.position}</td>
                                    <td>{team.team.name}</td>
                                    <td>{team.playedGames}</td>
                                    <td>{team.won}</td>
                                    <td>{team.draw}</td>
                                    <td>{team.lost}</td>
                                    <td>{(team.goalsFor - team.goalsAgainst)}</td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                'Loading...'
            )}
        </div>
    );
}