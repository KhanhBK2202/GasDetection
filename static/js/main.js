// Change threshold
var editElement = document.querySelector('.limit__edit');
var updateElement = document.querySelector('.limit__update');
var inputElement = document.querySelector('.limit__input');
var thresholdElement = document.querySelector('.limit__threshold-number');
var gasData = document.querySelector('.data-number');
var optionElement2 = document.querySelector('#option-2');

editElement.onclick = function updateLimit () {
    updateElement.setAttribute('style', 'display: block');
    editElement.setAttribute('style', 'display: none');
    inputElement.setAttribute('style', 'display: block');

    updateElement.onclick = function () {
        thresholdElement.innerText = inputElement.value;
        editElement.setAttribute('style', 'display: block');
        updateElement.setAttribute('style', 'display: none');
        inputElement.setAttribute('style', 'display: none');

        if (optionElement2.checked == true) {
            optionElement2.onclick = function () {
                if (parseInt(gasData.innerText) > parseInt(thresholdElement.innerText)) {
                    for (var i = 0; i < functionElement.length; i++) {
                        var statusElement = functionElement[i].querySelector('.function__status');
                        if (statusElement.innerText == 'OFF' || statusElement.innerText == 'CLOSE')
                        {
                            functionElement[i].setAttribute('style', 'background-image: linear-gradient(0, #52f35a, #29c71a)');
                            if (statusElement.innerText == 'CLOSE')
                            { 
                                statusElement.innerText = 'OPEN';
                            }
                            else {
                                statusElement.innerText = 'ON';
                            }
                        }
                    }
                }
            }
        }
        else {
            optionElement2.onclick = function () {
                if (parseInt(gasData.innerText) > parseInt(thresholdElement.innerText)) {
                    for (var i = 0; i < functionElement.length; i++) {
                        var statusElement = functionElement[i].querySelector('.function__status');
                        if (statusElement.innerText == 'OFF' || statusElement.innerText == 'CLOSE')
                        {
                            functionElement[i].setAttribute('style', 'background-image: linear-gradient(0, #52f35a, #29c71a)');
                            if (statusElement.innerText == 'CLOSE')
                            { 
                                statusElement.innerText = 'OPEN';
                            }
                            else {
                                statusElement.innerText = 'ON';
                            }
                        }
                    }
                }
            }
        }

        // Notification
        var notifyElement = document.querySelector('.notify');
        if (parseInt(gasData.innerText) > parseInt(thresholdElement.innerText)) {
            notifyElement.setAttribute('style', 'display: flex');
        }
        setTimeout(function () {
            notifyElement.classList.add('fadeOut');
        },10000);
        setTimeout(function () {
            notifyElement.setAttribute('style', 'display: none');
            notifyElement.classList.remove('fadeOut');
        },13000);
    } 
}

var inputEnter = document.querySelector('.limit__input');
inputEnter.onkeydown = function (e) {
    switch (e.which) {
        case 13:
            thresholdElement.innerText = inputElement.value;
            editElement.setAttribute('style', 'display: block');
            updateElement.setAttribute('style', 'display: none');
            inputElement.setAttribute('style', 'display: none');

            if (optionElement2.checked == true) {
                optionElement2.onclick = function () {
                    if (parseInt(gasData.innerText) > parseInt(thresholdElement.innerText)) {
                        for (var i = 0; i < functionElement.length; i++) {
                            var statusElement = functionElement[i].querySelector('.function__status');
                            if (statusElement.innerText == 'OFF' || statusElement.innerText == 'CLOSE')
                            {
                                functionElement[i].setAttribute('style', 'background-image: linear-gradient(0, #52f35a, #29c71a)');
                                if (statusElement.innerText == 'CLOSE')
                                { 
                                    statusElement.innerText = 'OPEN';
                                }
                                else {
                                    statusElement.innerText = 'ON';
                                }
                            }
                        }
                    }
                }
            }
            else {
                optionElement2.onclick = function () {
                    if (parseInt(gasData.innerText) > parseInt(thresholdElement.innerText)) {
                        for (var i = 0; i < functionElement.length; i++) {
                            var statusElement = functionElement[i].querySelector('.function__status');
                            if (statusElement.innerText == 'OFF' || statusElement.innerText == 'CLOSE')
                            {
                                functionElement[i].setAttribute('style', 'background-image: linear-gradient(0, #52f35a, #29c71a)');
                                if (statusElement.innerText == 'CLOSE')
                                { 
                                    statusElement.innerText = 'OPEN';
                                }
                                else {
                                    statusElement.innerText = 'ON';
                                }
                            }
                        }
                    }
                }
            }

            // Notification
            var notifyElement = document.querySelector('.notify');
            if (parseInt(gasData.innerText) > parseInt(thresholdElement.innerText)) {
                notifyElement.setAttribute('style', 'display: flex');
            }
            setTimeout(function () {
                notifyElement.classList.add('fadeOut');
            },10000);
            setTimeout(function () {
                notifyElement.setAttribute('style', 'display: none');
                notifyElement.classList.remove('fadeOut');
            },13000);
            break;
    }
}

