# EPAM Fundamentals Final Project

This is an automated testing project for the SauceDemo application using WebdriverIO and Cucumber.

## Prerequisites

- Node.js (version 16 or higher is recommended)
- npm (Node Package Manager)

To install the project dependencies, run:
```bash
npm install
```

## Execution Commands

To run the WebdriverIO e2e tests, use the following command:
```bash
npm run wdio
```

## Reporting

This project uses Allure Reporter. After running the tests, an `allure-results` directory will be generated.
To generate and view the Allure report, run:
```bash
npx allure serve allure-results
```

