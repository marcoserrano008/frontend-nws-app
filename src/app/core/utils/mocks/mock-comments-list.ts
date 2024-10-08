import {SenderUserApiResponseModel} from "@core/models/http/sender-user-api-response.model";
import {CommentApiResponse} from "@core/models/http/comment-api-response.model";

const mockSenderUser: SenderUserApiResponseModel = {
  id: 1,
  accountId: 100,
  username: 'john_doe',
  firstName: 'John',
  lastName: 'Doe',
  createdDate: '2024-01-01T10:00:00'
};

const mockSenderUser2: SenderUserApiResponseModel = {
  id: 2,
  accountId: 101,
  username: 'jane_smith',
  firstName: 'Jane',
  lastName: 'Smith',
  createdDate: '2024-02-01T12:00:00'
};

const mockSenderUser3: SenderUserApiResponseModel = {
  id: 3,
  accountId: 102,
  username: 'alice_jones',
  firstName: 'Alice',
  lastName: 'Jones',
  createdDate: '2024-03-01T14:00:00'
};

export const mockComments: CommentApiResponse[] = [
  {
    id: 1,
    senderUser: mockSenderUser,
    content: 'This is the first comment.',
    repliesCounter: 3,
    createdDate: '2024-10-01T09:00:00',
    replies: [
      {
        id: 2,
        senderUser: mockSenderUser2,
        content: 'This is a reply to the first comment.',
        repliesCounter: 2,
        createdDate: '2024-10-01T10:00:00',
        replies: [
          {
            id: 3,
            senderUser: mockSenderUser,
            content: 'This is a nested reply to the reply.',
            repliesCounter: 1,
            createdDate: '2024-10-01T11:00:00',
            replies: [
              {
                id: 4,
                senderUser: mockSenderUser2,
                content: 'This is a reply to the nested reply.',
                repliesCounter: 1,
                createdDate: '2024-10-01T11:30:00',
                replies: [
                  {
                    id: 5,
                    senderUser: mockSenderUser3,
                    content: 'This is a deep nested reply.',
                    repliesCounter: 0,
                    createdDate: '2024-10-01T12:00:00',
                    replies: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 6,
        senderUser: mockSenderUser3,
        content: 'Another reply to the first comment.',
        repliesCounter: 1,
        createdDate: '2024-10-01T10:30:00',
        replies: [
          {
            id: 7,
            senderUser: mockSenderUser,
            content: 'Nested reply to another reply.',
            repliesCounter: 0,
            createdDate: '2024-10-01T11:15:00',
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 8,
    senderUser: mockSenderUser2,
    content: 'This is the second top-level comment.',
    repliesCounter: 2,
    createdDate: '2024-10-01T12:00:00',
    replies: [
      {
        id: 9,
        senderUser: mockSenderUser,
        content: 'A reply to the second comment.',
        repliesCounter: 2,
        createdDate: '2024-10-01T13:00:00',
        replies: [
          {
            id: 10,
            senderUser: mockSenderUser3,
            content: 'Nested reply to a reply of the second comment.',
            repliesCounter: 1,
            createdDate: '2024-10-01T13:30:00',
            replies: [
              {
                id: 11,
                senderUser: mockSenderUser2,
                content: 'Deeply nested reply to the second comment.',
                repliesCounter: 0,
                createdDate: '2024-10-01T14:00:00',
                replies: []
              }
            ]
          },
          {
            id: 12,
            senderUser: mockSenderUser2,
            content: 'Another nested reply to the second comment.',
            repliesCounter: 0,
            createdDate: '2024-10-01T13:45:00',
            replies: []
          }
        ]
      },
      {
        id: 13,
        senderUser: mockSenderUser3,
        content: 'Another reply to the second top-level comment.',
        repliesCounter: 0,
        createdDate: '2024-10-01T13:15:00',
        replies: []
      }
    ]
  },
  {
    id: 14,
    senderUser: mockSenderUser3,
    content: 'This is the third top-level comment with no replies.',
    repliesCounter: 0,
    createdDate: '2024-10-01T14:00:00',
    replies: []
  }
];
