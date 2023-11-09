// 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

// const { Configuration, OpenAIApi }  = require('openai');
// const configuration = new Configuration({
//     organization: "org-7IpSdZFJv8vdmMGXDuMf6HjJ",
//     apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);
// // const response = await openai.listEngines();



// async function callApi() {
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: "Say this is a test",
//         max_tokens: 7,
//         temperature: 0,
//     });
//     console.log(response.data);
// }

// callApi();

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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"
});
const openFun=async()=>{
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": "Hey GPT!",}],
        max_tokens:90,
      });
      console.log(chatCompletion.choices[0].message.content);
    }
    
    openFun();