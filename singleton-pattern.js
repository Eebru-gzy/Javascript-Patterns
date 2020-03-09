//SINGLETON PATTERN: can only return one instance of obj


const singleton = (function () {

    let start; 

    const createInstance = function() {
        let obj = new Object({name: 'me'})
        return obj;
    }

    return {
        getInstance: function() {
            if (!start) {
            start = createInstance();
            }
            return start
        }
    }
}());

const a = singleton.getInstance();
const b = singleton.getInstance();

console.log(a, b);

if(a !== b) {
    console.log('a is not b')
}else {
    console.log("a is b");  // can only create one object, every other obj would always be = the first
}
