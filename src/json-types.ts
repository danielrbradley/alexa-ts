/// This file contains the requests and responses defined by Amazon Alexa's JSON Interface

export type AlexaLambda = (event: RequestBody, context: Context, callback: (err, result?) => void) => any

export interface Context {
  callbackWaitsForEmptyEventLoop: boolean
  logGroupName: string
  logStreamName: string
  functionName: string
  memoryLimitInMB: string
  functionVersion: string
  invokeid: string
  awsRequestId: string
}

export interface RequestBody {
  version: string
  session: Session
  request: Request
}

export type Request = LaunchRequest | IntentRequest | SessionEndedRequest

export interface Session {
  new: boolean
  sessionId: string
  attributes: any
  application: SessionApplication
  user: SessionUser
}

export interface SessionApplication {
  applicationId: string
}

export interface SessionUser {
  userId: string
  accessToken: string
}

export interface LaunchRequest extends RequestBase {
  type: 'LaunchRequest'
}

export interface IntentRequest extends RequestBase {
  type: 'IntentRequest'
  intent: Intent
}

export interface Slot {
  name: string
  value: any
}

export interface Intent {
  name: string
  slots: any
}

export interface SessionEndedRequest extends RequestBase {
  type: 'SessionEndedRequest'
  reason: string
}

export interface RequestBase {
  requestId: string
  timeStamp: string
}

export interface ResponseBody {
  version: string
  sessionAttributes?: any
  response: Response
}

export interface Response {
  outputSpeech?: OutputSpeech
  card?: Card
  reprompt?: Reprompt
  shouldEndSession: boolean
}

export type OutputSpeech = PlainText | SSML

export interface PlainText {
  type: 'PlainText'
  text: string
}

export interface SSML {
  type: 'SSML'
  ssml: string
}

export interface Card {
  type: 'Simple' | 'Standard' | 'LinkAccount'
  title?: string
  content?: string
  text?: string
  image?: Image
}

export interface Image {
  smallImageUrl: string
  largeImageUrl: string
}

export interface Reprompt {
  outputSpeech: OutputSpeech
}
