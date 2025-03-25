
class Account {
    constructor(data) {
        this.login = data.login;
        this.email = data.email;
    }
    getInfo() {
        console.log(`Login: ${this.login}, Email: ${this.email}`);
    }
    changeEmail(newEmail) {
        this.email = newEmail;
    }
}

console.log(Account.prototype.getInfo); // function

const mango = new Account({
 login: 'Mangozedog',
 email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
 login: 'Poly',
 email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com