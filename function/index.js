/***
 * © 2021 Austin Dean - github.com/atdean
 *
 * This is a sandbox project for me to learn AWS Lambda + deployment inside-out.
 ***/

const AWS = require('aws-sdk')

const lambda = new AWS.Lambda(); // Client instance scoped outside of handlers for reuse

exports.Handler = async function(event, context) {

}