import axios from "axios";

const apiKey = "ccea16844b5a447fb3c7a00703a0e4ec";
const url = "http://api.football-data.org/v2/competitions/2021/standings";
function addPosSpace(position) {
    return position.toString().length === 1 ? `${position}    ` : `${position}   `;
}

function addNameSpace(name) {
    var spaceToAdd = 27 - name.length; //Wolves is 26
    var space = " ".repeat(spaceToAdd);
    return `${name}${space}`;
}

export var GetTeams = async () => {
    var positionNamePoints = [];
    const resp = await axios
        .get(
            url,
            {
                headers: {
                    'X-Auth-Token': apiKey
                }
            }
        );
    var teamsData = resp.data.standings[0].table;
    for (var td in teamsData) {
        positionNamePoints.push({
            position: addPosSpace(teamsData[td].position),
            teamName: addNameSpace(teamsData[td].team.name),
            points: teamsData[td].points
        });
    }

    const tbody = positionNamePoints.map(team => `<tr>#${team.position} |${team.teamName}|${team.points}pts</tr>`).join("");
    const thead = `<th>${addPosSpace("Pos")} |${addNameSpace("Team Name")}|Points</th>`;
    document.getElementById("th").innerHTML = thead;
    document.getElementById("tb").innerHTML = tbody;

    console.log(positionNamePoints);
};



  //const teams = ["Arsenal", "Aston Villa", "Brighton & Hove Albion", "Burnley", "Brentford", "Chelsea", "Crystal Palace", "Everton", "Leeds United", "Leicester City", "Liverpool", "Manchester City", "Manchester United", "Newcastle United", "Norwich City", "Southampton", "Tottenham Hotspur", "Watford", "West Ham United", "Wolverhampton Wanderers"];
  // {teams.map((team, index) =>
  //   <p>{index + 1} - {team}</p>
  // )}