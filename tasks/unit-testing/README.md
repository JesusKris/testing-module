# unit-testing | JavaScript | 1

## Learning outcomes

Upon completion of this task, students will achieve the following learning outcomes:

- Demonstrate the ability to write unit tests utilizing Jest and adhere to established best practices.
- Comprehend the significance of testing in software development.
- Gain familiarity with essential concepts such as test coverage, healthy and unhealthy paths.
- Develop proficiency in organizing testing suites effectively.


## Introduction

Welcome to the module on software testing. In this module, we will explore the fundamental concepts of testing and its significance in software development. Testing plays a crucial role in ensuring the quality, reliability, and robustness of software applications. Through a series of lessons and practical exercises, you will gain a comprehensive understanding of different testing approaches and techniques.

Testing is an integral part of the software development lifecycle as it helps in identifying defects, verifying functionality, and ensuring that the software meets the desired requirements. By conducting thorough testing, we can detect and fix issues early, leading to higher-quality software and a more positive user experience. Testing also helps in reducing risks, enhancing maintainability, and building confidence in the software.

There are various types of testing methodologies that serve different purposes throughout the software development process. Some common types of testing include unit testing, integration testing, end-to-end testing, and acceptance testing. In this module, we will primarily focus on unit testing, integration testing and end-to-end testing.

Unit testing involves testing individual units or components of the software to ensure they function as expected. These units can be functions, methods, classes, or modules. Unit tests are typically written by developers and are focused on testing the smallest testable parts of the codebase. They help identify bugs, validate behavior, and provide a level of confidence in the correctness of the units being tested.

During unit testing, we create test cases that cover different scenarios and edge cases, including both positive (happy path) and negative (unhappy path) scenarios. By thoroughly testing each unit, we can catch errors early and ensure that the units perform as intended.

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
