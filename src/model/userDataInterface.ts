export default interface UserProfileData {
    id: string;
    uid: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    avatar: string;
    gender: string;
    phone_number: string;
    date_of_birth: string;
    employment: {
        title: string;
        key_skill: string;
    };
    
}