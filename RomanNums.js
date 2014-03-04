<!-- hide script from prehistoric web browsers

function convert() {

    var numeral = document.getElementById('inTxt').value;

    try { 
        var digit = romanToDigit(numeral);
        document.getElementById('outTxt').innerHTML = digit;
    }
    catch(e) {
        var error = "That's not a Roman Numeral.";
        document.getElementById('outTxt').innerHTML = error;
    }
}
function romanToDigit(numeral) {

    var stack = new Array();
    var digit = 0;
    
    var vDetected = false;
    var xDetected = false;
    var iCount = 0;
    var vCount = 0;
    var xCount = 0;

    for(var i = 0; i < numeral.length; ++i)
        stack.push(numeral.charAt(i));

    while(stack.length > 0) {
        var tok = stack.pop().toLowerCase();
        if (tok == 'i' && vDetected == false) {
            digit += 1;
            iCount += 1;
        }
        else {
            if (stack.length > 0 && peek(stack).toLowerCase() == 'i') {
                digit -= 1;
                stack.pop();
            }
            if (tok == 'x') {
                digit += 10;
                xDetected = true;
                iCount = 0;
            }
            else if (tok == 'v' && xDetected == false) {
                digit +=  5;
                vDetected = true;
                iCount = 0;
                vCount += 1;
            }
            else
                throw "Illegal Argument Exception";
        }
        if (iCount > 3 || vCount > 1)
            throw "Illegal Argument Exception";
            
    }
    return digit;
}
function peek(s) {
    return s[s.length-1];
}

// -->
