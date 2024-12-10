// schedule.js

// Used to store the schedules for various sports and combine them into one schedule based on the location of where they play
// also has functions to get the recent and upcoming games and display them on the sidebar when the location is clicked
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

  const womensBasketballSchedule = [
    { date: "2024-11-09", time: "6:00 PM", location: "St. Louis, MO", opponent: "Sewanee", result: "W 94-59", type: "Women's Basketball" },
    { date: "2024-11-10", time: "3:00 PM", location: "St. Louis, MO", opponent: "Webster University", result: "L 69-78", type: "Women's Basketball" },
    { date: "2024-11-14", time: "6:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Asbury University (Ky.)", result: "W 77-73", type: "Women's Basketball" },
    { date: "2024-11-19", time: "7:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Anderson University (IN)", result: "W 79-62", type: "Women's Basketball" },
    { date: "2024-11-22", time: "5:00 PM", location: "Danville, KY", opponent: "Berry College (Ga.)", result: "W 78-67", type: "Women's Basketball" },
    { date: "2024-11-23", time: "3:00 PM", location: "Danville, KY", opponent: "Centre College", result: "W 63-55", type: "Women's Basketball" },
    { date: "2024-12-04", time: "7:00 PM", location: "Berea, KY", opponent: "Berea College (Ky.)", result: "W 61-43", type: "Women's Basketball" },
    { date: "2024-12-07", time: "1:00 PM", location: "Franklin, IN", opponent: "Franklin College", result: "L 70-71", type: "Women's Basketball" },
    { date: "2024-12-14", time: "1:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Manchester University", result: "", type: "Women's Basketball" },
    { date: "2024-12-18", time: "TBD", location: "TBD", opponent: "UMass Dartmouth", result: "", type: "Women's Basketball" },
    { date: "2024-12-20", time: "TBD", location: "TBD", opponent: "Stevenson University", result: "", type: "Women's Basketball" },
    { date: "2025-01-04", time: "3:00 PM", location: "Bluffton, OH", opponent: "Bluffton University", result: "", type: "Women's Basketball" },
    { date: "2025-01-08", time: "7:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Transylvania University", result: "", type: "Women's Basketball" },
    { date: "2025-01-11", time: "1:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Earlham College", result: "", type: "Women's Basketball" },
    { date: "2025-01-15", time: "7:00 PM", location: "Terre Haute, IN", opponent: "Rose-Hulman", result: "", type: "Women's Basketball" },
    { date: "2025-01-18", time: "1:00 PM", location: "Cincinnati, OH", opponent: "Mount St. Joseph University", result: "", type: "Women's Basketball" },
    { date: "2025-01-22", time: "7:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Berea College (Ky.)", result: "", type: "Women's Basketball" },
    { date: "2025-01-25", time: "1:00 PM", location: "Richmond, IN", opponent: "Earlham College", result: "", type: "Women's Basketball" },
    { date: "2025-01-29", time: "7:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Mount St. Joseph University", result: "", type: "Women's Basketball" },
    { date: "2025-02-01", time: "4:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Bluffton University", result: "", type: "Women's Basketball" },
    { date: "2025-02-05", time: "7:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Rose-Hulman", result: "", type: "Women's Basketball" },
    { date: "2025-02-08", time: "4:00 PM", location: "North Manchester, IN", opponent: "Manchester University", result: "", type: "Women's Basketball" },
    { date: "2025-02-12", time: "7:00 PM", location: "Anderson, IN", opponent: "Anderson University (IN)", result: "", type: "Women's Basketball" },
    { date: "2025-02-15", time: "1:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Franklin College", result: "", type: "Women's Basketball" },
    { date: "2025-02-19", time: "7:00 PM", location: "Lexington, KY", opponent: "Transylvania University", result: "", type: "Women's Basketball" },
    { date: "2025-02-23", time: "TBD", location: "TBD", opponent: "Heartland Collegiate Athletic Conference", result: "", type: "Women's Basketball" }
  ];
  
  const womensVolleyballSchedule = [
    { date: "2024-08-23", time: "1:15 PM", location: "Hanover, IN (Collier Arena)", opponent: "Centre College", result: "", type: "Women's Volleyball" },
    { date: "2024-08-30", time: "11:00 AM", location: "Maryville, TN", opponent: "Randolph-Macon College", result: "W 3-1", type: "Women's Volleyball" },
    { date: "2024-08-30", time: "3:00 PM", location: "Maryville, TN", opponent: "Maryville College", result: "W 3-1", type: "Women's Volleyball" },
    { date: "2024-08-31", time: "3:00 PM", location: "Maryville, TN", opponent: "Brevard College", result: "W 3-0", type: "Women's Volleyball" },
    { date: "2024-09-06", time: "5:00 PM", location: "Columbus, OH", opponent: "Capital University", result: "W 3-1", type: "Women's Volleyball" },
    { date: "2024-09-07", time: "10:00 AM", location: "Columbus, OH", opponent: "Otterbein University", result: "W 3-1", type: "Women's Volleyball" },
    { date: "2024-09-07", time: "2:00 PM", location: "Columbus, OH", opponent: "Bethany College", result: "W 3-0", type: "Women's Volleyball" },
    { date: "2024-09-10", time: "6:30 PM", location: "New Albany, IN", opponent: "Indiana University Southeast", result: "W 3-1", type: "Women's Volleyball" },
    { date: "2024-09-13", time: "4:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Blackburn College", result: "W 3-1", type: "Women's Volleyball" },
    { date: "2024-09-13", time: "6:30 PM", location: "Hanover, IN (Collier Arena)", opponent: "Rhodes College", result: "W 3-1", type: "Women's Volleyball" },
    { date: "2024-09-14", time: "10:00 AM", location: "Hanover, IN (Collier Arena)", opponent: "Trine University", result: "W 3-1", type: "Women's Volleyball" },
    { date: "2024-09-14", time: "2:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Kenyon College", result: "W 3-1", type: "Women's Volleyball" },
    { date: "2024-09-18", time: "7:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Asbury University (Ky.)", result: "W 3-0", type: "Women's Volleyball" },
    { date: "2024-09-21", time: "1:15 PM", location: "Decatur, IL", opponent: "Illinois College", result: "W 3-0", type: "Women's Volleyball" },
    { date: "2024-09-21", time: "3:30 PM", location: "Decatur, IL", opponent: "Millikin University", result: "L 0-3", type: "Women's Volleyball" },
    { date: "2024-09-25", time: "7:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Spalding University (Ky.)", result: "W 3-1", type: "Women's Volleyball" },
    { date: "2024-09-27", time: "5:00 PM", location: "Ada, OH", opponent: "Heidelberg University", result: "L 2-3", type: "Women's Volleyball" },
    { date: "2024-09-28", time: "10:00 AM", location: "Ada, OH", opponent: "Wheaton College (Ill.)", result: "W 3-2", type: "Women's Volleyball" },
    { date: "2024-09-28", time: "3:00 PM", location: "Ada, OH", opponent: "Ohio Northern University", result: "L 1-3", type: "Women's Volleyball" },
    { date: "2024-10-04", time: "6:00 PM", location: "North Manchester, IN", opponent: "Manchester University", result: "L 1-3", type: "Women's Volleyball" },
    { date: "2024-10-12", time: "1:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Berea College (Ky.)", result: "W 3-1", type: "Women's Volleyball" },
    { date: "2024-10-18", time: "7:00 PM", location: "Richmond, IN", opponent: "Earlham College", result: "L 1-3", type: "Women's Volleyball" },
    { date: "2024-10-19", time: "2:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Ohio Wesleyan University", result: "W 3-2", type: "Women's Volleyball" },
    { date: "2024-10-23", time: "7:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Rose-Hulman", result: "W 3-0", type: "Women's Volleyball" },
    { date: "2024-10-26", time: "1:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Franklin College", result: "W 3-2", type: "Women's Volleyball" },
    { date: "2024-10-30", time: "7:00 PM", location: "Cincinnati, OH", opponent: "Mount St. Joseph University", result: "L 2-3", type: "Women's Volleyball" },
    { date: "2024-11-02", time: "2:00 PM", location: "Anderson, IN", opponent: "Anderson University (IN)", result: "W 3-1", type: "Women's Volleyball" },
    { date: "2024-11-06", time: "7:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Transylvania University", result: "L 1-3", type: "Women's Volleyball" },
    { date: "2024-11-09", time: "2:00 PM", location: "Hanover, IN (Collier Arena)", opponent: "Bluffton University", result: "W 3-0", type: "Women's Volleyball" },
    { date: "2024-11-13", time: "7:00 PM", location: "Richmond, IN", opponent: "Earlham College", result: "L 0-3", type: "Women's Volleyball" }
  ];
 
  const mensBasketballSchedule = [
    { date: "2024-11-08", time: "7:00 PM", location: "Hanover, IN. (Collier Arena)", opponent: "Berry College (Ga.)", result: "W 86-72", type: "Men's Basketball" },
    { date: "2024-11-13", time: "7:00 PM", location: "Louisville, KY", opponent: "Spalding University (Ky.)", result: "W 67-66", type: "Men's Basketball" },
    { date: "2024-11-16", time: "2:00 PM MST", location: "Colorado Springs, CO", opponent: "Colorado College", result: "W 72-68", type: "Men's Basketball" },
    { date: "2024-11-23", time: "2:00 PM", location: "Richmond, IN", opponent: "DePauw University", result: "W 78-72", type: "Men's Basketball" },
    { date: "2024-11-24", time: "12:00 PM", location: "Richmond, IN", opponent: "Carnegie Mellon University", result: "L 89-90", type: "Men's Basketball" },
    { date: "2024-12-04", time: "7:30 PM", location: "Hanover, IN. (Collier Arena)", opponent: "Berea College (Ky.)", result: "W 78-70", type: "Men's Basketball" },
    { date: "2024-12-07", time: "3:00 PM", location: "Franklin, IN", opponent: "Franklin College", result: "L 66-74", type: "Men's Basketball" },
    { date: "2024-12-14", time: "3:00 PM", location: "Hanover, IN. (Collier Arena)", opponent: "Manchester University", result: "", type: "Men's Basketball" },
    { date: "2024-12-18", time: "2:00 PM", location: "Anderson, IN", opponent: "Anderson University (IN)", result: "", type: "Men's Basketball" },
    { date: "2024-12-29", time: "6:00 PM", location: "Westerville, OH", opponent: "Denison University", result: "", type: "Men's Basketball" },
    { date: "2024-12-30", time: "4:00 PM", location: "Westerville, OH", opponent: "Otterbein University", result: "", type: "Men's Basketball" },
    { date: "2025-01-04", time: "1:00 PM", location: "Bluffton, OH", opponent: "Bluffton University", result: "", type: "Men's Basketball" },
    { date: "2025-01-08", time: "7:30 PM", location: "Lexington, KY", opponent: "Transylvania University", result: "", type: "Men's Basketball" },
    { date: "2025-01-11", time: "3:00 PM", location: "Hanover, IN. (Collier Arena)", opponent: "Earlham College", result: "", type: "Men's Basketball" },
    { date: "2025-01-15", time: "7:30 PM", location: "Hanover, IN. (Collier Arena)", opponent: "Rose-Hulman", result: "", type: "Men's Basketball" },
    { date: "2025-01-18", time: "2:00 PM", location: "Hanover, IN. (Collier Arena)", opponent: "Mount St. Joseph University", result: "", type: "Men's Basketball" },
    { date: "2025-01-22", time: "7:30 PM", location: "Berea, KY", opponent: "Berea College (Ky.)", result: "", type: "Men's Basketball" },
    { date: "2025-01-25", time: "3:00 PM", location: "Richmond, IN", opponent: "Earlham College", result: "", type: "Men's Basketball" },
    { date: "2025-01-29", time: "7:30 PM", location: "Cincinnati, OH", opponent: "Mount St. Joseph University", result: "", type: "Men's Basketball" },
    { date: "2025-02-01", time: "2:00 PM", location: "Hanover, IN. (Collier Arena)", opponent: "Bluffton University", result: "", type: "Men's Basketball" },
    { date: "2025-02-05", time: "7:30 PM", location: "Terre Haute, IN", opponent: "Rose-Hulman", result: "", type: "Men's Basketball" },
    { date: "2025-02-08", time: "2:00 PM", location: "North Manchester, IN", opponent: "Manchester University", result: "", type: "Men's Basketball" },
    { date: "2025-02-12", time: "7:30 PM", location: "Hanover, IN. (Collier Arena)", opponent: "Anderson University (IN)", result: "", type: "Men's Basketball" },
    { date: "2025-02-15", time: "3:00 PM", location: "Hanover, IN. (Collier Arena)", opponent: "Franklin College", result: "", type: "Men's Basketball" },
    { date: "2025-02-19", time: "7:30 PM", location: "Hanover, IN. (Collier Arena)", opponent: "Transylvania University", result: "", type: "Men's Basketball" },
    { date: "2025-02-22", time: "TBD", location: "TBD", opponent: "HCAC Tournament", result: "", type: "Men's Basketball" }
  ];  
  
  var arenaSchedule = [...womensBasketballSchedule, ...mensBasketballSchedule, ...womensVolleyballSchedule];

  // Sort the merged schedule by date and time
  arenaSchedule.sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateA - dateB;
  });

  export var arenaSchedule;

  export const softballSchedule = [
    { date: "2025-02-24", time: "TBD", location: "TBD", opponent: "TBA", result: "", type: "Softball" },
    { date: "2025-02-25", time: "TBD", location: "TBD", opponent: "TBA", result: "", type: "Softball" },
    { date: "2025-02-26", time: "TBD", location: "TBD", opponent: "TBA", result: "", type: "Softball" },
    { date: "2025-03-08", time: "9:00 AM", location: "Greencastle, Ind.", opponent: "Hope College", result: "", type: "Softball" },
    { date: "2025-03-08", time: "7:00 PM", location: "Greencastle, Ind.", opponent: "DePauw University", result: "", type: "Softball" },
    { date: "2025-03-09", time: "3:00 PM", location: "Greencastle, Ind. (Kops-Bedel Stadium)", opponent: "Millikin University", result: "", type: "Softball" },
    { date: "2025-03-09", time: "5:30 PM", location: "Greencastle, Ind.", opponent: "DePauw University", result: "", type: "Softball" },
    { date: "2025-03-12", time: "4:00 PM", location: "Louisville, Ky.", opponent: "Central College", result: "", type: "Softball" },
    { date: "2025-03-12", time: "6:30 PM", location: "Louisville, Ky.", opponent: "Central College", result: "", type: "Softball" },
    { date: "2025-03-15", time: "2:30 PM", location: "Elizabethtown, Ky.", opponent: "Elmhurst University", result: "", type: "Softball" },
    { date: "2025-03-15", time: "4:45 PM", location: "Elizabethtown, Ky.", opponent: "Carnegie Mellon University", result: "", type: "Softball" },
    { date: "2025-03-16", time: "10:00 AM", location: "Elizabethtown, Ky.", opponent: "University of Wisconsin-Stout", result: "", type: "Softball" },
    { date: "2025-03-16", time: "2:30 PM", location: "Elizabethtown, Ky.", opponent: "Adrian College", result: "", type: "Softball" },
    { date: "2025-03-22", time: "TBD", location: "Wilmington, OH", opponent: "Wilmington College", result: "", type: "Softball" },
    { date: "2025-03-22", time: "TBD", location: "Wilmington, OH", opponent: "Wilmington College", result: "", type: "Softball" },
    { date: "2025-03-27", time: "3:00 PM", location: "Hanover, IN (Kops-Bedel Stadium)", opponent: "Spalding University (Ky.)", result: "", type: "Softball" },
    { date: "2025-03-27", time: "5:30 PM", location: "Hanover, IN (Kops-Bedel Stadium)", opponent: "Spalding University (Ky.)", result: "", type: "Softball" },
    { date: "2025-03-29", time: "1:00 PM", location: "Hanover, IN (Kops-Bedel Stadium)", opponent: "Bluffton University", result: "", type: "Softball" },
    { date: "2025-03-29", time: "3:30 PM", location: "Hanover, IN (Kops-Bedel Stadium)", opponent: "Bluffton University", result: "", type: "Softball" },
    { date: "2025-04-05", time: "1:00 PM", location: "Richmond, IN", opponent: "Earlham College", result: "", type: "Softball" },
    { date: "2025-04-05", time: "3:30 PM", location: "Richmond, IN", opponent: "Earlham College", result: "", type: "Softball" },
    { date: "2025-04-10", time: "5:00 PM", location: "Lexington, KY", opponent: "Transylvania University", result: "", type: "Softball" },
    { date: "2025-04-10", time: "7:00 PM", location: "Lexington, KY", opponent: "Transylvania University", result: "", type: "Softball" },
    { date: "2025-04-12", time: "1:00 PM", location: "Berea, KY", opponent: "Berea College (Ky.)", result: "", type: "Softball" },
    { date: "2025-04-12", time: "3:30 PM", location: "Berea, KY", opponent: "Berea College (Ky.)", result: "", type: "Softball" },
    { date: "2025-04-19", time: "1:00 PM", location: "Hanover, IN (Kops-Bedel Stadium)", opponent: "Manchester University", result: "", type: "Softball" },
    { date: "2025-04-19", time: "3:30 PM", location: "Hanover, IN (Kops-Bedel Stadium)", opponent: "Manchester University", result: "", type: "Softball" },
    { date: "2025-04-23", time: "3:00 PM", location: "Hanover, IN (Kops-Bedel Stadium)", opponent: "Rose-Hulman", result: "", type: "Softball" },
    { date: "2025-04-23", time: "5:30 PM", location: "Hanover, IN (Kops-Bedel Stadium)", opponent: "Rose-Hulman", result: "", type: "Softball" },
    { date: "2025-04-26", time: "1:00 PM", location: "Cincinnati, OH", opponent: "Mount St. Joseph University", result: "", type: "Softball" },
    { date: "2025-04-26", time: "3:30 PM", location: "Cincinnati, OH", opponent: "Mount St. Joseph University", result: "", type: "Softball" },
    { date: "2025-04-30", time: "3:00 PM", location: "Hanover, IN (Kops-Bedel Stadium)", opponent: "Franklin College", result: "", type: "Softball" },
    { date: "2025-04-30", time: "5:30 PM", location: "Hanover, IN (Kops-Bedel Stadium)", opponent: "Franklin College", result: "", type: "Softball" },
    { date: "2025-05-03", time: "1:00 PM", location: "Anderson, IN", opponent: "Anderson University (IN)", result: "", type: "Softball" },
    { date: "2025-05-03", time: "1:00 PM", location: "Anderson, IN", opponent: "Anderson University (IN)", result: "", type: "Softball" },
  ];
  
  export const baseballSchedule = [
    { date: "2025-02-21", time: "12:00 PM", location: "Fayetteville, N.C.", opponent: "University of Mary Washington", result: "", type: "Baseball" },
    { date: "2025-02-22", time: "4:00 PM", location: "Fayetteville, N.C.", opponent: "Methodist University", result: "", type: "Baseball" },
    { date: "2025-02-23", time: "11:00 AM", location: "Fayetteville, N.C.", opponent: "University of Hartford", result: "", type: "Baseball" },
    { date: "2025-02-25", time: "6:00 PM", location: "Demorest, GA", opponent: "Piedmont University", result: "", type: "Baseball" },
    { date: "2025-02-28", time: "TBD", location: "Maryville, TN", opponent: "TBA", result: "", type: "Baseball" },
    { date: "2025-03-01", time: "TBD", location: "Maryville, TN", opponent: "TBA", result: "", type: "Baseball" },
    { date: "2025-03-02", time: "TBD", location: "Maryville, TN", opponent: "TBA", result: "", type: "Baseball" },
    { date: "2025-03-07", time: "TBD", location: "Marietta, Ohio (K.T. Young Ballpark)", opponent: "TBA", result: "", type: "Baseball" },
    { date: "2025-03-08", time: "TBD", location: "Marietta, Ohio", opponent: "TBA", result: "", type: "Baseball" },
    { date: "2025-03-15", time: "11:00 AM", location: "Decatur, IL", opponent: "Millikin University", result: "", type: "Baseball" },
    { date: "2025-03-15", time: "2:00 PM", location: "Decatur, IL", opponent: "Benedictine University", result: "", type: "Baseball" },
    { date: "2025-03-16", time: "10:00 AM", location: "Decatur, IL", opponent: "Cornell College", result: "", type: "Baseball" },
    { date: "2025-03-19", time: "6:00 PM", location: "Louisville, KY", opponent: "Spalding University (Ky.)", result: "", type: "Baseball" },
    { date: "2025-03-22", time: "12:00 PM", location: "Franklin, IN", opponent: "Franklin College", result: "", type: "Baseball" },
    { date: "2025-03-22", time: "3:00 PM", location: "Franklin, IN", opponent: "Franklin College", result: "", type: "Baseball" },
    { date: "2025-03-23", time: "1:00 PM", location: "Hanover, IN (K.T. Young Ballpark)", opponent: "Earlham College", result: "", type: "Baseball" },
    { date: "2025-03-23", time: "4:00 PM", location: "Hanover, IN (K.T. Young Ballpark)", opponent: "Earlham College", result: "", type: "Baseball" },
    { date: "2025-03-26", time: "4:00 PM", location: "Hanover, IN (K.T. Young Ballpark)", opponent: "Otterbein University", result: "", type: "Baseball" },
    { date: "2025-03-28", time: "6:00 PM", location: "Cincinnati, OH", opponent: "Mount St. Joseph University", result: "", type: "Baseball" },
    { date: "2025-03-28", time: "9:00 PM", location: "Cincinnati, OH", opponent: "Mount St. Joseph University", result: "", type: "Baseball" },
    { date: "2025-03-29", time: "1:00 PM", location: "Cincinnati, OH", opponent: "Mount St. Joseph University", result: "", type: "Baseball" },
    { date: "2025-04-01", time: "4:00 PM", location: "Hanover, IN (K.T. Young Ballpark)", opponent: "Spalding University (Ky.)", result: "", type: "Baseball" },
    { date: "2025-04-04", time: "7:00 PM", location: "Terre Haute, IN", opponent: "Rose-Hulman", result: "", type: "Baseball" },
    { date: "2025-04-05", time: "1:00 PM", location: "Terre Haute, IN", opponent: "Rose-Hulman", result: "", type: "Baseball" },
    { date: "2025-04-05", time: "4:00 PM", location: "Terre Haute, IN", opponent: "Rose-Hulman", result: "", type: "Baseball" },
    { date: "2025-04-12", time: "12:00 PM", location: "Berea, KY", opponent: "Berea College (Ky.)", result: "", type: "Baseball" },
    { date: "2025-04-12", time: "3:00 PM", location: "Berea, KY", opponent: "Berea College (Ky.)", result: "", type: "Baseball" },
    { date: "2025-04-13", time: "1:00 PM", location: "Hanover, IN (K.T. Young Ballpark)", opponent: "Manchester University", result: "", type: "Baseball" },
    { date: "2025-04-13", time: "4:00 PM", location: "Hanover, IN (K.T. Young Ballpark)", opponent: "Manchester University", result: "", type: "Baseball" },
    { date: "2025-04-18", time: "8:00 PM", location: "Lexington, KY", opponent: "Transylvania University", result: "", type: "Baseball" },
    { date: "2025-04-19", time: "2:00 PM", location: "Lexington, KY", opponent: "Transylvania University", result: "", type: "Baseball" },
    { date: "2025-04-19", time: "5:00 PM", location: "Lexington, KY", opponent: "Transylvania University", result: "", type: "Baseball" },
    { date: "2025-04-23", time: "5:00 PM", location: "St. Louis, MO", opponent: "Webster University", result: "", type: "Baseball" },
    { date: "2025-04-26", time: "12:00 PM", location: "Hanover, IN (K.T. Young Ballpark)", opponent: "Bluffton University", result: "", type: "Baseball" },
    { date: "2025-04-26", time: "3:00 PM", location: "Hanover, IN (K.T. Young Ballpark)", opponent: "Bluffton University", result: "", type: "Baseball" },
    { date: "2025-04-27", time: "2:00 PM", location: "Westerville, OH", opponent: "Otterbein University", result: "", type: "Baseball" },
    { date: "2025-05-03", time: "1:00 PM", location: "Hanover, IN (K.T. Young Ballpark)", opponent: "Anderson University (IN)", result: "", type: "Baseball" },
    { date: "2025-05-03", time: "4:00 PM", location: "Hanover, IN (K.T. Young Ballpark)", opponent: "Anderson University (IN)", result: "", type: "Baseball" },
    { date: "2025-05-04", time: "12:00 PM", location: "Hanover, IN (K.T. Young Ballpark)", opponent: "Anderson University (IN)", result: "", type: "Baseball" },
  ];
  
    const footballSchedule =[
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

  const mensLacrosseSchedule = [
    { date: "2024-02-10", time: "1:00 PM", location: "New Concord, OH", opponent: "Muskingum University", result: "L 7-23", type: "Men's Lacrosse" },
    { date: "2024-02-17", time: "3:30 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Wilmington College", result: "W 23-2", type: "Men's Lacrosse" },
    { date: "2024-02-24", time: "2:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Concordia University (Wis.)", result: "L 4-23", type: "Men's Lacrosse" },
    { date: "2024-03-01", time: "1:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Centenary College (Louisiana)", result: "W 10-5", type: "Men's Lacrosse" },
    { date: "2024-03-06", time: "7:00 PM", location: "Lexington, KY", opponent: "Transylvania University", result: "L 3-20", type: "Men's Lacrosse" },
    { date: "2024-03-09", time: "1:00 PM", location: "Tiffin, OH", opponent: "Heidelberg University", result: "W 6-3", type: "Men's Lacrosse" },
    { date: "2024-03-12", time: "7:00 PM", location: "Danville, KY", opponent: "Centre College", result: "L 2-24", type: "Men's Lacrosse" },
    { date: "2024-03-16", time: "2:00 PM", location: "Crawfordsville, IN", opponent: "Wabash College", result: "L 8-18", type: "Men's Lacrosse" },
    { date: "2024-03-20", time: "4:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "DePauw University", result: "L 5-17", type: "Men's Lacrosse" },
    { date: "2024-03-27", time: "4:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Kalamazoo College", result: "L 5-12", type: "Men's Lacrosse" },
    { date: "2024-03-29", time: "3:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Trine University", result: "L 3-15", type: "Men's Lacrosse" },
    { date: "2024-04-03", time: "7:00 PM", location: "Richmond, IN", opponent: "Earlham College", result: "W 13-4", type: "Men's Lacrosse" },
    { date: "2024-04-13", time: "1:00 PM", location: "Louisville, KY", opponent: "Spalding University (Ky.)", result: "W 17-5", type: "Men's Lacrosse" },
    { date: "2024-04-14", time: "2:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Anderson University (IN)", result: "W 15-6", type: "Men's Lacrosse" },
    { date: "2024-04-20", time: "4:00 PM", location: "TBD (Alumni Stadium)", opponent: "Mount St. Joseph University", result: "W 21-3", type: "Men's Lacrosse" },
    { date: "2024-04-24", time: "4:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Anderson University (IN)", result: "W 23-7", type: "Men's Lacrosse" },
    { date: "2024-04-27", time: "4:00 PM", location: "Lexington, KY", opponent: "Transylvania University", result: "L 4-27", type: "Men's Lacrosse" },
  ];
  
  const womensLacrosseSchedule = [
    { date: "2024-02-10", time: "1:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Centre College", result: "L 2-23", type: "Women's Lacrosse" },
    { date: "2024-02-17", time: "1:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Bethel University (Ind.)", result: "L 7-17", type: "Women's Lacrosse" },
    { date: "2024-02-24", time: "11:00 AM", location: "Hanover, IN (Alumni Stadium)", opponent: "Huntingdon College", result: "W 14-4", type: "Women's Lacrosse" },
    { date: "2024-02-26", time: "6:00 PM", location: "Waynesburg, PA", opponent: "Waynesburg University", result: "W 20-3", type: "Women's Lacrosse" },
    { date: "2024-02-28", time: "5:00 PM", location: "New Concord, OH", opponent: "Muskingum University", result: "L 10-12", type: "Women's Lacrosse" },
    { date: "2024-03-02", time: "12:00 PM", location: "Greencastle, IN", opponent: "DePauw University", result: "L 0-23", type: "Women's Lacrosse" },
    { date: "2024-03-09", time: "1:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Trine University", result: "L 4-19", type: "Women's Lacrosse" },
    { date: "2024-03-24", time: "10:00 AM", location: "Hanover, IN (Alumni Stadium)", opponent: "Bethany College", result: "W 12-9", type: "Women's Lacrosse" },
    { date: "2024-03-27", time: "7:00 PM", location: "Springfield, OH", opponent: "Wittenberg University", result: "L 2-20", type: "Women's Lacrosse" },
    { date: "2024-03-30", time: "4:00 PM", location: "Adrian, MI", opponent: "Adrian College", result: "Cancelled", type: "Women's Lacrosse" },
    { date: "2024-04-06", time: "1:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Mount St. Joseph University", result: "W 13-3", type: "Women's Lacrosse" },
    { date: "2024-04-10", time: "4:00 PM", location: "Louisville, KY", opponent: "Spalding University (Ky.)", result: "L 12-15", type: "Women's Lacrosse" },
    { date: "2024-04-17", time: "4:00 PM", location: "Hanover, IN (Alumni Stadium)", opponent: "Earlham College", result: "Cancelled", type: "Women's Lacrosse" },
    { date: "2024-04-20", time: "12:00 PM", location: "Anderson, IN", opponent: "Anderson University (IN)", result: "L 3-15", type: "Women's Lacrosse" },
    { date: "2024-04-23", time: "4:00 PM", location: "Lexington, KY", opponent: "Transylvania University", result: "L 6-22", type: "Women's Lacrosse" },
    { date: "2024-04-27", time: "1:00 PM", location: "TBD (Alumni Stadium)", opponent: "Franklin College", result: "W 12-8", type: "Women's Lacrosse" },
  ];
  
  var stadiumSchedule = [...footballSchedule, ...mensLacrosseSchedule, ...womensLacrosseSchedule];

  // Sort the merged schedule by date and time
  stadiumSchedule.sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateA - dateB;
  });

  export var stadiumSchedule;

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
            <p><strong>Type:</strong> ${nextGame.type}<br>
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
  