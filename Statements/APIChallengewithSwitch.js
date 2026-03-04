let statuscode = 403;
let statusMsg;
switch (statuscode) {
    case 200:
        statusMsg = "PASS - OK: Request successful";
        break;
    case 210:
        statusMsg =  "PASS - Created: Resource created successfully";
        break;
    case 301:
        statusMsg = "WARNING - Moved Permanently: URL has changed";
        break;
    case 400:
        statusMsg =  "FAIL - Bad Request: Check request payload";
        break;
    case 401:
        statusMsg = "FAIL - Unauthorized: Check auth token";
        break;
    case 403:
        statusMsg = "FAIL - Forbidden: Insufficient permissions";
        break;
    case 404:
        statusMsg = "FAIL - Not Found: Check endpoint URL";
        break;
    case 500:
        statusMsg = "FAIL - Internal Server Error: Backend issue";
        break;    
    default:
        statusMsg = "UNKNOWN";
}

console.log("Status:", statusMsg);