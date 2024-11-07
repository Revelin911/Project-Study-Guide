
const topics = ["HTML", "CSS", "Git", "JavaScript"];
function listTopics() {
  for (let x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}
function selectTopic() {
  // const topics = "HTML";
  if (topics === 'HTML') {
    console.log("Let's study HTML!");
  } else if (topics === 'CSS') {
    console.log("Let's study CSS!");
  } else if (topics === 'Git') {
    console.log("Let's study Git!");
  } else if (topics === 'Javascript') {
    console.log("Let's study Javascript!");
  } else {
    console.log('Please try again!');
  }
}
listTopics()

//   const shapes = ["triangle", "square", "pentagon", "circle"];
//   for (let x = 0; x < shapes.length; x++) {
//     console.log(shapes[x]);
//   }

