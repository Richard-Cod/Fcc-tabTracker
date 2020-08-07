

module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define('User',{
        email:{
            type:DataTypes.STRING,
            unique:true
        },
        password: DataTypes.STRING
    })

    User.prototype.comparePassword = (password,realpwd) => {
        console.log("Le pwd a comparé ",password);
        console.log("Le pwd pour le moment ",realpwd);
        return ;
    }
    return User;

}

