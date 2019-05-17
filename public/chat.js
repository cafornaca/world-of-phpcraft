$(function(){
  // Make connection
  var socket = io.connect("http://localhost:3000")

  var message = $("#message")
  var name = $("#name")
  var sendMessage = $("#sendMessage")
  var sendName = $("#sendName")
  var chatDungeon = $("#chatDungeon")

  // Emit name
  sendName.click(function(){
    console.log(name.val())
    socket.emit('changeName', {username: username.val()})
  })

  // Listen for and send a message client-side
  sendMessage.click(function(){
    socket.emit("newMessage", {message: message.val()})
  })

  socket.on("newMessage", (data) => {
    console.log(data)
    chatDungeon.append("<p class='message'>" + data.name + ": " + data.message + "</p>")
  })


});
