# digitalskola

# TUGAS API Automation web https://restful-api.dev/

### How to Create this Project

1. Clone git hub
2. node -v
3. npm -v
4. npm init -y
5. npm install supertest --save-dev
6. npm install mocha --save-dev
7. npm i chai@4.3.0 --save-dev
8. Create folder testExplorer-testCase-testCase_01.js
9. Create file .mocharc.js outside folder testExplorer 
10. Fill file mocharc.js with : 
    // .mocharc.js
    module.exports = {
    spec: "testExplorer/testCase/*.js",
    timeout: 5000,
    reporter : "spec", 
    }
11. Add in package.json under row test:echo,
    "test:mocha" : "mocha"
11. npm run test:mocha
12. Create folder inside file testExplorer, globalVariable-baseUrl.js
13. Fill file baseUrl with the url :
    const baseUrl = "https://api.restful-api.dev";
    module.exports = baseUrl;

### Reporting

1. Install npm install --save-dev mochawesome
2. Update file .mocharc.js config with :
    reporter: 'mochawesome', // Use mochawesome as the test report generator
    'reporter-option': [
    'reportDir=Report', // Report directory
    'reportFilename=[status]_[datetime]-[name]-report', //Report file name
    'html=true', // enable html report
    'json=false', // disable json report
    'overwrite=false', // disable report file overwrite
    'timestamp=longDate', // add timestamp to report file name
    ], // mochawesome report generator options
3. npm run test:mocha
4. Will showing result Report HTML 
    ![alt text](image.png)
5. Then open the Report HTML
    ![alt text](image-1.png)

### Sample report


