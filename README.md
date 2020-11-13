# IRCChatbot

IRCChatbot is a simple chatbot built on Node.js (44 lines of code with gaps and comments).

It makes use of these 2 packages:

 1. [cathy.js - Simple chatbot package based on simple ML.](https://www.npmjs.com/package/cathy.js)
 2. [irc - IRC client library written in JavaScript for Node.](https://www.npmjs.com/package/irc)

You can modify some properties in config.json such as the username, realname, channels it connects to, and more.

It learns from every message sent. It usually resets all progress after restart, so restart as rarely as possible.

You can just host an IRC server on your own computer to test the bot out. The bot's default configuration specifies it connects to localhost by default.

## How to run it?

First type `npm i cathy.js` then `npm i irc`.

Tweak your config to what you want it to have.

Then type `node index.js`.

## How does it function?

It learns from every message sent to the channels it's connected in. It answers to absolutely every message, so you should lock it to a specific channel. Locking it to a channel like #freenode on irc.freenode.net would be a disaster and would end up with you getting kicked or banned.

## Does it function well in testing?

I tried, I only got funny results. It's up to you about what the results will be.
