// classSchedule.js

const scheduleData = [
    { day: "Monday", time: "9:00 AM - 10:30 AM", course: "Introduction to Computer Science", location: "Lynn Hall 120"},
    { day: "Tuesday", time: "10:00 AM - 11:30 AM", course: "Data Structures", location: "Classic Hall 120"},
    { day: "Wednesday", time: "1:00 PM - 2:30 PM", course: "Discrete Mathematics", location: "Science Hall 105"},
    { day: "Thursday", time: "2:00 PM - 3:30 PM", course: "Algorithms", location: "Science Center 107"},
  ];
  
  export function displaySchedule() {
    const scheduleContainer = document.getElementById("schedule-content");
    scheduleContainer.innerHTML = ""; // Clear existing content
  
    scheduleData.forEach(item => {
        const scheduleItem = document.createElement("div");
        scheduleItem.classList.add("schedule-item");
        scheduleItem.innerHTML = `<strong>${item.day}</strong><br>${item.time}<br>${item.course}<br>${item.location}`;
        scheduleContainer.appendChild(scheduleItem);
    });
  }