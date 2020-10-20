import { google } from "googleapis";

var _token;
var code;

const SCOPES = ["https://www.googleapis.com/auth/tasks.readonly"];

import content from "./credentials.json";

const run = () => {
    authorize(JSON.parse(content), listTaskLists);
};

function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
    );

    // Check if we have previously stored a token.
    if (!_token) return getNewToken(oAuth2Client, callback);

    oAuth2Client.setCredentials(JSON.parse(_token));
    callback(oAuth2Client);
}

function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES,
    });
    console.log("Authorize this app by visiting this url:", authUrl);
    oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error("Error retrieving access token", err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        _token = JSON.stringify(token);
        callback(oAuth2Client);
    });
}

function listTaskLists(auth) {
    const service = google.tasks({ version: "v1", auth });
    service.tasklists.list(
        {
            maxResults: 10,
        },
        (err, res) => {
            if (err) return console.error("The API returned an error: " + err);
            const taskLists = res.data.items;
            if (taskLists) {
                console.log("Task lists:");
                taskLists.forEach((taskList) => {
                    console.log(`${taskList.title} (${taskList.id})`);
                });
            } else {
                console.log("No task lists found.");
            }
        }
    );
}
