import abcdFn from "./another.js"
import d, {named_fn2 as another_Fn2, named_fn, hello as hello_named_side} from "./named.js";
import {hello as hello_another_side} from "./another.js"
abcdFn();

another_Fn2();
named_fn();

d();

hello_named_side();
hello_another_side();