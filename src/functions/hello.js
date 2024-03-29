// with callback
// exports.handler = function(event, context, callback) {
//   callback(null, {
//     statusCode: 200,
//     headers: {
//       "Access-Control-Allow-Origin": "*", // Required for CORS support to work
//       "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
//     },
//     body: "Hello, World"
//   });
// };

// with async
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    },
    body: "Hello, World"
  };
};
