# unit-testing | JavaScript | 1

## Learning outcomes

After completing this task a student will be able to:
- write unit tests
- read the code written by other people and understand the functionality
- assert that functions return the expected values matching the requirements

## Introduction

TODO: theoretical intro
- Why is testing important?
- What kinds of testing exist and hy (unit, integration, e2e), when to use which
- What are unit tests

## Objectives

You are given a sample calculator function in the resources [calculator.js](resources/calculator.js). Write unit tests covering the functionality of the calculator.

## Instructions

Make sure you cover the following items in your tests:
- main calculator functions (+, -, *, /, %)
- argument validation

## Usage

Example test:
```javascript
import {describe, expect, test} from '@jest/globals';
import {sum} from './sum';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

## Allowed packages/technologies

- JavaScript
- JEST

## Advice

- [JEST framework](https://jestjs.io/docs/getting-started)
