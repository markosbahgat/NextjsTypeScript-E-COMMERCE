import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createStorage = () => {
    return {
         getItem: function(_key:string, callback?: (err?:Error, results?:string) => void){
            return new Promise(async (resolve, reject) => {
               await storage.getItem(_key, (err, results) => {console.log(err, results)}) 
            })
        },
        setItem(_key:string, value:any){
            return Promise.resolve(value);
        },
        removeItem(_key:string){
            return Promise.resolve();
        }
    }
}

const storage = typeof window !== "undefined" ? createWebStorage("local") : createStorage();

export default storage;