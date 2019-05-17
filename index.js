// Boilerplate
var express = require("express")
var app = express()
//var io = require("socket.io")(server)

app.set("port", (process.env.PORT || 5000))

// Express helps sanitize user input amongst other purposes.
app.use(express.static(__dirname + "/public"))

// Socket listening for chat
//io.on("connection", (socket) => {
//  console.log("New player connected.")
//})

// Wecome and help
app.get("/", function(request, response) {

// Build dungeon upon entering
generateDungeon(dungeonSize)

  response.send("It's dangerous to go alone! Use /help for instructions.")
})

app.get("/help", function (request, response) {
  response.send("move with /move/direction")
})


class user {
  constructor(name, location) {
    var name;
    var location = spawn();

  function spawn(dungeon) {
    // Get a random location within the dungeonS
    location = dungeon[getDungeonSize(1, dungeonSize-2)][getDungeonSize(1, dungeonSize-2)][getDungeonSize(1, dungeonSize-2)];
    if (location != 1) {
      return location;
    } else {
        // In case it doesn't pass... Just try again.
        return spawn();
      }
    }
  }
}


// Movement
app.get("/move/:direction", function(request, response) {
  var direction = request.params.direction.toLowerCase()

  var possibleMovement = ["north","south", "east", "west", "up", "down"]

  if (possibleMovement.indexOf(direction) != -1) {
    response.send("You move " + direction + ".")
  } else {
    response.send("You can only try moving north, south, east, west, up, or down.")
  }
})

// function checkMove() {
//   // get user location
//   var movement = {
//     "north": dungeon[][+1][],
//     "south": dungeon[][-1][],
//     "east": dungeon[+1][][],
//     "west": dungeon[-1][][],
//     "up": dungeon[][][+1],
//     "down": dungeon[][][+1]
//   };
// }



// Building the dungeon

// Helper function to generate dungeon size.
function getDungeonSize(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// The minimum dungeon size is 4 to allow at least two explorable floors:
  // -- ceiling or ground: cannot pass --
  // -- basement 1 --
  // -- basement 2 --
  // -- bedrock: cannot pass --
const minDungeon = 4;

// Maximum dungeon size can be scaled later on. Leaving it an arbitrary number for now.
const maxDungeon = 10;

// Get dungeonSize using helper function above.
var dungeonSize = getDungeonSize(minDungeon, maxDungeon);

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
return dungeon;



// Boilerplate for Node
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
