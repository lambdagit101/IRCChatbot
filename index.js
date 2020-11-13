
// requiring the config file so we know what information to specify, such as the irc nickname or server

const { channels, server, nickname, port, autoRejoin, username, realname } = require('./config.json');

// requiring all required packages for the chatbot to work

const Cathy = require("cathy.js");
var irc = require('irc');

// initializing the chatbot and the irc functionality

const cathy = new Cathy();
var client = new irc.Client(server, nickname, {
    realName: realname,
    userName: username,
    autoRejoin: autoRejoin,
    port: port,
    channels: channels,
});

// message listener, so we know when a message is sent, then trigger the chatbot

client.addListener('message', function (from, to, message) {

    // log the messages sent to the channel(s)

    console.log(from + ' => ' + to + ': ' + message);

    // trigger the chatbot, send the response, and log it to the console

    const msg = cathy.chat(message);
    client.say(to, msg);
    console.log(`${nickname} => ${to}: ${msg}`);
});

// this leaves the channels when quitting the process

process.on('SIGHUP', function() {
  console.log('Quitting...');
  client.part(channels);
  process.exit();
});
