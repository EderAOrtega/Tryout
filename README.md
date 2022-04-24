# Tryout
 Tribal challenge

# Technologies
Node.js
Cypress - framework, javascript based

# Operating system requirements
macOS 10.9 and above (64-bit) / windows 7 and above (64-bit)

# Software installation required
- Node.js version 12 and above installed.
    https://nodejs.org/en/download/
- Cypress (installation instructions alongside running instructions)
- GitHub desktop application (not required but recommended)

# Running tests
- After downloading the git repository in your local computer, follow these steps to execute the automated test cases:
- Open a new cmd terminal and change the directory to the root of the project, where the package.json file is located.
- Run the following command and wait until the installation process is complete:
    npm install cypress --save-dev
- To launch Cypress test runner use the following command:
- Windows: ./node_modules/.bin/cypress open
- MacOS: ./node_modules/cypress/bin/cypress open
- Click on the "challenge.js" file under Jobs_TC folder to run the tests.
- To run the tests without launching the cypress test runner user the following command:
- Windows: ./node_modules/.bin/cypress run --spec  ./cypress/integration/Jobs_TC/challenge.js
- MacOS: ./node_modules/cypress/bin/cypress run --spec ./cypress/integration/Jobs_TC/challenge.js

# Troubleshooting
If you try to open the cypress test runner and it throws an error about "Cypress verification timed out" follow these instructions:
- Open the file "node_modules\cypress\lib\tasks\verify.js" with a text editor (notepad ++  recommended)
- Search for "VERIFY_TEST_RUNNER_TIMEOUT_MS"
- Change the default value "30000" for "100000" 
