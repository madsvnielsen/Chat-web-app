# Web-based chatting application - quickChat
## Why
For fun - and to learn! 😊
## Using
⚛ React.js\
🔌 Socket.io\
🌍 Express.js

### Features
* Users can create and join chat rooms and chat.
* A list of rooms can be seen when joining a room
* A list of users can be seen in the chat rooms
* Broadcast messages will be sent upon a user joining or leaving a room
* Users can leave rooms by clicking a button or will automatically leave when navigating to a different page.
* Somewhat mobile-friendly, responsive UI.

## How to run

npm is required to run this project.

## Client
All commands must be run in the client directory where the package_lock.json is located.
Run the following to install dependencies.

### `npm install`

Afterwards you can run the app in development mode.
Create a .env file in the project root and create a variable with the url to the server.
`REACT_APP_API_URL=<API_URL>`

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Server
All commands must be run in the server directory where the package_lock.json is located.
Run the following to install dependencies.

### `npm install`

Afterwards you can run the app in development mode by running the dev script.
### `npm run dev`
Runs the server in the development mode.\ 
By default, it is hosted at
[http://localhost:5000](http://localhost:5000) 

