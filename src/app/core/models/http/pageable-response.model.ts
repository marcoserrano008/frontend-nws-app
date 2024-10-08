interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export abstract class PageableResponse<T> {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;

  constructor() {
    this.content = [];
    this.pageable = {
      pageNumber: 0,
      pageSize: 8,
      sort: {
        empty: false,
        sorted: true,
        unsorted: false
      },
      offset: 0,
      paged: true,
      unpaged: false
    };
    this.last = true;
    this.totalElements = 0;
    this.totalPages = 0;
    this.size = 8;
    this.number = 0;
    this.sort = {
      empty: false,
      sorted: true,
      unsorted: false
    };
    this.first = true;
    this.numberOfElements = 0;
    this.empty = true;
  }
}
