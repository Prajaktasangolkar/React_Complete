import conf from "../conf/conf";

// we want services so that connect with appwrite
import { Client, ID ,Databases,Storage,Query} from "appwrite";

export class Service{
     client=new Client()
     databases;
     bucket;
     constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
         this.databases=new Databases(this.client)
         this.bucket=new Storage(this.client)
     }

     async createPost({title,slug,content,featuredImage,status,userId}){
              try {
                  return await this.databases.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId,
                    }
                  )
              } catch (error) {
                console.log("Appwrite service:: createPost::error",error);
  
              }
     }

     async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,          
                }
            )    
        } catch (error) {
            console.log("Appwrite service:: updatePost::error",error); 
        }
     }

     async deletePost(slug){ //////////////////////////////////slug==id
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )    
            return true;
        } catch (error) {
            console.log("Appwrite service:: updatePost::error",error); 
            return false;
        }
     }

     //this will give single post 
     
     async getPost(slug){ //////////////////////////////////slug==id
        try {
             await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )    
            return true;
        } catch (error) {
            console.log("Appwrite service:: getPost::error",error); 
            return false;
        }

      
     }

     //what to do for all the posts
     //we will get all the post using listdocument but it also give all not active document
     //that non active documents will be there 
     //use query
     async getPosts(queries=[Query.equal("status","active")]){//status is a indexes column
        try {
            await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                // [
                //     Query.equal("status","active")
                // ]
            ) 
            return true;    
        } catch (error) {
            console.log("Appwrite service:: getPosts::error",error); 
            return false
        }
    }

    //file upload service
    // storage services is this
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service:: uploadFile::error",error); 
            return false;
        }
    }

    async deletFile(fileId){
                try {
                    await this.bucket.deleteFile(
                        conf.appwriteBucketId,
                        fileId
                    )
                    return true;
                } catch (error) {
                    console.log("Appwrite service:: deleteFile::error",error); 
                    return false;
                }
    }

    getFilePreview(fileId){  //this is very fast so not need of async
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}



const service=new Service()

export default service