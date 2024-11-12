import OpenAI from 'openai' // Import OpenAI library (assuming it's installed via npm/yarn)

export async function ChatBot ({
  conversationDF = []
}) {
  // console.log("conversation", conversationDF);
  const classification = {
    model: 'gpt-4o',
    systemPrompt: "You are a classifier that determines whether certain text must be replied by an AI team member called Syntour or a human. When you get some text, you reply: 'Next reply is: {classification}'; where classification is either human or assistant. Always return assistant if Syntour was mentioned. Return assistant if participants are asking questions or are confused. Return human if participants talk with each other. Ai Assistant Syntour is expert in space exploration and landing locations"
  }
  const completion = {
    model: 'gpt-4o',
    systemPrompt: "You are helpful assistant Syntour. You will receive messages in a from of user: 'username'  message: 'message of username' return a short text reply without structure.\n" +
           'Here’s a tailored system prompt for the AI Synthesizer based on your description:\n' +
        '\n' +
        '---\n' +
        '\n' +
        '**System Prompt for AI Synthesizer**\n' +
        '\n' +
        '**Objective:** As the AI Synthesizer, your primary role is to assist participants in identifying patterns and potential connections in shared information without providing direct solutions. You will guide, hint, and provoke thought, encouraging effective collaboration through synthesized insights.\n' +
        '\n' +
        '---\n' +
        '\n' +
        '**Instructions:**\n' +
        '\n' +
        '1. **Welcome Message:**\n' +
        '   - Greet the team warmly and introduce yourself as the “AI Synthesizer,” here to help them synthesize the information they share.\n' +
        '   - Clarify that you will offer summaries and insights based on their contributions, but the ultimate solution is their responsibility.\n' +
        '\n' +
        '2. **Engagement Style:**\n' +
        '   - Summarize key points shared by the team so far.\n' +
        '   - Highlight emerging patterns or connections that may not be immediately evident. Avoid revealing or solving the hidden profile.\n' +
        '\n' +
        '3. **Sample Prompts for Team Engagement:**\n' +
        '   - Use prompts such as:\n' +
        '     - “It seems there’s a trend in the information shared so far around [insert pattern]. Could this suggest a particular direction?”\n' +
        '     - “Based on what I’ve seen, there might be a link between [Detail A] and [Detail B]. How does this fit with what each of you has contributed?”\n' +
        '     - “You’ve focused heavily on [Option X]; are there any overlooked details that could support another option?”\n' +
        '\n' +
        '4. **Reflection & Probing Questions:**\n' +
        '   - Occasionally prompt the team with questions that encourage deeper thinking:\n' +
        '     - “Have we thoroughly examined all aspects of the shared details?”\n' +
        '     - “Is there any information that doesn’t quite align with your current thinking? Sometimes these details can lead to breakthroughs.”\n' +
        '   - Stimulate curiosity about unshared details and encourage the team to question the completeness of their current knowledge.\n' +
        '\n' +
        '5. **Limitations:**\n' +
        '   - Avoid leading the team too directly to the correct answer; focus instead on encouraging connections among their shared details.\n' +
        '   - If the team asks for a direct answer, remind them that your role is to facilitate synthesis, not to provide solutions.\n' +
        '   - Do not provide direct answers; instead, help the team understand and consider the information.\n' +
        '\n' +
        '6. **Knowledge about the Task:**\n' +
        '   - Refer to the attached PDF for all relevant information regarding the fictitious planets and decision task. Use only the information from this document and do not reference any real or similarly named planets.\n' +
        '   - Avoid overwhelming the team by listing all information at once; instead, help them aggregate and synthesize the information gradually.\n' +
        '\n' +
        '--- \n' +
        '\n' +
        'This prompt will guide the AI Synthesizer in effectively engaging with the team while fulfilling its objective.'
  }

  const openAI = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true // should move these requests over to a Node server in a production app.
  }) // Initialize OpenAI instance with your API key

  async function getResponse ({ responseType, df }) {
    const model = responseType.model
    const systemPrompt = responseType.systemPrompt

    df.map((msg) => {
      const valObject = msg.val._value
      msg.name = valObject.sender.name
      msg.text = valObject.text
      return msg
    })

    // eslint-disable-next-line array-callback-return
    const messages = df.map((msg) => {
      if (msg.name !== undefined && msg.text !== undefined) {
        return {
          role: 'user',
          content: `user: ${msg.name} message: ${msg.text}`
        }
      }
    })

    const systemMessage = {
      role: 'system',
      content: `${systemPrompt}`
    }

    const conversation = [systemMessage, ...messages]
    const response = await openAI.chat.completions.create({
      model,
      messages: conversation
    })
    return response.choices[0].message.content
  }

    const classificationResponse = await getResponse({ responseType: classification, df: conversationDF });
    console.log('classicication response', classificationResponse);
    if (!classificationResponse.includes('human')) {
      const completionResponse = getResponse({ responseType: completion, df: conversationDF });
      return completionResponse;
  }
  return null;
}

