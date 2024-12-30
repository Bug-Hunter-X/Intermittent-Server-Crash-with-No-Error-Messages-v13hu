# Intermittent Node.js Server Crash

This repository demonstrates a scenario where a Node.js server crashes intermittently without providing clear error messages in the logs. The server uses the built-in 'http' module and handles a high volume of requests.  This scenario focuses on a potential memory leak or unhandled exception that is difficult to track down.

## Bug Description:

The server crashes randomly without throwing clear exceptions or emitting informative events that would explain the root cause of the issue.

## Solution:

The solution in this example focuses on strengthening error handling and adding more robust logging. By carefully examining these improved mechanisms we can provide more insights into unexpected conditions that may lead to the crashes.

## How to reproduce the bug:

This repository contains two files: `server.js` (the bugged code) and `server-fixed.js` (the fixed code).  Follow the instructions below to test the bug and observe its resolution using the improved approach.

1. Clone the repository
2. Run `npm install`
3. Run `node server.js` to test the buggy code.  You may need to run the server for a period to trigger a crash.  There are no specific indicators when a crash will occur; this is the nature of the bug. 
4. To test the fix, run `node server-fixed.js` .  Observe the improved logging, increased stability, and the ability to get more informative diagnostics.

