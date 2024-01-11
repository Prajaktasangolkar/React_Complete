import conf from "../conf/conf";

// we want services so that connect with appwrite
import { Client, Account, ID } from "appwrite";

// inside class this will done when new object will be created
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    //if user acc will be there then do successfull login directly
    // eslint-disable-next-line no-useless-catch
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }
   
//   if i landed and home page check it is login or not
async getCurrentUser(){
    try{
          return await this.account.get()
    }
    catch(error){
           console.log("Appwrite service:: getCurrentUser::error",error);
    }
    return null
}

async logout(){
    try {
        await this.account.deleteSession()
    } catch (error) {
        console.log("Appwrite service::logout::error",error);
    }
}
  
}
const authService = new AuthService();

export default authService;



/*
import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const account = new Account(client);

const promise = account.create('[USER_ID]', 'email@example.com', '');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});

*/
