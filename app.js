const express = require("express")
const app = express()

const simpleRoute = require("./src/routes/simple")

const Port = process.env.PORT || 8000;

const PathPrefix = process.env.PATH_PREFIX ? `/${process.env.PATH_PREFIX}` : "/api";

app.use(express.json());

app.use(PathPrefix, simpleRoute);

const server = app.listen(Port, () => {
    console.log(`Express Server up in port ${Port}`);
    // console.log(PathPrefix);  //this is the pathprefix env variable value
})


//*  graceful shutdown

process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    console.log('Closing http server.');
    server.close(() => {
      console.log('HTTP server closed');
      process.exit(0);
    })
  })
