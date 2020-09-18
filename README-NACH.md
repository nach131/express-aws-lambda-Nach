Por fin ya funciona, todo correcto el local y en aws

Service Information

service: expressInAWSArticles

stage: production

region: eu-west-3

stack: expressInAWSArticles-production

resources: 12

api keys:

  None

endpoints:

  ANY - https://vhaeq8i93e.execute-api.eu-west-3.amazonaws.com/production/{proxy+}

  ANY - https://vhaeq8i93e.execute-api.eu-west-3.amazonaws.com/production

functions:

  api: expressInAWSArticles-production-api

layers:

  None
