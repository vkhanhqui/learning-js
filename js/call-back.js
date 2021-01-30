// Callback
// là hàm được truyền qua đối số khi gọi hàm khác
// 1. là hàm
// 2. được truyền qua đối số
// (một hàm là tham số của 1 hàm khác)
// 3. được gọi lại
// (trong hàm nhận đối số)

//ex1

function func1(param) {
    try {
        console.log("Ex1:");
        console.log("Callback is a " + typeof (param));
        console.log("Detail:\n" + param);
    } catch {
        console.log("param of func1 must be a function");
    }
}

function callBack1() {
    return "is callback";
}

func1(callBack1);


//ex2

function func2(param) {
    try {
        console.log("Ex2 result: " + param(10));
    } catch {
        console.log("param of func2 must be a function");
    }
}

function callBack2(value) {
    return value * 10;
}

func2(callBack2);