#!/usr/bin/env node
import cdk = require("@aws-cdk/core")
import * as iam from "@aws-cdk/aws-iam"

export class AuthenticationStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id:string, props:cdk.StackProps) {
        super(scope, id, props);

        const policyDocument = {
            "Version": "2012-10-17",
            "Statement": [
              {
                "Sid": "ReadWriteSNS",
                "Effect": "Allow",
                "Action": "sns:*",
                "Resource": "*"
              }
            ]
          };
          const customPolicyDocument = iam.PolicyDocument.fromJson(policyDocument);
          new iam.ManagedPolicy(this, 'NotificationsReadWrite', {
            document: customPolicyDocument
          });
    }
}
