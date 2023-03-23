export class AuthTokenNotProviderError extends Error{

    constructor(){
        super('authentication token not provided'); 
        this.name = 'AuthTokenNotProviderError'
    }
}