import Auth_User from '../../models/Auth_User';

class UserService{
    static async createUser(data){
        try{
            return await Auth_User.create(data);
        }catch(err){
            throw err;
        }
    }

    static async getUserById(id){
        try {
            return await Auth_User.findById(id).select('-password');
        } catch (err) {
            throw err;
        }
    }
}

export default UserService;