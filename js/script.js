let calcul = document.getElementById('calcul');

let reponse = document.getElementById('reponse');

let one = document.getElementById('one');
let two = document.getElementById('two');
let tree = document.getElementById('tree');
let fore = document.getElementById('fore');
let five = document.getElementById('five');

let samsung = document.getElementById('samsung');

let note = document.getElementById('note');
let s10 = document.getElementById('s10');
let m20 = document.getElementById('m20');
let a12 = document.getElementById('a12');

let huawei = document.getElementById('huawei');

let mt7 = document.getElementById('mt7');
let mat10 = document.getElementById('mat10');
let mat20 = document.getElementById('mat20');
let p10 = document.getElementById('p10');

let tecno = document.getElementById('tecno');

let pop = document.getElementById('pop');
let camon = document.getElementById('camon');
let phantom = document.getElementById('phantom');
let wx4 = document.getElementById('wx4');

let nokia = document.getElementById('nokia');

let lumia = document.getElementById('lumia');
let r52 = document.getElementById('r52');
let j36 = document.getElementById('j36');
let pro = document.getElementById('pro');

let Mi = document.getElementById('mi');

let one1 = document.getElementById('one1');
let oneplus = document.getElementById('oneplus');
let pro2 = document.getElementById('pro2');
let proplus = document.getElementById('proplus');

let nombre1 = document.getElementById('nombre1');
let nombre2 = document.getElementById('nombre2');
let nombre3 = document.getElementById('nombre3');
let nombre4 = document.getElementById('nombre4');
let nombre5 = document.getElementById('nombre5');

note.addEventListener('click', () => {
    valSam = 100;
});
s10.addEventListener('click', () => {
    valSam = 200;
});
m20.addEventListener('click', () => {
    valSam = 300;
});
a12.addEventListener('click', () => {
    valSam = 400;
});

samsung.addEventListener('click', () => {
    if (samsung.checked == true) {
        let dn = document.createElement('p');
        dn.setAttribute('id', 'dan');
        one.appendChild(dn);
        s = 0;
        SamTmp = setInterval(() => {
            dn.textContent = valSam * nombre1.value;
            sam = nombre1.value * valSam;
        }, 100);
    }
    if (samsung.checked == false) {
        let dan = document.getElementById('dan');
        dan.remove();
        s = 1;
    }
});

mt7.addEventListener('click', () => {
    valHua = 100;
});
mat10.addEventListener('click', () => {
    valHua = 200;
});
mat20.addEventListener('click', () => {
    valHua = 300;
});
p10.addEventListener('click', () => {
    valHua = 400;
});

huawei.addEventListener('click', () => {
    if (huawei.checked == true) {
        let tr = document.createElement('p');
        tr.setAttribute('id', 'tracy');
        two.appendChild(tr);
        h = 0;
        HuaTmp = setInterval(() => {
            tr.textContent = valHua * nombre2.value;
            hua = valHua * nombre2.value;
        }, 100);
    }
    if (huawei.checked == false) {
        let tracy = document.getElementById('tracy');
        tracy.remove();
        h = 1;
    }
});

pop.addEventListener('click', () => {
    valTec = 100;
});
camon.addEventListener('click', () => {
    valTec = 200;
});
phantom.addEventListener('click', () => {
    valTec = 300;
});
wx4.addEventListener('click', () => {
    valTec = 400;
});

tecno.addEventListener('click', () => {
    if (tecno.checked == true) {
        let el = document.createElement('p');
        el.setAttribute('id', 'elvine');
        tree.appendChild(el);
        t = 0;
        TecTmp = setInterval(() => {
            el.textContent = valTec * nombre3.value;
            tec = valTec * nombre3.value;
        }, 100);
    }
    if (tecno.checked == false) {
        let elvine = document.getElementById('elvine');
        elvine.remove();
        t = 1;
    }
});

lumia.addEventListener('click', () => {
    valNok = 100;
});
r52.addEventListener('click', () => {
    valNok = 200;
});
j36.addEventListener('click', () => {
    valNok = 300;
});
pro.addEventListener('click', () => {
    valNok = 400;
});

nokia.addEventListener('click', () => {
    if (nokia.checked == true) {
        let ho = document.createElement('p');
        ho.setAttribute('id', 'holden');
        fore.appendChild(ho);
        n = 0;
        NokTmp = setInterval(() => {
            ho.textContent = valNok * nombre4.value;
            nok = valNok * nombre4.value;
        }, 100);
    }
    if (nokia.checked == false) {
        let holden = document.getElementById('holden');
        holden.remove();
        n = 1;
    }
});

one1.addEventListener('click', () => {
    valMi = 100;
});
oneplus.addEventListener('click', () => {
    valMi = 200;
});
pro2.addEventListener('click', () => {
    valMi = 300;
});
proplus.addEventListener('click', () => {
    valMi = 400;
});

Mi.addEventListener('click', () => {
    if (Mi.checked == true) {
        let jo = document.createElement('p');
        jo.setAttribute('id', 'jonathan');
        five.appendChild(jo);
        m = 0;
        MiTmp = setInterval(() => {
            jo.textContent = valMi * nombre5.value;
            mi = nombre5.value * valMi;
        }, 100);
    }
    if (Mi.checked == false) {
        let jonathan = document.getElementById('jonathan');
        jonathan.remove();
        m = 1;
    }
});

calcul.addEventListener('click', () => {
    reponse.textContent = sam + hua + tec + nok + mi + ((sam + hua + tec + nok + mi) * 0.15);
    setTimeout(() => {
        if (t == 1) {
            clearInterval(TecTmp);
            tec = 0;
        }
        if (s == 1) {
            clearInterval(SamTmp);
            sam = 0;
        }
        if (h == 1) {
            clearInterval(HuaTmp);
            hua = 0;
        }
        if (n == 1) {
            clearInterval(NokTmp)
            nok = 0;
        }
        if (m == 1) {
            clearInterval(MiTmp)
            mi = 0;
        }
    }, 0);

    answ = confirm("Do you accept the calculated total cost for paymen ?");
    if (answ) {
        alert("Thannk you for you visit");
    } else {
        alert("Oops, You canceled")
    }
});
let TecTmp, SamTmp, HuaTmp, NokTmp, MiTmp;
let valSam = 0;
let sam = 0;
let valHua = 0;
let hua = 0;
let valTec = 0;
let tec = 0;
let valNok = 0;
let nok = 0;
let valMi = 0;
let mi = 0;
let s, t, h, n, m;
let answ;