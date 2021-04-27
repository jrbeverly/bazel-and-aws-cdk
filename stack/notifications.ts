#!/usr/bin/env node
import cdk = require("@aws-cdk/core")
import * as sns from "@aws-cdk/aws-sns"

export class NotificationsStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id:string, props:cdk.StackProps) {
        super(scope, id, props);

        new sns.Topic(this, "OnCompletionEvent", {
            displayName: "OnComplete"
        })
        new sns.Topic(this, "OnFailureEvent", {
            displayName: "OnFailure"            
        })
    }
}
