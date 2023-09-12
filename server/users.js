
class user{
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

var connectedUsers = [];

function addUser(id, name){
    connectedUsers.push(new user(id, name));
}

function getUser(id){
    return connectedUsers.find(u => u.id == id);
}

function deleteUser(id){
    var index = connectedUsers.findIndex(u => u.id == id );
    connectedUsers.splice(index, 1);
}

function getUsers(){
    return connectedUsers;
}