// Function item
var functionElement = document.querySelectorAll('.function__item');
functionElement[0].onclick = function () {
    if (functionElement[0].querySelector('.function__status').innerText == 'OFF') {
        functionElement[0].setAttribute('style', 'background-image: linear-gradient(0, #52f35a, #29c71a)');
        var statusElement = functionElement[0].querySelector('.function__status');
        statusElement.innerText = 'ON';
    }
    else {
        functionElement[0].setAttribute('style', 'background-image: linear-gradient(0, #f36c42, #d63425)');
        var statusElement = functionElement[0].querySelector('.function__status');
        statusElement.innerText = 'OFF';
    }
}

functionElement[1].onclick = function () {
    if (functionElement[1].querySelector('.function__status').innerText == 'CLOSE') {
        functionElement[1].setAttribute('style', 'background-image: linear-gradient(0, #52f35a, #29c71a)');
        var statusElement = functionElement[1].querySelector('.function__status');
        statusElement.innerText = 'OPEN';
    }
    else {
        functionElement[1].setAttribute('style', 'background-image: linear-gradient(0, #f36c42, #d63425)');
        var statusElement = functionElement[1].querySelector('.function__status');
        statusElement.innerText = 'CLOSE';
    }
}

functionElement[2].onclick = function () {
    if (functionElement[2].querySelector('.function__status').innerText == 'OFF') {
        functionElement[2].setAttribute('style', 'background-image: linear-gradient(0, #52f35a, #29c71a)');
        var statusElement = functionElement[2].querySelector('.function__status');
        statusElement.innerText = 'ON';
    }
    else {
        functionElement[2].setAttribute('style', 'background-image: linear-gradient(0, #f36c42, #d63425)');
        var statusElement = functionElement[2].querySelector('.function__status');
        statusElement.innerText = 'OFF';
    }
}

// Mode
// var optionElement1 = document.querySelector('#option-1');
// optionElement1.onclick = function () {
//     console.log('Option 1');
// }
// var gasData = document.querySelector('.data-number');
// if (optionElement2.checked == true) {
//     // optionElement2.onclick = function () {
//         if (parseInt(gasData.innerText) > parseInt(thresholdElement.innerText)) {
//             for (var i = 0; i < functionElement.length; i++) {
//                 var statusElement = functionElement[i].querySelector('.function__status');
//                 if (statusElement.innerText == 'OFF' || statusElement.innerText == 'CLOSE')
//                 {
//                     functionElement[i].setAttribute('style', 'background-image: linear-gradient(0, #52f35a, #29c71a)');
//                     if (statusElement.innerText == 'CLOSE')
//                     { 
//                         statusElement.innerText = 'OPEN';
//                     }
//                     else {
//                         statusElement.innerText = 'ON';
//                     }
//                 }
//             }
//         }
//     // }
// }
// else {
//     optionElement2.onclick = function () {
//         if (parseInt(gasData.innerText) > parseInt(thresholdElement.innerText)) {
//             for (var i = 0; i < functionElement.length; i++) {
//                 var statusElement = functionElement[i].querySelector('.function__status');
//                 if (statusElement.innerText == 'OFF' || statusElement.innerText == 'CLOSE')
//                 {
//                     functionElement[i].setAttribute('style', 'background-image: linear-gradient(0, #52f35a, #29c71a)');
//                     if (statusElement.innerText == 'CLOSE')
//                     { 
//                         statusElement.innerText = 'OPEN';
//                     }
//                     else {
//                         statusElement.innerText = 'ON';
//                     }
//                 }
//             }
//         }
//     }
// }

// Notification
var notifyElement = document.querySelector('.notify');
if (parseInt(gasData.innerText) > parseInt(thresholdElement.innerText)) {
    notifyElement.setAttribute('style', 'display: flex');
}
setTimeout(function () {
    notifyElement.classList.add('fadeOut');
},10000);
setTimeout(function () {
    notifyElement.setAttribute('style', 'display: none');
    notifyElement.classList.remove('fadeOut');
},13000);

// Close Notification
var closeElement = document.querySelector('.notify__close');
closeElement.onclick = function () {
    notifyElement.setAttribute('style', 'display: none');
}