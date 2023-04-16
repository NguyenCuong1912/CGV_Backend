const { connectDB } = require("../config/config");
const { MigrateAccount } = require("./Account.seed")
const { MigrateRank } = require("./Ranks.seed")
const { MigrateRole } = require("./Roles.seed")

const Migrate = async () => {
    try {
        await connectDB();
        await MigrateRole();
        await MigrateRank();
        await MigrateAccount();
        console.log("seeds sucess")
        process.exit(1);
    } catch (error) {
        console.log("seeds erorr")
        process.exit(1);
    }

}

Migrate();