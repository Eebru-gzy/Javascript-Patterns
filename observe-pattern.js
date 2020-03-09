// function EventObserver () {
//     this.observers = [];
// }

// EventObserver.prototype = {
//     subscribe: function(fn) {
//         this.observers.push(fn);
//         console.log(`You're now suscribed to ${fn.name}`);
//     },
//     unsubscribe: function(fn) {
//         //Filter out from the list whatever matches the callback function. If there's no match, the callback gets to say on the list. the filter returns a new list and reassigns the list of observers
//         this.observers = this.observers.filter((item) => {
//             if(item !== fn) {
//                 return item;
//             }
//         });

//         console.log(`You're now unsuscribed from ${fn.name}`);

//     },
//     fire: function() {
//         this.observers.forEach(item => {
//             item.call();
//         });
//     }
// }



//ES6 Class
class EventObserver {
    constructor () {
    this.observers = [];

    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You're now suscribed to ${fn.name}`);
    }

    unsubscribe (fn) {
        //Filter out from the list whatever matches the callback function. If there's no match, the callback gets to say on the list. the filter returns a new list and reassigns the list of observers
        this.observers = this.observers.filter((item) => {
            if(item !== fn) {
                return item;
            }
        });

        console.log(`You're now unsuscribed from ${fn.name}`);
    }

    fire() {
        this.observers.forEach(item => {
         item.call();
        });
    }
}

const click = new EventObserver();


//event listeners
//millisecs
document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getMilliseconds);
})
document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getMilliseconds);
})

//seconds
document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getSeconds);
})
document.querySelector('.unsub-s').addEventListener('click', function() {
    click.unsubscribe(getSeconds);
})
//fire
document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
})



const getSeconds = function() {
    console.log(`current Seconds: ${new Date().getSeconds()}`);
}
const getMilliseconds = function() {
    console.log(`current milliseconds: ${new Date().getMilliseconds()}`);
}



