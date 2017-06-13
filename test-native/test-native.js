/**
 * Created by heidsoft on 2017/6/12.
 * @description javascript 设计模式
 */

/**
 * 使用原型，进行对象方法构造
 * @constructor
 */
var Vm = function () {

}

Vm.prototype.start = function () {
    console.log("vm start by prototype")
}

Vm.prototype.stop = function () {
    console.log("vm stop by prototype")
}

var vm1 = new Vm();
vm1.start();
vm1.stop();

/**
 * 使用原型，进行对象方法封装
 * @constructor
 */
var Computer = function () {

}
Computer.prototype = {
    open:function () {
        console.log("computer open ...");
    },
    close:function () {
        console.log("computer stop ...");
    }
}

var computer1 = new Computer();
computer1.open();
computer1.close();

/**
 * 基于函数method接口，进行扩展
 * @param name
 * @param fn
 */
Function.prototype.method = function (name, fn) {
    this.prototype[name] = fn;
}

var Macbook = function () {

}
Macbook.method("open",function () {
    console.log("open macbook");
});
Macbook.method("close",function () {
    console.log("close macbook")
});

/**
 * 无参数执行匿名函数
 */
(function(){
    console.log("执行无参匿名函数");
})();

/**
 * 有参执行匿名函数
 */
(function (name,age) {
    console.log("带参数匿名函数: "+name +" age:"+age)
})("heidsoft",18);


var baz;
(function() {
    var foo = 10;
    var bar = 2;
    baz = function(){
        return foo * bar;
    };
})();
console.log("执行闭包函数"+baz());

//=============================
//用属性检查模仿接口
//=============================
var Interface = function (name, methods) {
    if( arguments.length !=2 ){
        throw new Error("Interface constructor called with "+ arguments.length+
        "arguments, but expected exactly 2.");
    }
    this.name = name;
    this.methods = [];
    for( var i=0, len=methods.length; i<len;i++){
        if( typeof methods[i] !== 'string'){
            throw new Error("Interface constructor expects method names to be" +
             "passed in as a string.");
        }
        this.methods.push(methods[i])
    }
}

Interface.ensureImplements = function (object) {
    if( arguments.length < 2){
        throw new Error("Function interface.ensureImplements called with"+
        arguments.length + "arguments, but expected at least 2.");
    }

    for(var i=1, len = arguments.length; i<len; i++){
        var interface = arguments[i];
        if(interface.constructor !== Interface){
            throw new Error("Funtion Interface.ensureImplements expects arguments"+
            "two and above to be instances of Interface.");
        }
    }

    for(var j=0,methodsLen = interface.methods.length; j<methodsLen;j++){
        var method = interface.methods[j];
        if(!object[method] || typeof object[method]!=='function'){
            throw new Error("Function Interface.ensureImplements:object "+
             "dose not implement the "+ interface.name+
             " interface.Method "+method + " was not found.");
        }
    }
}