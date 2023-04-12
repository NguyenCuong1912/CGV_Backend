const { Rank } = require('../models/Ranks.model')
const { KeyConst } = require('../constants')
const { Bronze, Sliver, Gold, Platinum, Diamon } = KeyConst.RankConst
const setValue = (Rank) => {
    const value = {
        rank_type: Rank.type,
        rank_name: Rank.name,
        point: Rank.point,
        discouont: Rank.discount
    }
    return value;
}
const MigrateRank = () => {
    Rank.find()
        .then((data) => {
            if (data.length === 0) {
                const rankBronze = new Rank(setValue(Bronze));
                const rankSliver = new Rank(setValue(Sliver));
                const rankGold = new Rank(setValue(Gold));
                const rankPlatinum = new Rank(setValue(Platinum));
                const rankDiamon = new Rank(setValue(Diamon));
                rankBronze.save();
                rankSliver.save();
                rankGold.save();
                rankPlatinum.save();
                rankDiamon.save();
            }
        }).catch(err => console.log(err))
}

module.exports = { MigrateRank }