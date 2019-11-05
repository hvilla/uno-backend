var mongoose =  require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

const UserSchema = Schema({
    first_name:{
        type:String,
        required: [true,'Please add your first name'],
        trim:true
    },
    last_name:{
        type:String,
        required: [true,'Please add your last name'],
        trim:true
    },
    username:{
        type:String,
        required: [true,'Please submit an username'],
        unique:true,
        trim:true,
        maxlength: [50, 'Username can not be more than 50 characters']
    },
    password:{
        type:String,
        required: [true,'Please an password'],
        minlength: [6, 'Password need to be almost 6 characters']
    },
    avatar: {
        type:String,
        default: 'no-avatar.jpg'
    }
});

UserSchema.pre('save', function(next) {
    var user = this;

    //USER SCHEMA HOOK BEFORE SAVE, THAT GENERATES AN ENCRYPTED PASSWORD USING BCRYPTJS
    bcrypt.genSalt(Number(process.env.PASSWORD_SALT_FACTOR), function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, Number(process.env.PASSWORD_SALT_FACTOR), function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('Auth_User',UserSchema);