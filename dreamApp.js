// Dream Application: Creator Planner App
// This file shows example code for skills learned in Unit 0.

// PSEUDOCODE:
// Create variables to store user and task information.
// Build an array of creator tasks.
// Use template literals to display task messages.
// Use logic to check task priority.
// Use array skills to add and access tasks.
// Use a loop to display all tasks.

// Values, Data Types, and Operations:
let userName = "Chris";
let taskName = "Record acoustic chorus video";
let progressPercent = 40;
let isTaskComplete = false;

console.log(userName);
console.log(taskName);
console.log(progressPercent);
console.log(isTaskComplete);

// Stringing Characters Together:
let welcomeMessage = `Hello, ${userName}! Your next task is: ${taskName}.`;
console.log(welcomeMessage);

// Control Structures and Logic:
if (progressPercent >= 100) {
  console.log("This task is complete.");
} else if (progressPercent >= 50) {
  console.log("You are making good progress. Keep going!");
} else {
  console.log("You are still near the beginning. Focus on the next step.");
}

// Building Arrays:
let creatorTasks = [
  "Write song description",
  "Record acoustic chorus video",
  "Edit YouTube Short",
  "Post video to social media"
];

console.log(creatorTasks);

// Using Arrays:
console.log(`First task: ${creatorTasks[0]}`);

creatorTasks.push("Check comments and reply to viewers");

console.log(`Total tasks: ${creatorTasks.length}`);

// Working With Loops:
for (let i = 0; i < creatorTasks.length; i++) {
  console.log(`Task ${i + 1}: ${creatorTasks[i]}`);
}

// Creating and Using Objects:
let project = {
  title: "Waves Acoustic Video",
  platform: "YouTube",
  priority: "High",
  completed: false
};

console.log(`Project: ${project.title}`);
console.log(`Platform: ${project.platform}`);
console.log(`Priority: ${project.priority}`);
console.log(`Completed: ${project.completed}`);