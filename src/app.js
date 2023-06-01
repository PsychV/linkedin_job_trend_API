let response;
const dynamodb = require ('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();

export const lambdaHandler = async (event, context) => {
    try {
        const data = await docClient.scan({
            TableName:
        })
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
