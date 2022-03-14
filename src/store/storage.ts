import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createStorage = () => {
	return {
		getItem(_key: string) {
			return Promise.resolve();
		},
		setItem(_key: string, value: any) {
			return Promise.resolve(value);
		},
		removeItem(_key: string) {
			return Promise.resolve();
		},
	};
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createStorage();

export default storage;
