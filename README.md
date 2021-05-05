# Equipment dashboard,
A web-based tool to show a dashboard with summary about all the
equipment in an organization. Equipment data is accessible via an api.

## Deployed product can be seen [[here]](https://equipment-dashboard.herokuapp.com/)

## Technologies,
* React
* Node.js
* SCSS
* Redux
* Chartjs
* proxy - handle CORS
* Express

## How to run,

### Dependencies,
* Download and install Node.js - [[here]](https://nodejs.org/en/download/)

### Setup,
* Download or Clone the repository - [[here]](https://github.com/Chamindu97/equipment-dashboard.git)
* Open *.env* file and replace the *PORT* if you want to run the app on any other port (except port 5000).
* Whereas the port 5000 is used to run the *proxy server*.
* Open a Command terminal inside the project directory and run **"npm install"** command.
* This will install all the required node modules.

### Program Execution,

#### Method 1:
* Start the proxy server and web application with two seperate command terminals.
* In the first terminal run **"npm run server-build"** command.
* In the second terminal run **"npm start"** command. 

#### Method 2:
* Start the proxy server and web application concurrently with a single command terminal.
* In the terminal run **"npm run dev"** command.

Any suggestions and upgrades are much appreciated.
Thank you!
