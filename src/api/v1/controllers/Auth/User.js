import colors from 'colors';
import UserService from '../../services/Auth/User';

class UserController{
    
    static async createUser(req,res){
        const data = req.body;
        try{
            const user = await UserService.createUser(data);
            return res.status(201).send(user);
        }catch(err){
            console.log(`AUTH:CreateUser:ERROR: ${err}`.magenta);
        }
    }

    static async getUserById(req,res){
        try{
            const { id } = req.params;
            const user = await UserService.getUserById(id);
            if(!user) return res.status(404).send({error:'User not found'});
            return res.status(200).send(user);
        }catch(err){
            console.log(`AUTH:CreateUser:ERROR: ${err}`.magenta);
        }
        
    }

}

export default UserController;