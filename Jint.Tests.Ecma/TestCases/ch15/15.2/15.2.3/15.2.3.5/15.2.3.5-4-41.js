/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-41.js
 * @description Object.create - value of one property in 'Properties' is undefined (8.10.5 step 1)
 */


function testcase() {

        try {
            Object.create({}, {
                prop: undefined 
            });
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
