const AnoMod = require('./anotation.module.tsx')

const Insert = async (body) => {
    return await AnoMod.create(body)
}

const Get = async () => {
    return await AnoMod.find()
}

const Patch = async (body) => {
    return await AnoMod.findOneAndUpdate({
        _id: body.id
    },
    {
        title: body.title,
        body: body.body
    },
{
    new: true
})
}

const Del = async (id) => {
    return await AnoMod.findOneAndDelete({
        _id: id
    })
}

module.exports = { Insert, Get, Patch, Del }