import { Ad } from "./ad.models";

export class Professional {

    private _id: number;
    private _email: string;
    private _roles: string;
    private _password: string;
    private _firstName: string;
    private _lastName: string;
    private _phoneNumber: string;
    private _siretNumber: string;
    private _createdAt: Date;
    private _updatedAt: Date;
    private _username: string;
    
    private _ad: Ad;

    constructor(name: string, email: string, roles: string, password: string, firstName: string, lastName: string,
                phoneNumber: string, siretNumber: string, createdAt: string, username: string, ad: Ad, updatedAt?: Date, id?: number) {
        
        if (typeof id === 'number') {
            this._id = id;
        }
            this._email = email;
            this._roles = roles;
            this._password = password;
            this._firstName = firstName;
            this._roles = roles;
            this._roles = roles;
            this._roles = roles;
            this._ad = ad;
        }
    }