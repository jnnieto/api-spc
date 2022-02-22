import * as admin from 'firebase-admin';

// tslint:disable-next-line:no-var-requires
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

export default admin;
