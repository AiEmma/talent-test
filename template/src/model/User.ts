export class User{
    constructor(
    private id: string,
    private email: string,
    private password: string,
    private role: UserRole
    ){}

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    getRole(){
        return this.role;
    }

    setId(id: string){
        this.id = id;
    }


    setEmail(email: string){
        this.email = email;
    }

    setPassword(password: string){
        this.password = password;
    }

    setRole(role: UserRole){
        this.role = role;
    }

   static stringToUserRole(input: string): UserRole{
        switch (input) {
            case "JUNIOR":
              return UserRole.JUNIOR;
            case "MIDDLE":
              return UserRole.MIDDLE;
            default:
              throw new Error("Invalid user role");
          }
    }

    static toUserModel(user: any): User {
        return new User(user.id, user.email, user.password, user.stringToUserRole);
      }


}

export interface UserInputDTO{
    email: string;
    password: string;
    role: string;
}

export interface LoginInputDTO{
    email: string;
    password: string;
}

export enum UserRole{
    JUNIOR = "JUNIOR",
    MIDDLE = "MIDDLE"
}