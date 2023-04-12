const { connectDB } = require("../config/config");
const { MigrateAccount } = require("./Account.migration")
const { MigrateRank } = require("./Ranks.migration")
const { MigrateRole } = require("./Roles.migration")

const Migrate = async () => {
    await connectDB();
    await MigrateRole();
    await MigrateRank();
    await MigrateAccount();
}

Migrate();