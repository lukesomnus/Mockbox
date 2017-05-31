const util = require('./util');

function random(template) {
    let temType = util.whichType(template);

    switch (temType) {
        case 'string':
            // 不是字符模板
            if (template.indexOf('@') < 0) {
                return template;
            }

            if (template.indexOf(',') < 0) {
                new Error('template is wrong');
                return;
            }
            let [type, range] = template.split(',');
            type = type.substr(1)
            range = template.split(',')[1];
            let count = 0;
            let rangeEnd = '';
            let singleRange = '';

            if (range.indexOf('-')) {
                let rangeArrTemp = range.split('-');
                try {
                    rangeStart = parseInt(rangeArrTemp[0]);
                    rangeEnd = parseInt(rangeArrTemp[1]);
                } catch (e) {
                    throw e;
                }
                count = _getRandomNumber(rangeStart, rangeEnd);
            } else {
                count = parseInt(range);
            }

            switch (type) {
                case 'string':
                    return _getStringRandom(count);

            }
            break;
    }
    case 'object':
    

}



function _getStringRandom(count) {
    let randomResult = '';
    let wordArr = 'abcdefghijklmnopglstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let len = wordArr.length;

    for (let i = 0; i < count; i++) {
        let randomNumber = _getRandomNumber(0, len);
        randomResult += wordArr[randomNumber]
    }

    return randomResult;
}

// 活动随机数
function _getRandomNumber(start = 0, end = 10) {

    let sub = end - start;
    let random = Math.floor(Math.random() * sub) + start;
    return random;
}

function _getRandomDate() {

}


function _getRandomPhone() {

}

function _getRandomBoolean() {

    let rn = _getRandomNumber();
    if (rn >= 0 && rn <= 5) {
        return false;
    } else {
        return true;
    }
}

function _getRandomArray(count) {

}
console.log(random('@string,10-100'));