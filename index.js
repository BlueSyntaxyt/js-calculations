exports.Check = function (first, second, bool) {
    if (!first) throw new Error("Missing first argument");
    if (!second) throw new Error("Missing second argument");
    if (!typeof bool === "boolean") throw new Error("Third argument is not a boolean");
    if (first == second) {
        bool = true;
    } else {
        bool = false;
    }
}
exports.Calc = function (first, second, way, third) {
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
    if (!typeof third === "boolean") throw new Error("Fourth argument is not a boolean");
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
}
