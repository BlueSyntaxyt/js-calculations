exports.Check = function (first, second) {
    var bool = false;
    if (!first) throw new Error("Missing first argument");
    if (!second) throw new Error("Missing second argument");
    if (!typeof second === "float") {
        if (!typeof second === "int") {
            throw new Error("Second argument is not a float or int");
        }
    }
    if (first == second) {
        bool = true;
    } else {
        bool = false;
    }
    return bool;
}
exports.Calc = function (first, second, way) {
    var third = false;
    if (!first) throw new Error("Missing first argument");
    if (!second) throw new Error("Missing second argument");
    if (!way) throw new Error("Missing instructions on how to calculate. (third argument)");
    if (typeof first === "string") {
        throw new Error("First argument is not a float");
    }
    if (typeof second === "string") {
        throw new Error("Second argument is not a float");
    }
    if (typeof first === "boolean") {
        throw new Error("First argument is not a float");
    }
    if (typeof second === "boolean") {
        throw new Error("Second argument is not a float");
    }
    if (typeof first === "arry") {
        throw new Error("First argument is not a float");
    }
    if (typeof second === "array") {
        throw new Error("Second argument is not a float");
    }
    if (!typeof way === "string") throw new Error("Third argument is not a string");
    if (way == "==") {
        if (first == second) {
            third = true;
        } else {
            third = false;
        }
    } else {
        if (way == "<=") {
            if (first <= second) {
                third = true;
            } else {
                third = false;
            }
        } else {
            if (way == ">=") {
                if (first >= second) {
                    third = true;
                } else {
                    third = false;
                }
            } else {
                if (way == "===") {
                    if (first === second) {
                        third = true;
                    } else {
                        third = false;
                    }
                } else {
                    throw new Error("Third argument is not a valid calculation identifier");
                }
            }
        }
    }
    return third;
}
exports.Maths = function (First, Second, way) {
    var third = false;
    if (!First) throw new Error("Missing first argument");
    if (!Second) throw new Error("Missing second argument");
    if (!way) throw new Error("Missing instructions on how to calculate. (third argument)");
    if (typeof First === "string") {
        throw new Error("First argument is not a float");
    }
    if (typeof Second === "string") {
        throw new Error("Second argument is not a float");
    }
    if (typeof First === "boolean") {
        throw new Error("First argument is not a float");
    }
    if (typeof Second === "boolean") {
        throw new Error("Second argument is not a float");
    }
    if (typeof First === "array") {
        throw new Error("First argument is not a float");
    }
    if (typeof Second === "array") {
        throw new Error("Second argument is not a float");
    }
    if (!typeof way === "string") throw new Error("Third argument is not a string");
    var first = First;
    var second = Second;
    if (way == "+=") {
        third = first += second;
    } else {
        if (way == "-=") {
            third = first -= second;
        } else {
            if (way == "/") {
                third = first / second;
            } else {
                if (way == "*") {
                    third = first * second;
                } else {
                    throw new Error("Third argument is not a valid calculation identifier");
                }
            }
        }
    }
    return third;
}
