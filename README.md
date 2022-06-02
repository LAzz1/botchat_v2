This project is about a command bot chat on the streaming plataform Twitch.tv.

You may are asking yourself "why v2?", because this is my second time trying to do that bot, the first was in 2019 when I start to programming, and obviously my code 
was not so good. So some years before with more experience I decide to programming one better.

So lets explaing how this bot works. In Twitch.tv you can watch live streams, inside every live stream you have a chat to communicated with te streamer and I decide
to made a bot that responds some commands inside this chats. I use the prefix "!" to identify commands, so every time you send any message with "!" in the beginning
of the syntax the bot will respond you with a message, with he knows the command he will answer the programmed answer, if he doesnt know the command he will respond
something like "Sorry I didnt know this command :(".

Some feautures that I included and I pretend to Included in this project. First I will start with included features that I cannt do in the first version of this bot
that I made. You can add, remove or edit your commands just calling the bot inside chat with "!add/!remove/!edit", and a feature that I'm working for is the "!sr",
the Song Request, every time some one send "!sr music_link.com" will start to play in the streamer browser the music that the viewer asked in the chat, just with a 
simple command!! And to make my code global, I intend as a last step, make a web site that catch the necessary information to my bot run in any chat, and automatizated
the process of creat files.

Let me explaing how the code was build.

In the main file "server.js" I start the bot and pass in wich channel he will listening the chats, for that I made for wich channel a file with the channel name, so
to know in wich channel the bot needed to respond, the code read the name of the files. Thats good because every time I want to put my code inside someone live stream
I just need to creat a new file with the channel name with the same code inside all others files. Thats the role of the web site, the people will loging with their
Twitch.tv accounts and will provide me his channel's name, with this name I will just needed to creat a new file with the respective name inside my code, it's so
simple and dynamic!
