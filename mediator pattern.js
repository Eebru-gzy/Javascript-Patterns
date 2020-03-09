const User = function(name) {
    this.name = name,
    this.chatroom = null

}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    recieve: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

const Chatroom = function() {
    let users = {}; //list of users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if (to) {
                //single user message
                to.recieve(message, from);
            } else {
                //mass message
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}

const eebru = new User('eebru');
const ope = new User('ope');
const me = new User('me');


const chatroom = new Chatroom();

chatroom.register(eebru);
chatroom.register(ope);
chatroom.register(me);


eebru.send('hey eebru', ope);
eebru.send('hey hello yall');