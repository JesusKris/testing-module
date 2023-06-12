#### Theory

###### Is the student able to clearly explain the importance of software testing?

###### Is the student able to list out some common testing types?

###### Is the student able to clearly explain what is unit testing?

###### Is the student able to clearly explain what is test coverage?

###### Is the student able to clearly explain what are test suites?

###### Is the student able to clearly explain what does 100% test coverage mean?

###### Is the student able to clearly explain what healthy and unhealthy path mean?

#### Functional

###### Are you able to verify that the student has not changed anything inside the given application file?

###### Are you able to verify that the student has written 2 unit tests per public method: happy & unhappy path? Totallying at 12 tests.

###### Has the student used Jest's describe method?

###### Does the students filesystem match this:
```
...
-- src
  - calculator.js
-- tests
  - calculator.test.js
  - user-input.test.js
...
```

###### Ask the student to run their tests. Does the output match this:
```
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