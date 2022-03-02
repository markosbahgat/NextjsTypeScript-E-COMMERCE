import { AxiosError } from "axios";
import { BadRequestError, UnAuthonticatedError, UnprocessabelEntityError, NetworkError, ConfilctError, ForbiddenError, NotFoundError, InternalServerError } from "models/interfaces/errors.model";


export default function MapAxiosError (error: AxiosError) {
    console.log(error);
    if(!error.response){
        return new NetworkError("Connection Lost");
    }
    else{
        const status = error.response.status;
        const errorReason = (error.response.data);
        switch (status) {
            case 401:
                return new UnAuthonticatedError("Invalid User Credinational");
            case 403:
                return new ForbiddenError("You are not allowed !");
            case 404:
                return new NotFoundError("The thing you are looking for is not found");
            case 400: 
                return new BadRequestError("This is a Bad Request");
            case 422:
                return new UnprocessabelEntityError(errorReason.errors[0].message);
            case 409:
                return new ConfilctError(errorReason.errors[0].message);
            case 500:
                return new InternalServerError("Sorry, Internal Server Error !");
            default:
                return error;
        }
    }
}