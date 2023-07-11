import { z } from 'zod'

const keyboardButtonPollTypeSchema = z
  .object({
    type: z
      .enum(['QUIZ', 'REGULAR'])
      .optional()
      .describe('If QUIZ is passed, the user will be allowed to create only Quiz Mode polls'),
  })
  .optional()
  .describe(
    'This object represents type of a poll, which is allowed to be created while the user is pressing the button.'
  )

const keyboardButtonSchema = z.object({
  text: z
    .string()
    .max(64)
    .describe(
      'Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed'
    ),
  request_contact: z.boolean().optional().describe("If True, the user's phone number will be requested"),
  request_location: z.boolean().optional().describe("If True, the user's current location will be requested"),
  request_poll: keyboardButtonPollTypeSchema.describe(
    'If specified, the user will be asked to create a poll and send it to the bot when the button is pressed.'
  ),
})

const loginUrlSchema = z
  .object({
    url: z
      .string()
      .max(64)
      .describe(
        'An HTTP URL to be opened with user authorization data added to the query string when the button is pressed'
      ),
    forward_text: z.string().max(64).optional().describe('New text of the button in forwarded messages.'),
    bot_username: z
      .string()
      .max(64)
      .optional()
      .describe('Username of a bot, which will be used for user authorization.'),
    request_write_access: z
      .boolean()
      .optional()
      .describe('True, if you have requested the permission to write to the user.'),
  })
  .optional()
  .describe('This object represents a parameter of the inline keyboard button used to automatically authorize a user')

const callbackGameSchema = z.object({}).describe('A placeholder, currently holds no information')

const inlineKeyboardButtonSchema = z.object({
  text: z.string().max(64).describe('Label text on the button'),
  url: z.string().optional().describe('HTTP or tg:// url to be opened when button is pressed'),
  login_url: loginUrlSchema.describe(
    'An HTTP URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget.'
  ),
  callback_data: z
    .string()
    .max(64)
    .optional()
    .describe('Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes'),
  switch_inline_query: z
    .string()
    .optional()
    .describe(
      'If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot‘s username and the specified inline query in the input field.'
    ),
  switch_inline_query_current_chat: z
    .string()
    .optional()
    .describe(
      "If set, pressing the button will insert the bot‘s username and the specified inline query in the current chat's input field."
    ),
  callback_game: callbackGameSchema
    .optional()
    .describe('Description of the game that will be launched when the user presses the button.'),
  pay: z.boolean().optional().describe('Specify True, to send a Pay button.'),
})

const replyKeyboardMarkupSchema = z.object({
  keyboard: z
    .array(z.array(keyboardButtonSchema))
    .describe('Array of button rows, each represented by an Array of KeyboardButton objects'),
  resize_keyboard: z
    .boolean()
    .optional()
    .describe('Requests clients to resize the keyboard vertically for optimal fit.'),
  one_time_keyboard: z
    .boolean()
    .optional()
    .describe("Requests clients to hide the keyboard as soon as it's been used."),
  selective: z
    .boolean()
    .optional()
    .describe('Use this parameter if you want to show the keyboard to specific users only.'),
})

const inlineKeyboardMarkupSchema = z.object({
  inline_keyboard: z
    .array(z.array(inlineKeyboardButtonSchema))
    .describe('Array of button rows, each represented by an Array of InlineKeyboardButton objects.'),
  input_field_placeholder: z
    .string()
    .max(64)
    .optional()
    .describe('The placeholder to be shown in the input field when the keyboard is active; 1-64 characters.'),
})

const replyMarkupSchema = z
  .union([replyKeyboardMarkupSchema, inlineKeyboardMarkupSchema])
  .optional()
  .describe('Additional interface options that are available for the bot.')

const sendMessageSchema = z.object({
  type: z.literal('message'),
  text: z.string().max(4096).describe('Text of the message to be sent'),
  parse_mode: z
    .enum(['Markdown', 'MarkdownV2', 'HTML'])
    .optional()
    .describe(
      "Send Markdown, MarkdownV2, or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in your bot's message."
    ),
  reply_markup: replyMarkupSchema,
})

const sendPhotoSchema = z.object({
  type: z.literal('photo'),
  photo: z.union([
    z.string().describe('Photo to send (file id, url, file path, or buffer)'),
    z.instanceof(Buffer).describe('Photo to send (buffer)'),
  ]),
  caption: z.string().max(1024).optional().describe('Photo caption (0-1024 characters)'),
  reply_markup: replyMarkupSchema,
})

const sendAudioSchema = z.object({
  type: z.literal('audio'),
  audio: z.union([
    z.string().describe('Audio to send (file id, url, file path, or buffer)'),
    z.instanceof(Buffer).describe('Audio to send (buffer)'),
  ]),
  caption: z.string().max(1024).optional().describe('Audio caption (0-1024 characters)'),
  reply_markup: replyMarkupSchema,
})

const sendDocumentSchema = z.object({
  type: z.literal('document'),
  document: z.union([
    z.string().describe('Document to send (file id, url, file path, or buffer)'),
    z.instanceof(Buffer).describe('Document to send (buffer)'),
  ]),
  caption: z.string().max(1024).optional().describe('Document caption (0-1024 characters)'),
  reply_markup: replyMarkupSchema,
})

const sendVideoSchema = z.object({
  type: z.literal('video'),
  video: z.union([
    z.string().describe('Video to send (file id, url, file path, or buffer)'),
    z.instanceof(Buffer).describe('Video to send (buffer)'),
  ]),
  caption: z.string().max(1024).optional().describe('Video caption (0-1024 characters)'),
  reply_markup: replyMarkupSchema,
})

const sendLocationSchema = z.object({
  type: z.literal('location'),
  latitude: z.number().min(-90).max(90).describe('Latitude of the location'),
  longitude: z.number().min(-180).max(180).describe('Longitude of the location'),
  reply_markup: replyMarkupSchema,
})

const sendVenueSchema = sendLocationSchema
  .extend({
    type: z.literal('venue'),
    title: z.string().describe('Name of the venue'),
    address: z.string().describe('Address of the venue'),
    foursquare_id: z.string().optional().describe('Optional Foursquare ID of the venue'),
    foursquare_type: z.string().optional().describe('Optional Foursquare type of the venue'),
  })
  .describe('Venue to send')

const sendContactSchema = z.object({
  type: z.literal('contact'),
  phone_number: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  reply_markup: replyMarkupSchema,
})

export const payloadSchema = z.array(
  z.discriminatedUnion('type', [
    sendMessageSchema,
    sendPhotoSchema,
    sendAudioSchema,
    sendDocumentSchema,
    sendVideoSchema,
    sendLocationSchema,
    sendVenueSchema,
    sendContactSchema,
  ])
)
