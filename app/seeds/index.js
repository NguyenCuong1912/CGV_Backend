const { connectDB } = require("../config/config");
const { MigrateAccount } = require("./Account.seed")
const { MigrateRank } = require("./Ranks.seed")
const { MigrateRole } = require("./Roles.seed")

const Migrate = async () => {
    await connectDB();
    await MigrateRole();
    await MigrateRank();
    await MigrateAccount();
}

Migrate();