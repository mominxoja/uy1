var aaa = prompt("qanday mevali marojniy xoxlaysiz??? olma,qulupnay,banan")
var ddd = prompt("ustiga nma qoshilsin??? suyuq shokolad, konfet, ")
var ccc = prompt("marojniy nmaga solib berilsin??? silindr non, idish")
let stocks = {
    Fruits : [aaa],
    liquid : [ "ice"],
    holder : [ccc],
    toppings : [ddd],
};

let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log("marojniy tayorrlash boshlandi" );
        call_production()
    }, 1000)
}

let production = () => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[0]} olindi`);
        setTimeout(() => {
            console.log(`${stocks.Fruits[0]} to'raldi`);
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} qo'shildi`);
                setTimeout(() => {
                    console.log("mashina ishga tushdi");
                    setTimeout(() => {
                        console.log("mashina ishlayapti");
                },0000)
                    setTimeout(() => {
                        console.log(`marojniy ${stocks.holder[0]}ga solindi`);
                        setTimeout(() => {
                            console.log(`ichiga ${stocks.toppings} qo'shildi`);
                            setTimeout(() => {
                                        console.log("marojniy klientga yelkazildi");
                                        setTimeout(() => {
                                            console.log("yoqimli ishtaxa");
                                    },0500)
                                },4000)
                        },4000)
                    },4000)
                }, 1000)
            },4000)
        },4000)
    },2000)
}

order(0, production)