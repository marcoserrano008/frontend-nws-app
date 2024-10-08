import {BulletinApiResponse} from "@core/models/http/bulletin-api-response.model";
import {Bulletin} from "@core/models/bulletin.model";
import {Post} from "@nwsState/models/post.model";

export const mockBulletinList: Post[] = [
  {
    id: 1,
    accountId: 12345,
    senderUser: {
      id: 1,
      createdDate: "2024-10-01T12:30:00",
      username: "marcoserrano008",
      lastName: "Serrano Bazan",
      firstName: "Marco Antonio",
      accountId: 111
    },
    body: "This is a mock bulletin for testing purposes.",
    createdDate: "2024-10-01T12:30:00",
    commentsCounter: 5,
    attachments: [
      {
        id: 1,
        field: "file",
        size: 1024,
        name: "document.pdf",
        mimeType: "application/pdf"
      },
      {
        id: 2,
        field: "image",
        size: 2048,
        name: "picture.jpg",
        mimeType: "image/jpeg"
      },
      {
        id: 3,
        field: "image",
        size: 2048,
        name: "document2.pdf",
        mimeType: "image/jpeg"
      }
    ]
  },
  {
    id: 2,
    accountId: 12345,
    senderUser: {
      id: 1,
      createdDate: "2024-10-01T12:30:00",
      username: "marcoserrano008",
      lastName: "Serrano Bazan",
      firstName: "Marco Antonio",
      accountId: 111
    },
    body: "This is a mock bulletin for testing purposes.",
    createdDate: "2024-10-01T12:30:00",
    commentsCounter: 5,
    attachments: [
      {
        id: 1,
        field: "file",
        size: 1024,
        name: "document.pdf",
        mimeType: "application/pdf"
      },
      {
        id: 2,
        field: "image",
        size: 2048,
        name: "picture.jpg",
        mimeType: "image/jpeg"
      },
      {
        id: 3,
        field: "image",
        size: 2048,
        name: "document2.pdf",
        mimeType: "image/jpeg"
      }
    ]
  },
  {
    id: 3,
    accountId: 12345,
    senderUser: {
      id: 1,
      createdDate: "2024-10-01T12:30:00",
      username: "marcoserrano008",
      lastName: "Serrano Bazan",
      firstName: "Marco Antonio",
      accountId: 111
    },
    body: "This is a mock bulletin for testing purposes. This is a mock bulletin for testing purposes This is a mock bulletin for testing purposes",
    createdDate: "2024-10-01T12:30:00",
    commentsCounter: 5,
    attachments: [
    ]
  },
  {
    id: 4,
    accountId: 12345,
    senderUser: {
      id: 1,
      createdDate: "2024-10-01T12:30:00",
      username: "marcoserrano008",
      lastName: "Serrano Bazan",
      firstName: "Marco Antonio",
      accountId: 111
    },
    body: "This is a mock bulletin for testing purposes. This is a mock bulletin for testing purposes This is a mock bulletin for testing purposes",
    createdDate: "2024-10-01T12:30:00",
    commentsCounter: 5,
    attachments: [
    ]
  },
  {
    id: 5,
    accountId: 12345,
    senderUser: {
      id: 1,
      createdDate: "2024-10-01T12:30:00",
      username: "marcoserrano008",
      lastName: "Serrano Bazan",
      firstName: "Marco Antonio",
      accountId: 111
    },
    body: "This is a mock bulletin for testing purposes. This is a mock bulletin for testing purposes This is a mock bulletin for testing purposes",
    createdDate: "2024-10-01T12:30:00",
    commentsCounter: 5,
    attachments: [
    ]
  },
  {
    id: 6,
    accountId: 12345,
    senderUser: {
      id: 1,
      createdDate: "2024-10-01T12:30:00",
      username: "marcoserrano008",
      lastName: "Serrano Bazan",
      firstName: "Marco Antonio",
      accountId: 111
    },
    body: "This is a mock bulletin for testing purposes. This is a mock bulletin for testing purposes This is a mock bulletin for testing purposes",
    createdDate: "2024-10-01T12:30:00",
    commentsCounter: 5,
    attachments: [
    ]
  },
  {
    id: 7,
    accountId: 12345,
    senderUser: {
      id: 1,
      createdDate: "2024-10-01T12:30:00",
      username: "marcoserrano008",
      lastName: "Serrano Bazan",
      firstName: "Marco Antonio",
      accountId: 111
    },
    body: "This is a mock bulletin for testing purposes. This is a mock bulletin for testing purposes This is a mock bulletin for testing purposes",
    createdDate: "2024-10-01T12:30:00",
    commentsCounter: 5,
    attachments: [
    ]
  },
  {
    id: 8,
    accountId: 12345,
    senderUser: {
      id: 1,
      createdDate: "2024-10-01T12:30:00",
      username: "marcoserrano008",
      lastName: "Serrano Bazan",
      firstName: "Marco Antonio",
      accountId: 111
    },
    body: "This is a mock bulletin for testing purposes. This is a mock bulletin for testing purposes This is a mock bulletin for testing purposes",
    createdDate: "2024-10-01T12:30:00",
    commentsCounter: 5,
    attachments: [
    ]
  }
]
