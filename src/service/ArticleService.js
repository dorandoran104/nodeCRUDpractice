const articleMapper = require("../mapper/ArticleMapper");

const service = {
    list : ()=>{
        return articleMapper.list().then((response)=>{return response})
    },

    get : (id) => {
        return articleMapper.get(id).then((response)=>{return response})
    },

    new : (body) => {
        return articleMapper.new(body).then((response)=>{return response});
    },

    delete : (id)=>{
        return articleMapper.delete(id).then((response)=>{return response})
    },

    modify : (body, id)=>{
        return articleMapper.modify(body,id).then((response)=>{return response});
    }
}

module.exports = {
    service
}