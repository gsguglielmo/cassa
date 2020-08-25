class ClientManager{

    #socket;
    #request;

    constructor(socket,request) {
        this.#socket = socket;
        this.#request = request;
    }

    print(){
        console.log(this.#socket);
        console.log(this.#request);
    }
}

module.exports =  ClientManager;
