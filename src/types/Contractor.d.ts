import Id from "./Id"
import Service from "./Service"

type Contractor = {
    firstname: string;
    lastname: string;
    email: string;
    address?: Address;
    id?: Id;
    image?: string;
    service?:Service
    service_id?: Id
}

export default Contractor