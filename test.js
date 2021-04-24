#!/usr/bin/env gjs

imports.searchPath.unshift(".");
const $ = imports.simpleunittest.SimpleUnitTest

let MyClass =
class MyClass{
    constructor(a, b){
        this._a = a;
        this._b = b;
    }

    equals(other){
        return this._a == other._a && this._b == other._b;
    }
}

$.run({
    "assertEquals - Integer": ()=>{
        $.assertEquals(1, 1);
    },
    "assertNotEquals - Integer": ()=>{
        $.assertNotEquals(1, 2);
    },
    "assertEquals - Boolean": ()=>{
        $.assertEquals(true, true);
    },
    "assertNotEquals - Boolean": ()=>{
        $.assertNotEquals(true, false);
    },
    "assertEquals - String": ()=>{
        $.assertEquals("hello", "hello");
    },
    "assertNotEquals - String": ()=>{
        $.assertNotEquals("hello", "world");
    },
    "assertEquals - Date": ()=>{
        let date1 = new Date(1971, 1, 1);
        let date2 = new Date(1971, 1, 1);
        $.assertEquals(date1, date2);
    },
    "assertNotEquals - Date": ()=>{
        let date1 = new Date();
        let date2 = new Date(1971, 1, 1);
        $.assertNotEquals(date1, date2);
    },
    "assertEquals - Object": ()=>{
        let object1 = new MyClass(1, 2);
        let object2 = new MyClass(1, 2);
        $.assertEquals(object1, object2);
    },
    "assertNotEquals - Object": ()=>{
        let object1 = new MyClass(1, 2);
        let object2 = new MyClass(2, 1);
        $.assertNotEquals(object1, object2);
    },
    "assertEquals - Array": ()=>{
        let array1 = [1, 2, 3];
        let array2 = [1, 2, 3];
        $.assertEquals(array1, array2);
    },
    "assertEquals - Array fails": ()=>{
        let array1 = [1, 2, 3];
        let array2 = [2, 2, 3];
        try{
            $.assertEquals(array1, array2);
        }catch(e){
            return;
        }
        $.fails("Must fails");
    },
    "assertNotEquals - Array": ()=>{
        let array1 = [1, 2, 3];
        let array2 = [3, 2, 2];
        $.assertNotEquals(array1, array2);
    },
    "assertNotEquals - Array fails": ()=>{
        let array1 = [1, 2, 3];
        let array2 = [1, 2, 3];
        try{
            $.assertNotEquals(array1, array2);
        }catch(e){
            return;
        }
        $.fails("Must fails");
    },
    "assertEquals - Dictionary": ()=>{
        let dictionary1 = {"key1": "value1", "key2": "value2"};
        let dictionary2 = {"key1": "value1", "key2": "value2"};
        $.assertEquals(dictionary1, dictionary2);
    },
    "assertNotEquals - Dictionary": ()=>{
        let dictionary1 = {"key1": "value1", "key2": "value2"};
        let dictionary2 = {"key1": "value2", "key2": "value1"};
        $.assertNotEquals(dictionary1, dictionary2);
    },
    "assertEquals - Dictionary fails": ()=>{
        let dictionary1 = {"key1": "value1", "key2": "value2"};
        let dictionary2 = {"key1": "value2", "key2": "value1"};
        try{
            $.assertEquals(dictionary1, dictionary2);
        }catch(e){
            return;
        }
        $.fails("Must fails");
    },
    "assertNotEquals - Dictionary fails": ()=>{
        let dictionary1 = {"key1": "value1", "key2": "value2"};
        let dictionary2 = {"key1": "value1", "key2": "value2"};
        try{
            $.assertNotEquals(dictionary1, dictionary2);
        }catch(e){
            return;
        }
        $.fails("Must fails");
    },
    "assertTrue": ()=>{
        let value = true;
        $.assertTrue(value);
    },
    "assertFalse": ()=>{
        let value = false;
        $.assertFalse(value);
    },
    "assertNull": ()=>{
        let nothing = null;
        $.assertNull(nothing);
    },
    "assertNotNull": ()=>{
        let nothing = "something";
        $.assertNotNull(nothing);
    },
    "assertStrictEquals": ()=>{
        $.assertStrictEquals(true, true);
    },
    "assertStrictNotEquals": ()=>{
        $.assertStrictNotEquals(true, 1);
    },
});
