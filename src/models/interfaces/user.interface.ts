export interface IUser {
	email: string;
	username: string;
	password?: string;
	name?: string;
	address?: {
		city: string;
		street: string;
		number: number;
		zipcode: string;
		geolocation: {
			lat: string;
			long: string;
		};
	};
	phone?: string;
}
