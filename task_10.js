function raqamlarniYigindi(son) {
    let sonStr = son.toString();

    let yigindi = 0;
    for (let i = 0; i < sonStr.length; i++) {
        yigindi += parseInt(sonStr[i]);
    }

    console.log(son + " sonining raqamlari yig'indisi: " + yigindi);
    return yigindi;
}

let n = 123;
raqamlarniYigindi(n);
