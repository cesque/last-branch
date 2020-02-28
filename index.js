#!/usr/bin/env node

const exec = require('child_process').execSync

let reflog = exec('git reflog -n 20').toString()
let regex = /checkout: moving from (\S+) to (\S+)/

let result = regex.exec(reflog)

if(result) {
    let from = result[1]
    let to = result[2]

    console.log(from)
}