var BaseResponse = require('./BaseResponse');
class ApiVersionResponse extends BaseResponse{

    getVersion()
    {
        return this.rawXML.response.version._text;
    }
    getReturnCode()
    {
        return this.rawXML.response.returncode._text;
    }

}

module.exports=ApiVersionResponse;