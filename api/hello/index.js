async function GetHello(context, req) {
    context.res = {
        body: 'Hello from API!'
    };
    };
    module.exports = GetHello;