//因为node的执行是异步的，当异步操作需要保持一定的执行顺序时，就会进行回调函数的嵌套，从而导致回调地狱。（在回调函数中调用其他函数并且一直重复）


//promise  asyc/awiat  蓝鸟。。。

//创建不同的方法每个方法都return一个promise，进行resolve和reject判断，然后在调用时进行链式调用,通过.then方法来进行链式调用。一组链式调用只有一个catch
//但可有多个then


//通过抛出一个错误来手动终止链式调用