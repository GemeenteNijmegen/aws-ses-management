# AWS SES managment

This repository contains a pipeline and stack that is deployed to multiple accounts.
The stack will create a single Email Identity. 

To add new Email Identities update the emailIdentities list in the [configuration](./src/Configuration.ts).