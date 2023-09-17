module.exports = function toReadable(n) {
    const nObj1 = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };

    const nObj2a1 = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    if (n.toString().length === 1) {
        for (let key in nObj1) {
            if (n.toString() === key) {
                return nObj1[key];
            }
        }
    }

    if (n.toString().length === 2) {
        for (let key in nObj2a1) {
            if (n.toString() === key) {
                return nObj2a1[key];
            }
        }
    }

        if (n.toString().length === 2) {
            if (n.toString()[0] === '2' && n.toString()[1] === '0') {
                return 'twenty';
            }
            else {
                for (let key in nObj1) {
                    if (n.toString()[0] === '2' && n.toString()[1] === key && n.toString()[1] !== '0') {
                        return `twenty ${nObj1[key]}`;
                    }
                }
            }        
        }
    
        if (n.toString().length === 2) {
            if (n.toString()[0] === '3' && n.toString()[1] === '0') {
                return 'thirty';
            }
            else {
                for (let key in nObj1) {
                    if (n.toString()[0] === '3' && n.toString()[1] === key && n.toString()[1] !== '0') {
                        return `thirty ${nObj1[key]}`;
                    }
                }
            }        
        }

        if (n.toString().length === 2) {
            if (n.toString()[0] === '4' && n.toString()[1] === '0') {
                return 'forty';
            }
            else {
                for (let key in nObj1) {
                    if (n.toString()[0] === '4' && n.toString()[1] === key && n.toString()[1] !== '0') {
                        return `forty ${nObj1[key]}`;
                    }
                }
            }        
        }

        if (n.toString().length === 2) {
            if (n.toString()[0] === '5' && n.toString()[1] === '0') {
                return 'fifty';
            }
            else {
                for (let key in nObj1) {
                    if (n.toString()[0] === '5' && n.toString()[1] === key && n.toString()[1] !== '0') {
                        return `fifty ${nObj1[key]}`;
                    }
                }
            }        
        }

        if (n.toString().length === 2) {
            if (n.toString()[0] === '6' && n.toString()[1] === '0') {
                return 'sixty';
            }
            else {
                for (let key in nObj1) {
                    if (n.toString()[0] === '6' && n.toString()[1] === key && n.toString()[1] !== '0') {
                        return `sixty ${nObj1[key]}`;
                    }
                }
            }        
        }

        if (n.toString().length === 2) {
            if (n.toString()[0] === '7' && n.toString()[1] === '0') {
                return 'seventy';
            }
            else {
                for (let key in nObj1) {
                    if (n.toString()[0] === '7' && n.toString()[1] === key && n.toString()[1] !== '0') {
                        return `seventy ${nObj1[key]}`;
                    }
                }
            }        
        }

        if (n.toString().length === 2) {
            if (n.toString()[0] === '8' && n.toString()[1] === '0') {
                return 'eighty';
            }
            else {
                for (let key in nObj1) {
                    if (n.toString()[0] === '8' && n.toString()[1] === key && n.toString()[1] !== '0') {
                        return `eighty ${nObj1[key]}`;
                    }
                }
            }        
        }

        if (n.toString().length === 2) {
            if (n.toString()[0] === '9' && n.toString()[1] === '0') {
                return 'ninety';
            }
            else {
                for (let key in nObj1) {
                    if (n.toString()[0] === '9' && n.toString()[1] === key && n.toString()[1] !== '0') {
                        return `ninety ${nObj1[key]}`;
                    }
                }
            }        
        }

        if (n.toString().length === 3) {
            let s = '';
            if (n.toString()[0] !== '0') {
                s += `${nObj1[n.toString()[0]]} hundred`;
            }
            if (n.toString()[1] === '1') {
                s += ` ${nObj2a1[n.toString().substring(1)]}`;
            } else if (n.toString()[1] !== '0') {
                if (n.toString()[1] === '2') {
                    s += ' twenty';
                }
                if (n.toString()[1] === '3') {
                    s += ' thirty';
                }
                if (n.toString()[1] === '4') {
                    s += ' forty';
                }
                if (n.toString()[1] === '5') {
                    s += ' fifty';
                }
                if (n.toString()[1] === '6') {
                    s += ' sixty';
                }
                if (n.toString()[1] === '7') {
                    s += ' seventy';
                }
                if (n.toString()[1] === '8') {
                    s += ' eighty';
                }
                if (n.toString()[1] === '9') {
                    s += ' ninety';
                }

                if (n.toString()[2] !== '0') {
                    s += ` ${nObj1[n.toString()[2]]}`;
                }
            } else if (n.toString()[2] !== '0') {
                s += ` ${nObj1[n.toString()[2]]}`;
            }
            return s;
        }
    }























        //     }
        //     if (n.toString()[2]) {
        //         for (let key in nObj1) {
        //             s += `${nObj1[key]}`;
        //     }
        //          }
                
        // }











//}
