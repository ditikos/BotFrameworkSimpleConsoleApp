const restify = require('restify');
const builder = require('botbuilder');

const connector = new builder.ChatConnector({
    appId: '37d7ab30-a804-4e93-836c-f1e951cd0ff5',
    appPassword: 'httFbkKO3h8YqeWWfxWwJSu'
});

const bot = new builder.UniversalBot(connector);
bot.dialog('/', function(session) {
    session.send('Hello world!');
});

const server = restify.createServer();
server.post('/api/messages', connector.listen());
server.listen(5000, function() {
    console.log("Process started at %d port", 5000);
});