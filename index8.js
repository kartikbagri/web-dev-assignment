const btn = document.getElementById('btn');
btn.addEventListener('click', calculate);

function checkValidNumber(num) {
    for(let i = 0; i < num.length; i++) {
        if(num[i] < '0' || num[i] > '9') {
            return false;
        }
    }
    return true;
}

function checkInRange(num) {
    if(parseInt(num) < 0 || parseInt(num) > 999) {
        return false;
    }
    return true;
}

function calculate() {
    let num = document.getElementById('num').value;
    const ans = document.getElementById('ans');
    if(num == '') {
        ans.innerText = 'Please enter a number';
        return;
    }
    if(!checkValidNumber(num)) {
        ans.innerText = 'Not a number';
        return;
    }
    if(!checkInRange(num)) {
        ans.innerText = 'Out of range';
        return;
    }
    const single = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const double = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const triple = ['', 'hundred'];
    const trivial = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let res = '';
    let i = 0;
    num = String(parseInt(num));
    if(num.length === 1) {
        if(parseInt(num) === 0) {
            res = 'zero';
        } else {
            res = single[parseInt(num)];
        }
    } else if(num.length === 2) {
        if(parseInt(num[0]) === 1) {
            res = trivial[parseInt(num[1])];
        } else {
            res = double[parseInt(num[0])] + ' ' + single[parseInt(num[1])];
        }
    } else {
        res = single[parseInt(num[0])] + ' ' + triple[1] + ' ';
        if(parseInt(num[1]) === 1) {
            res += trivial[parseInt(num[2])];
        } else {
            if(parseInt(num[1]) === 0) {
                res += single[parseInt(num[2])];
            } else {
                res += double[parseInt(num[1])] + ' ' + single[parseInt(num[2])];
            }
        }
    }
    ans.innerText = res;
}