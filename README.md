## SYMPHONYTEST:

The repository contains task for symphony recruitment.

## Pre-requisites:

Node.js 18+

## Running Tests Locally

### Clone this repository


### Install Dependencies:

```bash
npm install
```

### Run Tests:

To run the tests, execute the following command.

```bash
npx playwright test
```

This command will run, generate, and open the test report in your default browser.

### Generate report:

The report is generated using the default playwright reporter. To view the report, run the following command.

```bash
npx playwright show-report
```

### Running Tests in GitHub Action CI/CD Pipeline:

 The event trigger is configured to run the test using GitHub Actions triggered on every push and pull_request events. to the repository.
To run the test, make a push to the repository, and the pipeline will be triggered and start running automatically.
To monitor or check the status of the pipeline runs, click on the **Actions** tab to see the workflow.

