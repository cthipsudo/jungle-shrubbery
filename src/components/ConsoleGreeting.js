function getMessage() {
  let messages = [
    `Hey there! I see you inspecting this site....`,
    `Freeze! Nah jk, if you're here you obviously know what you're doing.`,
    `Whoa...should you really be here right now...?`,

  ];

  var randomMessage = messages[Math.floor(Math.random() * messages.length)]
  return randomMessage;
}

function ConsoleGreeting(){
  console.info(getMessage());
  return null;
}

export default ConsoleGreeting;