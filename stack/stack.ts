#!/usr/bin/env node
import cdk = require("@aws-cdk/core")
import {NotificationsStack} from "./notifications";
import {AuthenticationStack} from "./iam";
const fs = require('fs');

const outdir = process.env["CDK_OUTDIR"];
if (!fs.existsSync(outdir)){
    fs.mkdirSync(outdir);
}

const app = new cdk.App({
    stackTraces : false
})

let deployStacks = Array<cdk.Stack>();
deployStacks.push(new NotificationsStack(app, "notifications", {}));
deployStacks.push(new AuthenticationStack(app, "authentication", {}));

app.synth()