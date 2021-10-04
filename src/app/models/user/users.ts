export class Users 
{
    address: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;

    constructor(address = '', email ='', firstName = '', lastName = '', phoneNumber = '') 
    {
        this.address = address
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        this.phoneNumber = phoneNumber;

    }
}
