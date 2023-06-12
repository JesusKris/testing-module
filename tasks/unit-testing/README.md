# unit-testing | JavaScript | 1

## Learning outcomes

Upon completion of this task, students will achieve the following learning outcomes:

- Demonstrate the ability to write unit tests utilizing Jest and adhere to established best practices.
- Comprehend the significance of testing in software development.
- Gain familiarity with essential concepts such as test coverage, healthy and unhealthy paths.
- Develop proficiency in organizing testing suites effectively.


## Introduction

TODO: theoretical intro
- Why is testing important?
- What kinds of testing exist and hy (unit, integration, e2e), when to use which
- What are unit tests

## Objectives

Your objective is to write unit tests for a sample [calculator](resources/calculator.js) application using [Jest](https://jestjs.io/), which is a widely-used JavaScript testing library developed by Facebook. 

The provided calculator application has been designed with [testability](https://www.sitepen.com/blog/testable-code-best-practices) in mind, making it straightforward to create comprehensive unit tests for its functionalities.

## Instructions
- You are prohibited from changing the given application
- You must reach <u>100% test coverage</u>
- Your unit tests must follow best practices common to Jest
- Every method must be covered with 2 different unit tests:
  - <u>Happy path</u>   
  - <u>Unhappy path</u>
- It is good practice to keep components/classes/modules tests <u>separately</u>, that is why your filesystem must look like this:
```
...
-- src
  - calculator.js
-- tests
  - calculator.test.js
  - user-input.test.js
...
```
- You must use Jest's **describe** method to define <u>test suites</u>
- Your Jest output must match the one shown at [Usage](#usage)


## Usage

```
> npm run test

 PASS  tests/calculator.test.js
 PASS  tests/user-input.test.js

=============================== Coverage summary ===============================
Statements   : 100% ( 22/22 )
Branches     : 100% ( 8/8 )
Functions    : 100% ( 10/10 )
Lines        : 100% ( 22/22 )
================================================================================

Test Suites: 2 passed, 2 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        0.316 s, estimated 1 s
```

## Allowed packages/technologies

- JavaScript
- Jest

## Advice

- [Getting started with Jest](https://jestjs.io/docs/getting-started)
