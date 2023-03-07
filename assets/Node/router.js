const html = require("./template");
const http = require("http");
let router = function(request,response){
    const url = request.url;
    const methode = request.method;
   response.writeHead(200,{"content-Type":"text/html, charset=utf-8"});
    if(url.endsWith("/feedback") && methode === "GET"){
        response.end(html("Liste der Feedbacks"));
    }
    else {response.end(html("Methode: " + methode + " URL: " + url ));
}
};
module.exports = router;