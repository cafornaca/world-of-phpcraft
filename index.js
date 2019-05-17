// Boilerplate
var express = require("express")
var app = express()

app.set("port", (process.env.PORT || 5000))
app.use(express.static(__dirname + "/public"))


// Wecome and help
app.get("/", function(request, response) {

// TESTING //
  generateDungeon(dungeonSize)

  response.send("It's dangerous to go alone! Use /help for instructions.")
})

app.get("/help", function (request, response) {
  response.send("move with /move/direction")
})


// Movement
app.get("/move/:direction", function(request, response) {
  var direction = request.params.direction.toLowerCase()
  // TODO: Clean input and check validity

  var possibleMovement = ["north","south", "east", "west", "up", "down"]

  if (possibleMovement.indexOf(direction) != -1) {
    response.send("You move " + direction + ".")
  } else {
    response.send("You can only try moving north, south, east, west, up, or down.")
  }
})

// Build the map

// Pick a  basic dungeon size
function getDungeonSize(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Min/Max can be hardcoded to set a limit
var dungeonSize = getDungeonSize(4, 7);

// 0 = Invisible; 1 = Solid
function generateDungeon() {
  var dungeon = [];
  // rooms in dungeon
  for (var i = 0; i < dungeonSize; i++) {
    dungeon[i] = [];
    // dimension of dungeon
    for (var j = 0; j < dungeonSize; j++){
        dungeon[i][j] = [];
        // depth of dungeon
        for (var k = 0; k < dungeonSize; k++){
          if ( k === 0 || k === dungeonSize-1 || j === 0 || i === 0 || j === dungeonSize-1 || i === dungeonSize-1 ) {
            dungeon[i][j].push(1) // Push walls, roof, bedrock
          } else {
            dungeon[i][j].push(0) // Push interior
          }
        }
    }
  }
// Print dungeon out to view in log.
console.log(dungeon)
}


// Boilerplate for Node
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
