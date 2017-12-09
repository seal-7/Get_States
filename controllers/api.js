var environmets=require('../config/environments.json');

module.exports.getStatesController=function(req, res) {
    var page="page"+req.param("page");
    if(!req.param("page")){

        res.json(environmets.emptyFieldError);
    }
    else if(!environmets.hasOwnProperty(page)){

        res.json(environmets.limitError);
    }
    else {

        console.log(page);
        res.json(environmets[page]);
    }
}