//IIFE is the foundation of the module pattern structure in ES6
(function () {

    // invisible to outside

    return {
        // visible outside
    }
})();


//standard module pattern

const UICtrl = (function () {
    let text = 'Hello world';

    const changeText = function () {
        const h1 = document.querySelector('h1');
        h1.textContent = text;
    }

    return {
        callChangeText: function() {
            changeText();
            console.log(text);
        }
    }
})();


// UICtrl.callChangeText();


//Revealing Module pattern: it directly returns functions / methods that are inside of IIFE

const itemCtrl = (function () {
    let data = [];

    function add(id) {
        data.push(id);
        console.log('Items added');
    }

    function get (id) {
       return data.find(element => {
            return element.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
})();
//you can do more stuff in the standard pattern than in the revealing pattern, the reavealing pattern just reveal private stuffs but standard gave room to interact with private stuff and do something with them in the in the return obj


itemCtrl.add({id: 1, name: 'me'});
itemCtrl.get(1);
