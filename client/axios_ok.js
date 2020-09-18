var axios = require('axios');
var data = '';

var config = {
  method: 'get',
  url: 'https://rt47smc2vg.execute-api.us-east-1.amazonaws.com/dev/tokemo',
  headers: { 
    'x-api-key': 'edCCjrXzhS4nsSpxSI2P0asvqRvVWcyD8A7q5GFZ'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
