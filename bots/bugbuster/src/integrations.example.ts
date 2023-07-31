import { Integration } from '@botpress/client'

export type Teams = typeof teams
export const teams = {
  id: '6c31e659-d799-4045-b82f-6a87febdf644',
  name: 'teams',
  title: 'Microsoft Teams',
  description: 'This integration allows your bot to interact with Microsoft Teams.',
  iconUrl: 'https://mediafiles.botpress.cloud/8e6e9fb9-7a71-4091-9f43-6a9d98ff8209/integration/icon.svg',
  readmeUrl: 'https://mediafiles.botpress.cloud/6c31e659-d799-4045-b82f-6a87febdf644/integration-version/readme.md',
  createdAt: '2023-02-10T00:38:17.530Z',
  updatedAt: '2023-07-19T19:03:45.139Z',
  version: '0.2.0',
  configuration: {
    schema: {
      type: 'object',
      properties: {
        appId: {
          type: 'string',
        },
        appPassword: {
          type: 'string',
        },
      },
      required: ['appId', 'appPassword'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
  },
  actions: {},
  events: {},
  user: {
    tags: {
      id: {},
    },
    creation: {
      enabled: false,
      requiredTags: [],
    },
  },
  states: {
    conversation: {
      type: 'conversation',
      schema: {
        type: 'object',
        properties: {
          activityId: {
            type: 'string',
          },
          user: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
            },
            required: ['id', 'name'],
            additionalProperties: false,
          },
          locale: {
            type: 'string',
          },
          bot: {
            $ref: '#/properties/user',
          },
          conversation: {},
          channelId: {
            type: 'string',
          },
          serviceUrl: {
            type: 'string',
          },
        },
        additionalProperties: false,
        $schema: 'http://json-schema.org/draft-07/schema#',
      },
    },
  },
  channels: {
    channel: {
      conversation: {
        tags: {
          id: {},
        },
        creation: {
          enabled: false,
          requiredTags: [],
        },
      },
      messages: {
        choice: {
          schema: {
            type: 'object',
            properties: {
              text: {
                type: 'string',
                minLength: 1,
              },
              options: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    label: {
                      $ref: '#/properties/text',
                    },
                    value: {
                      $ref: '#/properties/text',
                    },
                  },
                  required: ['label', 'value'],
                  additionalProperties: false,
                },
              },
            },
            required: ['text', 'options'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        dropdown: {
          schema: {
            type: 'object',
            properties: {
              text: {
                type: 'string',
                minLength: 1,
              },
              options: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    label: {
                      $ref: '#/properties/text',
                    },
                    value: {
                      $ref: '#/properties/text',
                    },
                  },
                  required: ['label', 'value'],
                  additionalProperties: false,
                },
              },
            },
            required: ['text', 'options'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        card: {
          schema: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                minLength: 1,
              },
              subtitle: {
                $ref: '#/properties/title',
              },
              imageUrl: {
                $ref: '#/properties/title',
              },
              actions: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    action: {
                      type: 'string',
                      enum: ['postback', 'url', 'say'],
                    },
                    label: {
                      $ref: '#/properties/title',
                    },
                    value: {
                      $ref: '#/properties/title',
                    },
                  },
                  required: ['action', 'label', 'value'],
                  additionalProperties: false,
                },
              },
            },
            required: ['title', 'actions'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        carousel: {
          schema: {
            type: 'object',
            properties: {
              items: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    title: {
                      type: 'string',
                      minLength: 1,
                    },
                    subtitle: {
                      $ref: '#/properties/items/items/properties/title',
                    },
                    imageUrl: {
                      $ref: '#/properties/items/items/properties/title',
                    },
                    actions: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          action: {
                            type: 'string',
                            enum: ['postback', 'url', 'say'],
                          },
                          label: {
                            $ref: '#/properties/items/items/properties/title',
                          },
                          value: {
                            $ref: '#/properties/items/items/properties/title',
                          },
                        },
                        required: ['action', 'label', 'value'],
                        additionalProperties: false,
                      },
                    },
                  },
                  required: ['title', 'actions'],
                  additionalProperties: false,
                },
              },
            },
            required: ['items'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        location: {
          schema: {
            type: 'object',
            properties: {
              latitude: {
                type: 'number',
              },
              longitude: {
                type: 'number',
              },
              address: {
                type: 'string',
              },
              title: {
                type: 'string',
              },
            },
            required: ['latitude', 'longitude'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        file: {
          schema: {
            type: 'object',
            properties: {
              fileUrl: {
                type: 'string',
                minLength: 1,
              },
              title: {
                $ref: '#/properties/fileUrl',
              },
            },
            required: ['fileUrl'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        video: {
          schema: {
            type: 'object',
            properties: {
              videoUrl: {
                type: 'string',
                minLength: 1,
              },
            },
            required: ['videoUrl'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        audio: {
          schema: {
            type: 'object',
            properties: {
              audioUrl: {
                type: 'string',
                minLength: 1,
              },
            },
            required: ['audioUrl'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        image: {
          schema: {
            type: 'object',
            properties: {
              imageUrl: {
                type: 'string',
                minLength: 1,
              },
            },
            required: ['imageUrl'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        markdown: {
          schema: {
            type: 'object',
            properties: {
              markdown: {
                type: 'string',
                minLength: 1,
              },
            },
            required: ['markdown'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        text: {
          schema: {
            type: 'object',
            properties: {
              text: {
                type: 'string',
                minLength: 1,
              },
            },
            required: ['text'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
      },
      message: {
        tags: {
          id: {},
        },
      },
    },
  },
  dev: false,
} satisfies Integration

export type Linear = typeof linear
export const linear = {
  id: '28bb67cb-6d78-468b-b605-e6f9e0d71a4a',
  name: 'linear',
  title: 'Linear',
  description: 'Linear integration for Botpress',
  iconUrl: 'https://mediafiles.botpress.cloud/3fb4db53-a132-4016-b84c-5b5bc2008dd4/integration/icon.svg',
  readmeUrl: 'https://mediafiles.botpress.cloud/28bb67cb-6d78-468b-b605-e6f9e0d71a4a/integration-version/readme.md',
  createdAt: '2023-05-31T15:09:57.264Z',
  updatedAt: '2023-07-19T19:03:24.256Z',
  version: '0.2.0',
  configuration: {
    schema: {
      type: 'object',
      properties: {},
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
  },
  actions: {
    updateIssue: {
      title: 'Update Issue',
      input: {
        schema: {
          type: 'object',
          properties: {
            issueId: {
              type: 'string',
              title: 'Issue ID',
              examples: ['{{event.payload.id}}'],
            },
            priority: {
              type: 'number',
              description: '0 = none, 1 = urgent, 2 = high, 3 = medium, 4 = low',
              title: 'Priority',
            },
            teamName: {
              type: 'string',
              description: 'Type a name to change the assigned team of the issue',
              title: 'Move to team...',
            },
            labels: {
              type: 'array',
              items: {
                type: 'string',
              },
              default: ['type/dx'],
              description: 'One or multiple labels to assign to this issue',
              title: 'Set labels',
            },
            project: {
              type: 'string',
              description: 'A project to associate to this issue',
              title: 'Associate to project...',
            },
          },
          required: ['issueId'],
          additionalProperties: false,
          $schema: 'http://json-schema.org/draft-07/schema#',
        },
      },
      output: {
        schema: {
          type: 'object',
          properties: {
            issue: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                },
                number: {
                  type: 'number',
                },
                identifier: {
                  type: 'string',
                },
                title: {
                  type: 'string',
                },
                description: {
                  type: 'string',
                },
                priority: {
                  type: 'number',
                },
                url: {
                  type: 'string',
                },
                createdAt: {
                  type: 'string',
                  format: 'date-time',
                },
                updatedAt: {
                  type: 'string',
                  format: 'date-time',
                },
              },
              required: ['id', 'number', 'identifier', 'title', 'priority', 'url', 'createdAt', 'updatedAt'],
              additionalProperties: false,
            },
          },
          additionalProperties: false,
          $schema: 'http://json-schema.org/draft-07/schema#',
        },
      },
    },
    createIssue: {
      title: 'Create Issue',
      input: {
        schema: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              minLength: 1,
            },
            description: {
              type: 'string',
              description: 'The content of the issue',
            },
            priority: {
              type: 'number',
              description: '0 = none, 1 = urgent, 2 = high, 3 = medium, 4 = low',
            },
            teamName: {
              type: 'string',
              description: 'Name of the team to assign the issue to',
            },
            labels: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'One or multiple labels to assign to this issue',
            },
            project: {
              type: 'string',
              description: 'A project to associate to this issue',
            },
          },
          required: ['title', 'description', 'teamName'],
          additionalProperties: false,
          $schema: 'http://json-schema.org/draft-07/schema#',
        } as const,
      },
      output: {
        schema: {
          type: 'object',
          properties: {
            issue: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                },
                number: {
                  type: 'number',
                },
                identifier: {
                  type: 'string',
                },
                title: {
                  type: 'string',
                },
                description: {
                  type: 'string',
                },
                priority: {
                  type: 'number',
                },
                url: {
                  type: 'string',
                },
                createdAt: {
                  type: 'string',
                  format: 'date-time',
                },
                updatedAt: {
                  type: 'string',
                  format: 'date-time',
                },
              },
              required: ['id', 'number', 'identifier', 'title', 'priority', 'url', 'createdAt', 'updatedAt'],
              additionalProperties: false,
            },
          },
          required: ['issue'],
          additionalProperties: false,
          $schema: 'http://json-schema.org/draft-07/schema#',
        },
      },
    },
    findTarget: {
      title: 'Find Target',
      description: 'Find a target on Linear',
      input: {
        schema: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              minLength: 2,
            },
            channel: {
              type: 'string',
              enum: ['issue'],
            },
          },
          required: ['query', 'channel'],
          additionalProperties: false,
          $schema: 'http://json-schema.org/draft-07/schema#',
        },
      },
      output: {
        schema: {
          type: 'object',
          properties: {
            targets: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  displayName: {
                    type: 'string',
                  },
                  tags: {
                    type: 'object',
                    additionalProperties: {
                      type: 'string',
                    },
                  },
                  channel: {
                    type: 'string',
                    enum: ['issue'],
                  },
                },
                required: ['displayName', 'tags', 'channel'],
                additionalProperties: false,
              },
            },
          },
          required: ['targets'],
          additionalProperties: false,
          $schema: 'http://json-schema.org/draft-07/schema#',
        },
      },
    },
    getIssue: {
      title: 'Get Issue',
      input: {
        schema: {
          type: 'object',
          properties: {
            issueId: {
              type: 'string',
              description: 'The issue ID on Linear. Ex: {{event.payload.linearIds.issueId}}',
            },
          },
          required: ['issueId'],
          additionalProperties: false,
          $schema: 'http://json-schema.org/draft-07/schema#',
        },
      },
      output: {
        schema: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            number: {
              type: 'number',
            },
            identifier: {
              type: 'string',
            },
            title: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            priority: {
              type: 'number',
            },
            url: {
              type: 'string',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
          required: ['id', 'number', 'identifier', 'title', 'priority', 'url', 'createdAt', 'updatedAt'],
          additionalProperties: false,
          $schema: 'http://json-schema.org/draft-07/schema#',
        },
      },
    },
    getUser: {
      title: 'Get User Profile',
      description: 'Get a user profile from Linear',
      input: {
        schema: {
          type: 'object',
          properties: {
            linearUserId: {
              type: 'string',
              description: "The user's ID on Linear. Ex: {{event.payload.linearIds.creatorId}}",
            },
          },
          required: ['linearUserId'],
          additionalProperties: false,
          $schema: 'http://json-schema.org/draft-07/schema#',
        },
      },
      output: {
        schema: {
          type: 'object',
          properties: {
            linearId: {
              type: 'string',
              description: 'Linear User ID',
            },
            admin: {
              type: 'boolean',
              description: 'Indicates if the user is an admin of the organization',
            },
            archivedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Date when the user was archived',
            },
            avatarUrl: {
              type: 'string',
              format: 'uri',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Date when the user was created',
            },
            description: {
              type: 'string',
              description: 'A short description of the user, either its title or bio',
            },
            displayName: {
              type: 'string',
              description: "The user's display (nick) name. Unique within each organization",
            },
            guest: {
              type: 'boolean',
              description: 'Whether the user is a guest in the workspace and limited to accessing a subset of teams',
            },
            email: {
              type: 'string',
            },
            isMe: {
              type: 'boolean',
              description: 'Whether the user is the currently authenticated user',
            },
            url: {
              type: 'string',
              description: "User's profile URL",
            },
            timezone: {
              type: 'string',
              description: 'The local timezone of the user',
            },
            name: {
              type: 'string',
              description: "The user's full name",
            },
          },
          required: ['linearId', 'admin', 'createdAt', 'displayName', 'guest', 'email', 'isMe', 'url', 'name'],
          additionalProperties: false,
          $schema: 'http://json-schema.org/draft-07/schema#',
        },
      },
    },
  },
  events: {
    issueCreated: {
      title: 'Issue Created',
      schema: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            description: 'The issue title on Linear, such as "Fix the bug',
          },
          number: {
            type: 'number',
            description: 'The issue number on Linear, such as "123" in XXX-123',
          },
          teamName: {
            type: 'string',
            description: 'The name of the Linear team the issue currently belongs to, such as "Customer Support"',
          },
          teamKey: {
            type: 'string',
            description: 'The key of the Linear team the issue currently belongs to, such as "XXX" in XXX-123',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'The ISO date the issue was created',
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            description: 'The ISO date the issue was last updated',
          },
          status: {
            type: 'string',
            description: 'The issue State name (such as "In Progress"',
          },
          priority: {
            type: 'number',
            description: 'Priority of the issue, such as "1" for "Urgent", 0 for "No Priority"',
          },
          description: {
            type: 'string',
            description: 'A markdown description of the issue. Images and videos are inlined using markdown links.',
          },
          labels: {
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'Label names',
          },
          linearIds: {
            type: 'object',
            properties: {
              creatorId: {
                type: 'string',
                description: 'The internal Linear User ID of the user who created the issue',
              },
              labelIds: {
                type: 'array',
                items: {
                  type: 'string',
                },
                description: 'The internal Linear Label IDs associated with the issue',
              },
              issueId: {
                type: 'string',
                description: 'The internal Linear Issue ID',
              },
              teamId: {
                type: 'string',
                description: 'The internal Linear Team ID',
              },
              projectId: {
                type: 'string',
                description: 'The internal Linear Project ID',
              },
              assigneeId: {
                type: 'string',
                description: 'The internal Linear Assignee ID',
              },
              subscriberIds: {
                type: 'array',
                items: {
                  type: 'string',
                },
                description: 'The internal Linear Subscriber User IDs',
              },
            },
            required: ['creatorId', 'issueId', 'teamId'],
            additionalProperties: false,
            description: 'The Linear IDs of the referenced entities',
          },
          userId: {
            type: 'string',
            description: 'Botpress User ID of the person who created the issue',
          },
          conversationId: {
            type: 'string',
            description: 'Botpress Conversation ID of the issue',
          },
          targets: {
            type: 'object',
            properties: {
              issue: {
                type: 'object',
                additionalProperties: {
                  type: 'string',
                },
              },
            },
            additionalProperties: false,
          },
        },
        required: [
          'title',
          'number',
          'teamName',
          'teamKey',
          'createdAt',
          'updatedAt',
          'status',
          'priority',
          'userId',
          'conversationId',
          'targets',
        ],
        additionalProperties: false,
        $schema: 'http://json-schema.org/draft-07/schema#',
      },
    },
    issueUpdated: {
      title: 'Issue Updated',
      schema: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            description: 'The issue title on Linear, such as "Fix the bug',
          },
          number: {
            type: 'number',
            description: 'The issue number on Linear, such as "123" in XXX-123',
          },
          teamName: {
            type: 'string',
            description: 'The name of the Linear team the issue currently belongs to, such as "Customer Support"',
          },
          teamKey: {
            type: 'string',
            description: 'The key of the Linear team the issue currently belongs to, such as "XXX" in XXX-123',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'The ISO date the issue was created',
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            description: 'The ISO date the issue was last updated',
          },
          status: {
            type: 'string',
            description: 'The issue State name (such as "In Progress"',
          },
          priority: {
            type: 'number',
            description: 'Priority of the issue, such as "1" for "Urgent", 0 for "No Priority"',
          },
          description: {
            type: 'string',
            description: 'A markdown description of the issue. Images and videos are inlined using markdown links.',
          },
          labels: {
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'Label names',
          },
          linearIds: {
            type: 'object',
            properties: {
              creatorId: {
                type: 'string',
                description: 'The internal Linear User ID of the user who created the issue',
              },
              labelIds: {
                type: 'array',
                items: {
                  type: 'string',
                },
                description: 'The internal Linear Label IDs associated with the issue',
              },
              issueId: {
                type: 'string',
                description: 'The internal Linear Issue ID',
              },
              teamId: {
                type: 'string',
                description: 'The internal Linear Team ID',
              },
              projectId: {
                type: 'string',
                description: 'The internal Linear Project ID',
              },
              assigneeId: {
                type: 'string',
                description: 'The internal Linear Assignee ID',
              },
              subscriberIds: {
                type: 'array',
                items: {
                  type: 'string',
                },
                description: 'The internal Linear Subscriber User IDs',
              },
            },
            required: ['creatorId', 'issueId', 'teamId'],
            additionalProperties: false,
            description: 'The Linear IDs of the referenced entities',
          },
          userId: {
            type: 'string',
            description: 'Botpress User ID of the person who created the issue',
          },
          conversationId: {
            type: 'string',
            description: 'Botpress Conversation ID of the issue',
          },
          targets: {
            type: 'object',
            properties: {
              issue: {
                type: 'object',
                additionalProperties: {
                  type: 'string',
                },
              },
            },
            additionalProperties: false,
          },
        },
        required: [
          'title',
          'number',
          'teamName',
          'teamKey',
          'createdAt',
          'updatedAt',
          'status',
          'priority',
          'userId',
          'conversationId',
          'targets',
        ],
        additionalProperties: false,
        $schema: 'http://json-schema.org/draft-07/schema#',
      },
    },
  },
  user: {
    tags: {
      id: {},
    },
    creation: {
      enabled: false,
      requiredTags: [],
    },
  },
  states: {
    configuration: {
      type: 'integration',
      schema: {
        type: 'object',
        properties: {
          botUserId: {
            type: 'string',
          },
        },
        additionalProperties: false,
        $schema: 'http://json-schema.org/draft-07/schema#',
      },
    },
    credentials: {
      type: 'integration',
      schema: {
        type: 'object',
        properties: {
          accessToken: {
            type: 'string',
          },
          expiresAt: {
            type: 'string',
          },
        },
        required: ['accessToken', 'expiresAt'],
        additionalProperties: false,
        $schema: 'http://json-schema.org/draft-07/schema#',
      },
    },
    profile: {
      type: 'user',
      schema: {
        type: 'object',
        properties: {
          linearId: {
            type: 'string',
            description: 'Linear User ID',
            title: 'Linear User ID',
          },
          admin: {
            type: 'boolean',
            description: 'Indicates if the user is an admin of the organization',
            title: 'Is admin?',
          },
          archivedAt: {
            type: 'string',
            format: 'date-time',
            description: 'Date when the user was archived',
            title: 'Archived at',
          },
          avatarUrl: {
            type: 'string',
            format: 'uri',
            title: 'Avatar URL',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Date when the user was created',
            title: 'Created at',
          },
          description: {
            type: 'string',
            description: 'A short description of the user, either its title or bio',
            title: 'Profile Description',
          },
          displayName: {
            type: 'string',
            description: "The user's display (nick) name. Unique within each organization",
            title: 'Display Name',
            examples: ['louis.moreau', 'sylvain.perron'],
          },
          guest: {
            type: 'boolean',
            description: 'Whether the user is a guest in the workspace and limited to accessing a subset of teams',
            title: 'Is a guest?',
          },
          email: {
            type: 'string',
            title: 'User Email',
          },
          isMe: {
            type: 'boolean',
            description: 'Whether the user is the currently authenticated user',
            title: 'Is me?',
          },
          url: {
            type: 'string',
            description: "User's profile URL",
            title: 'Profile URL',
          },
          timezone: {
            type: 'string',
            description: 'The local timezone of the user',
            title: 'Timezone',
            examples: ['Europe/Paris'],
          },
          name: {
            type: 'string',
            description: "The user's full name",
            title: 'Full Name',
            examples: ['Louis Moreau', 'Sylvain Perron'],
          },
        },
        required: ['linearId', 'admin', 'createdAt', 'displayName', 'guest', 'email', 'isMe', 'url', 'name'],
        additionalProperties: false,
        $schema: 'http://json-schema.org/draft-07/schema#',
      },
    },
  },
  channels: {
    channel: {
      conversation: {
        tags: {
          id: {},
        },
        creation: {
          enabled: false,
          requiredTags: [],
        },
      },
      messages: {
        choice: {
          schema: {
            type: 'object',
            properties: {
              text: {
                type: 'string',
                minLength: 1,
              },
              options: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    label: {
                      $ref: '#/properties/text',
                    },
                    value: {
                      $ref: '#/properties/text',
                    },
                  },
                  required: ['label', 'value'],
                  additionalProperties: false,
                },
              },
            },
            required: ['text', 'options'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        dropdown: {
          schema: {
            type: 'object',
            properties: {
              text: {
                type: 'string',
                minLength: 1,
              },
              options: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    label: {
                      $ref: '#/properties/text',
                    },
                    value: {
                      $ref: '#/properties/text',
                    },
                  },
                  required: ['label', 'value'],
                  additionalProperties: false,
                },
              },
            },
            required: ['text', 'options'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        card: {
          schema: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                minLength: 1,
              },
              subtitle: {
                $ref: '#/properties/title',
              },
              imageUrl: {
                $ref: '#/properties/title',
              },
              actions: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    action: {
                      type: 'string',
                      enum: ['postback', 'url', 'say'],
                    },
                    label: {
                      $ref: '#/properties/title',
                    },
                    value: {
                      $ref: '#/properties/title',
                    },
                  },
                  required: ['action', 'label', 'value'],
                  additionalProperties: false,
                },
              },
            },
            required: ['title', 'actions'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        carousel: {
          schema: {
            type: 'object',
            properties: {
              items: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    title: {
                      type: 'string',
                      minLength: 1,
                    },
                    subtitle: {
                      $ref: '#/properties/items/items/properties/title',
                    },
                    imageUrl: {
                      $ref: '#/properties/items/items/properties/title',
                    },
                    actions: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          action: {
                            type: 'string',
                            enum: ['postback', 'url', 'say'],
                          },
                          label: {
                            $ref: '#/properties/items/items/properties/title',
                          },
                          value: {
                            $ref: '#/properties/items/items/properties/title',
                          },
                        },
                        required: ['action', 'label', 'value'],
                        additionalProperties: false,
                      },
                    },
                  },
                  required: ['title', 'actions'],
                  additionalProperties: false,
                },
              },
            },
            required: ['items'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        location: {
          schema: {
            type: 'object',
            properties: {
              latitude: {
                type: 'number',
              },
              longitude: {
                type: 'number',
              },
            },
            required: ['latitude', 'longitude'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        file: {
          schema: {
            type: 'object',
            properties: {
              fileUrl: {
                type: 'string',
                minLength: 1,
              },
              title: {
                $ref: '#/properties/fileUrl',
              },
            },
            required: ['fileUrl'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        video: {
          schema: {
            type: 'object',
            properties: {
              videoUrl: {
                type: 'string',
                minLength: 1,
              },
            },
            required: ['videoUrl'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        audio: {
          schema: {
            type: 'object',
            properties: {
              audioUrl: {
                type: 'string',
                minLength: 1,
              },
            },
            required: ['audioUrl'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        image: {
          schema: {
            type: 'object',
            properties: {
              imageUrl: {
                type: 'string',
                minLength: 1,
              },
            },
            required: ['imageUrl'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        markdown: {
          schema: {
            type: 'object',
            properties: {
              markdown: {
                type: 'string',
                minLength: 1,
              },
            },
            required: ['markdown'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        text: {
          schema: {
            type: 'object',
            properties: {
              text: {
                type: 'string',
                minLength: 1,
              },
            },
            required: ['text'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
      },
      message: {
        tags: {
          id: {},
        },
      },
    },
    issue: {
      conversation: {
        tags: {
          id: {},
        },
        creation: {
          enabled: true,
          requiredTags: [],
        },
      },
      messages: {
        text: {
          schema: {
            type: 'object',
            properties: {
              text: {
                type: 'string',
                minLength: 1,
              },
            },
            required: ['text'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        markdown: {
          schema: {
            type: 'object',
            properties: {
              markdown: {
                type: 'string',
                minLength: 1,
              },
            },
            required: ['markdown'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        image: {
          schema: {
            type: 'object',
            properties: {
              imageUrl: {
                type: 'string',
                minLength: 1,
              },
            },
            required: ['imageUrl'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        audio: {
          schema: {
            type: 'object',
            properties: {
              audioUrl: {
                type: 'string',
                minLength: 1,
              },
            },
            required: ['audioUrl'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        video: {
          schema: {
            type: 'object',
            properties: {
              videoUrl: {
                type: 'string',
                minLength: 1,
              },
            },
            required: ['videoUrl'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        file: {
          schema: {
            type: 'object',
            properties: {
              fileUrl: {
                type: 'string',
                minLength: 1,
              },
              title: {
                $ref: '#/properties/fileUrl',
              },
            },
            required: ['fileUrl'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        location: {
          schema: {
            type: 'object',
            properties: {
              latitude: {
                type: 'number',
              },
              longitude: {
                type: 'number',
              },
              address: {
                type: 'string',
              },
              title: {
                type: 'string',
              },
            },
            required: ['latitude', 'longitude'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        carousel: {
          schema: {
            type: 'object',
            properties: {
              items: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    title: {
                      type: 'string',
                      minLength: 1,
                    },
                    subtitle: {
                      $ref: '#/properties/items/items/properties/title',
                    },
                    imageUrl: {
                      $ref: '#/properties/items/items/properties/title',
                    },
                    actions: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          action: {
                            type: 'string',
                            enum: ['postback', 'url', 'say'],
                          },
                          label: {
                            $ref: '#/properties/items/items/properties/title',
                          },
                          value: {
                            $ref: '#/properties/items/items/properties/title',
                          },
                        },
                        required: ['action', 'label', 'value'],
                        additionalProperties: false,
                      },
                    },
                  },
                  required: ['title', 'actions'],
                  additionalProperties: false,
                },
              },
            },
            required: ['items'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        card: {
          schema: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                minLength: 1,
              },
              subtitle: {
                $ref: '#/properties/title',
              },
              imageUrl: {
                $ref: '#/properties/title',
              },
              actions: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    action: {
                      type: 'string',
                      enum: ['postback', 'url', 'say'],
                    },
                    label: {
                      $ref: '#/properties/title',
                    },
                    value: {
                      $ref: '#/properties/title',
                    },
                  },
                  required: ['action', 'label', 'value'],
                  additionalProperties: false,
                },
              },
            },
            required: ['title', 'actions'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        dropdown: {
          schema: {
            type: 'object',
            properties: {
              text: {
                type: 'string',
                minLength: 1,
              },
              options: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    label: {
                      $ref: '#/properties/text',
                    },
                    value: {
                      $ref: '#/properties/text',
                    },
                  },
                  required: ['label', 'value'],
                  additionalProperties: false,
                },
              },
            },
            required: ['text', 'options'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
        choice: {
          schema: {
            type: 'object',
            properties: {
              text: {
                type: 'string',
                minLength: 1,
              },
              options: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    label: {
                      $ref: '#/properties/text',
                    },
                    value: {
                      $ref: '#/properties/text',
                    },
                  },
                  required: ['label', 'value'],
                  additionalProperties: false,
                },
              },
            },
            required: ['text', 'options'],
            additionalProperties: false,
            $schema: 'http://json-schema.org/draft-07/schema#',
          },
        },
      },
      message: {
        tags: {
          id: {},
        },
      },
    },
  },
  dev: false,
} satisfies Integration
