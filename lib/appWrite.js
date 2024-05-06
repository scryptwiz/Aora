import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
    Storage,
} from "react-native-appwrite";

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.ghost.aora',
    projectId: '663542e20018df67d1ad',
    databaseId: '663545150013a4a2c51c',
    userCollectionId: '6635453c00385e1a3e41',
    videoCollectionId: '663545570015e16f4460',
    storageId: '66354843003c647cbe9b',
};
// export const appwriteConfig = {
//     endpoint: 'https://cloud.appwrite.io/v1',
//     platform: 'com.aora.ghost',
//     projectId: '663921550010f90e7ee6',
//     databaseId: '6639218a0035cefc4165',
//     userCollectionId: '6639219a0025aa61fe05',
//     videoCollectionId: '663921a5001c7c44a28e',
//     storageId: '663923b1003b92400f82',
// };

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register user
export const createUser = async (username, email, password) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email: email,
                username: username,
                avatar: avatarUrl,
            }
        );

        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

// Sign In
export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailSession(email, password);
        return session;
    } catch (error) {
        throw new Error(error);
    }
}

// Get user
export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()
        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.userCollectionId, [Query.equal('accountId', currentAccount.$id)])
        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error)
    }
}