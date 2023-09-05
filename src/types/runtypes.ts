import { Number, String, Record, Array } from 'runtypes';

const GeoRuntype = Record({
    lat: Number,
    lng: Number,
});

const AddressRuntype = Record({
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: GeoRuntype,
});

const CompanyRuntype = Record({
    name: String,
    catchPhrase: String,
    bs: String,
});

const UserRuntype = Record({
    id: Number,
    name: String,
    username: String,
    email: String,
    address: AddressRuntype,
    phone: String,
    website: String,
    company: CompanyRuntype,
});

const UsersArrayRuntype = Array(UserRuntype);

export { UserRuntype, UsersArrayRuntype };