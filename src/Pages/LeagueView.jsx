import React, { useEffect, useState } from 'react';

import axios from 'axios';

const apiKey = 'ccea16844b5a447fb3c7a00703a0e4ec';
let url = `http://api.football-data.org/v2/competitions/2021/standings`;
let id;
export default function FootballTable(){

    var [showTable, setShowTable] = useState(false);

    function handleSelectTable(e){
        id = e.target.value;
        if(id === 0 || id === undefined){
            return;
        }        
        else{
            var newUrl = `http://api.football-data.org/v2/competitions/${id}/standings`;
            if(url !== newUrl)
            {
                url=newUrl;
                setShowTable(showTable);
            }
        }
        //<button onClick={() => setShowTable(!showTable)}>Show the table</button>
        //<select defaultChecked={setShowTable} onChange={(e) => handleSelectTable(e)} name="Leagues" id="Leagues">
        // <option onChange={() => handleSelectTable("2021")} value="2021">EPL</option>
    }
    
    return (<div className="divTbl">
        <h1>League table page</h1>

        <label for="Leagues">Choose a League:</label>

        <select defaultChecked={setShowTable} onChange={(e) => handleSelectTable(e)} name="Leagues" id="Leagues">
            <option defaultValue="0" disabled>Select:</option>
            <option value="2021">EPL</option>
            <option value="2002">Bundesliga</option>
            <option value="2014">LaLiga</option>
            <option value="2019">SerieA</option>
        </select>
        
        {showTable && <Table></Table>}
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
    return (
        <div>
            {standings.length > 0 ? (
                <table>
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