# Simple Express Server

This is a a simple Node Express framework web server . This app is containerized and hosted in [Quay registry.](quay.io)

You can get the Container image by running the following docker command, 

`docker pull quay.io/narendev/node-express-hello`

The app serves three `GET` routes.
-  `\` -   returns a simple hello message along with a count of how many times it's been pinged.
- `healthz` - returns a `200` code {It is used for liveness probe }
-  `readyz` - returns a `200` code {It is used for readyness probe}

