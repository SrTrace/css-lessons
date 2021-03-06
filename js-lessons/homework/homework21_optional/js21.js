const objInArr = [
    {
        name: "John",
        type: "common",
        cost: "low",
        condition: "ok",
    },
    {
        name: {
            name: "Luchibalde",
            nikName: "Luke",
            lastName: "SkyWalker",
        },
        type: "uniq",
        cost: "hi",
        condition: "ok",
    },
    {
        name: "Best",
        type: "rare",
        cost: "expensive",
        condition: "as new",
        other: ["bro", "fellow", "men", "sailor"],
    },
];
console.log(`Массив для поиска:
${JSON.stringify(objInArr)}`);

function filterCollection(arg1, arg2, arg3, ...restArgs) {
    //отфильтровать сюда
    let result = [];
    // деструктуризация поискового запроса по ключам
    let [firstKey, secondKey] = arg2.split(" ");
    console.log(`Поисковый запрос: ${firstKey} ${secondKey}`);
    // Искать в указанных полях
    // if (restArgs.length !== 0) {
    //     for (let i = 0; i <= restArgs.length; i++) {
    //         let fieldForSearch = restArgs[i];
    //         for (let i = 0; i < arg1.length; i++) {
    //             console.log(arg1[i]);
    //             console.log(arg1.fieldForSearch);
    //         }
    //     }
    // }
    //если флаг true - искать все ключ.слова(arg2), если false - искать один из них
    if (arg3 === true ) {
        //.filter
        result = arg1.filter(function (item) {
            for (let key in item) {
                if (item[key] === firstKey || item[key] === secondKey) {
                    return item;
                }
            }
        });
    }
    if (arg3 === false ) {
        //.find
        result = arg1.find(function (item) {
            for (let key in item) {
                if (item[key] === firstKey || item[key] === secondKey) {
                    return item;
                }
            }
        });

    }
    console.log(`Отфильтрованный массив: 
	${JSON.stringify(result)}`);
}

filterCollection(objInArr, "John", true, "name.name", "other[1]");