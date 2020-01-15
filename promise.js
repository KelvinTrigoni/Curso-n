function soma(x) {
    return new Promise((resolve, reject) => {
        if (Number(x) == NaN || Number(x) == undefined || typeof x != 'number') {reject('Se é burro em filhão');}
            setTimeout(() => {
                resolve(x + 10);
            }, 0)
    })
}

async function principal() {
    try {
        const resultado = await soma(5);
        console.log(`Resultado: ${resultado}`);
    } catch (erro) {
        console.log(`O erro foi: ${erro}`);
    }
}

principal();




    // soma(5).then((response)=>{
    //     console.log(`foi: ${response}`);
    // }).catch((err)=>{
    //     console.log(err);
    // })
