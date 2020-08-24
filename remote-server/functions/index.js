const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const apiv1 = require("./apiv1.js").app;

exports.api = functions.https.onRequest(app);

app.use("/api/v1/",apiv1);
