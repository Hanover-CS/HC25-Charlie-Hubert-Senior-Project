// schedule.js

// Schedules for various sports
  export const soccerSchedule = [
    { date: "2024-08-19", time: "5:00 PM CST", location: "Evansville, IN", opponent: "University of Evansville", result: "", type: "Men's Soccer" },
    { date: "2024-08-20", time: "6:00 PM", location: "Springfield, OH", opponent: "Wittenberg University", result: "", type: "Women's Soccer" },
    { date: "2024-08-20", time: "4:30 PM", location: "Columbus, IN", opponent: "IUPUC", result: "", type: "Men's Soccer" },
    { date: "2024-08-24", time: "2:00 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Ohio Northern University", result: "", type: "Women's Soccer" },
    { date: "2024-08-30", time: "7:30 PM", location: "Louisville, KY", opponent: "Spalding University (Ky.)", result: "W 3-1", type: "Men's Soccer" },
    { date: "2024-08-30", time: "7:00 PM", location: "Columbus, OH", opponent: "Capital University", result: "W 2-1", type: "Women's Soccer" },
    { date: "2024-09-01", time: "5:30 PM", location: "Louisville, KY", opponent: "Centre College", result: "L 1-3", type: "Men's Soccer" },
    { date: "2024-09-01", time: "2:00 PM", location: "Westerville, OH", opponent: "Otterbein University", result: "L 0-1", type: "Women's Soccer" },
    { date: "2024-09-06", time: "5:00 PM", location: "Westerville, OH", opponent: "Otterbein University", result: "L 0-1", type: "Men's Soccer" },
    { date: "2024-09-07", time: "7:00 PM", location: "Wilmington, OH", opponent: "Wilmington College", result: "W 2-1", type: "Women's Soccer" },
    { date: "2024-09-07", time: "5:00 PM", location: "Columbus, OH", opponent: "Capital University", result: "T 1-1", type: "Men's Soccer" },
    { date: "2024-09-13", time: "5:00 PM", location: "Greencastle, IN", opponent: "DePauw University", result: "L 0-2", type: "Men's Soccer" },
    { date: "2024-09-14", time: "2:00 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Kenyon College", result: "W 6-0", type: "Women's Soccer" },
    { date: "2024-09-14", time: "4:00 PM", location: "Hanover, IN", opponent: "Wilmington College", result: "T 3-3", type: "Men's Soccer" },
    { date: "2024-09-18", time: "5:00 PM", location: "Greencastle, IN", opponent: "DePauw University", result: "L 0-2", type: "Men's Soccer" },
    { date: "2024-09-18", time: "5:00 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Asbury University (Ky.)", result: "W 3-1", type: "Women's Soccer" },
    { date: "2024-09-20", time: "6:00 PM (CST)", location: "Naperville, IL", opponent: "North Central College", result: "L 2-6", type: "Women's Soccer" },
    { date: "2024-09-21", time: "3:30 PM", location: "Hanover, IN", opponent: "Asbury University (Ky.)", result: "L 1-2", type: "Men's Soccer" },
    { date: "2024-09-23", time: "5:00 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Spalding University (Ky.)", result: "W 5-1", type: "Women's Soccer" },
    { date: "2024-09-23", time: "7:00 PM", location: "Lexington, KY", opponent: "Transylvania University", result: "T 0-0", type: "Men's Soccer" },
    { date: "2024-09-29", time: "5:30 PM", location: "Anderson, IN", opponent: "Anderson University (IN)", result: "L 0-3", type: "Men's Soccer" },
    { date: "2024-09-29", time: "3:00 PM", location: "Anderson, IN", opponent: "Anderson University (IN)", result: "W 2-1", type: "Women's Soccer" },
    { date: "2024-10-05", time: "3:30 PM", location: "Hanover, IN", opponent: "Bluffton University", result: "W 2-0", type: "Men's Soccer" },
    { date: "2024-10-05", time: "1:00 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Bluffton University", result: "W 6-0", type: "Women's Soccer" },
    { date: "2024-10-09", time: "3:30 PM", location: "Hanover, IN", opponent: "Rose-Hulman", result: "T 0-0", type: "Men's Soccer" },
    { date: "2024-10-09", time: "7:00 PM", location: "Terre Haute, IN", opponent: "Rose-Hulman", result: "L 0-1", type: "Women's Soccer" },
    { date: "2024-10-12", time: "3:30 PM", location: "North Manchester, IN", opponent: "Manchester University", result: "W 3-1", type: "Men's Soccer" },
    { date: "2024-10-12", time: "1:00 PM", location: "North Manchester, IN", opponent: "Manchester University", result: "W 5-0", type: "Women's Soccer" },
    { date: "2024-10-16", time: "3:30 PM", location: "Hanover, IN", opponent: "Mount St. Joseph University", result: "W 9-0", type: "Men's Soccer" },
    { date: "2024-10-16", time: "7:00 PM", location: "Cincinnati, OH", opponent: "Mount St. Joseph University", result: "L 1-2", type: "Women's Soccer" },
    { date: "2024-10-19", time: "3:30 PM", location: "Hanover, IN", opponent: "Berea College (Ky.)", result: "W 5-0", type: "Men's Soccer" },
    { date: "2024-10-19", time: "1:00 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Berea College (Ky.)", result: "W 10-0", type: "Women's Soccer" },
    { date: "2024-10-23", time: "7:00 PM", location: "Lexington, KY", opponent: "Transylvania University", result: "T 0-0", type: "Men's Soccer" },
    { date: "2024-10-23", time: "3:30 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Transylvania University", result: "L 2-1", type: "Women's Soccer" },
    { date: "2024-10-26", time: "3:30 PM", location: "Richmond, IN", opponent: "Earlham College", result: "W 3-1", type: "Men's Soccer" },
    { date: "2024-10-26", time: "1:00 PM", location: "Richmond, IN", opponent: "Earlham College", result: "W 4-0", type: "Women's Soccer" },
    { date: "2024-10-29", time: "7:00 PM", location: "Franklin, IN", opponent: "Franklin College", result: "W 3-1", type: "Men's Soccer" },
    { date: "2024-10-30", time: "3:30 PM", location: "Hanover, IN (Soccer Complex)", opponent: "Franklin College", result: "W 3-0", type: "Women's Soccer" }
  ];
  
  
  export const footballSchedule = [
    { date: "2024-09-07", time: "1:30 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Centre College", result: "L 12-27", type: "Football" },
    { date: "2024-09-14", time: "6:00 PM", location: "Indianapolis, IN", opponent: "Butler University", result: "L 0-53",type: "Football" },
    { date: "2024-09-21", time: "1:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "The University of Olivet", result: "W 56-14", type: "Football" },
    { date: "2024-10-05", time: "1:30 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Mount St. Joseph University", result: "L 41-49", type: "Football" },
    { date: "2024-10-12", time: "2:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Rose-Hulman", result: "W 37-16", type: "Football" },
    { date: "2024-10-19", time: "1:30 PM", location: "Anderson, IN", opponent: "Anderson University (IN)", result: "W 35-0", type: "Football" },
    { date: "2024-10-26", time: "1:30 PM", location: "North Manchester, IN", opponent: "Manchester University", result: "", type: "Football" },
    { date: "2024-11-02", time: "1:30 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Bluffton University", result: "", type: "Football" },
    { date: "2024-11-09", time: "1:30 PM", location: "Defiance, OH", opponent: "Defiance College", result: "", type: "Football" },
    { date: "2024-11-16", time: "1:30 PM", location: "Franklin, IN", opponent: "Franklin College", result: "", type: "Football" }
  ];

  export const tennisSchedule = [
  { date: "2024-09-07", time: "TBD", location: "Greencastle, IN", opponent: "DePauw University", result: "", type: "Men's Tennis" },
  { date: "2024-09-20", time: "TBD", location: "St. Louis, MO", opponent: "Washington University in St. Louis", result: "", type: "Men's Tennis" },
  { date: "2024-09-21", time: "TBD", location: "St. Louis, MO", opponent: "Washington University in St. Louis", result: "", type: "Men's Tennis" },
  { date: "2024-10-05", time: "11:00 AM", location: "Hanover, IN", opponent: "Shawnee State University (Ohio)", result: "W 5-2", type: "Men's Tennis" },
  { date: "2024-10-07", time: "3:00 PM", location: "Hanover, IN (Zeddies Tennis Center)", opponent: "Johnson University - Tennessee", result: "L 2-5", type: "Men's Tennis" },
  { date: "2024-10-12", time: "12:00 PM", location: "North Manchester, IN", opponent: "Manchester University", result: "W 7-0", type: "Men's Tennis" },
  { date: "2024-10-19", time: "12:00 PM", location: "Hanover, IN", opponent: "Berea College (Ky.)", result: "W 7-0", type: "Men's Tennis" }
  ];
  
  // Function to get recent and upcoming games for a given schedule
  export function getRecentAndUpcomingGames(schedule) {
    const now = new Date();
    let recentGame = null;
    let nextGame = null;
  
    for (const game of schedule) {
      const gameDate = new Date(game.date + ' ' + game.time);
  
      if (gameDate < now && (!recentGame || gameDate > new Date(recentGame.date + ' ' + recentGame.time))) {
        recentGame = game;
      } else if (gameDate >= now && (!nextGame || gameDate < new Date(nextGame.date + ' ' + nextGame.time))) {
        nextGame = game;
      }
    }
  
    return { recentGame, nextGame };
  }
  
  // Function to display games in the sidebar
  export function displayGames(schedule) {
    const { recentGame, nextGame } = getRecentAndUpcomingGames(schedule);
    const eventsDiv = document.getElementById("events");
    eventsDiv.innerHTML = ""; // Clear existing content
  
    if (recentGame) {
      eventsDiv.innerHTML += `
        <div class="game">
            <h4>Most Recent Game</h4>
            <p><strong>Type:</strong> ${recentGame.type}<br>
            <strong>Date:</strong> ${recentGame.date}<br>
            <strong>Time:</strong> ${recentGame.time}<br>
            <strong>Location:</strong> ${recentGame.location}<br>
            <strong>Opponent:</strong> ${recentGame.opponent}<br>
            <strong>Result:</strong> ${recentGame.result || "Not available"}</p>
        </div>
      `;
    } else {
      eventsDiv.innerHTML += `<p>No recent games found.</p>`;
    }
  
    if (nextGame) {
      eventsDiv.innerHTML += `
        <div class="game">
            <h4>Next Upcoming Game</h4>
            <p><strong>Type:</strong> ${recentGame.type}<br>
            <strong>Date:</strong> ${nextGame.date}<br>
            <strong>Time:</strong> ${nextGame.time}<br>
            <strong>Location:</strong> ${nextGame.location}<br>
            <strong>Opponent:</strong> ${nextGame.opponent}<br>
        </div>
      `;
    } else {
      eventsDiv.innerHTML += `<p>No upcoming games found.</p>`;
    }
  }
  