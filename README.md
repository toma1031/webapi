
# Express API Example

## Introduction

This is an example of reading log API implementation using Express.

## Usage

1. Install npm.
```bash
$ npm install
```


2. Start the server.
```bash
$ node app.js
```

## API Usage

### Post a reading log

Method: POST  
URI: http://localhost:3000/booklog  
Parameters: name, name2  
Response: { "ok": true, "booklogs": { "name": "abook", "name2": "bbook" }}  
Error: { "ok": false, "error": "invalid parameter" }  

### Get a list of posts logs

Method: GET  
URI: http://localhost:3000/booklog  
Parameters: None  
Response: { "ok": true, "booklogs": { "name": "abook", "name2": "bbook" }}  
