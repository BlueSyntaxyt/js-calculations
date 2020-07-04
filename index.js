exports.Check = function (first, second) {
    var bool = false;
    if (!first) throw new Error("Missing first argument");
    if (!second) throw new Error("Missing second argument");
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
    if (!typeof first === "float") {
        if (!typeof first === "int") {
            throw new Error("First argument is not a float or int");
        }
    }
    if (!typeof second === "float") {
        if (!typeof second === "int") {
            throw new Error("Second argument is not a float or int");
        }
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