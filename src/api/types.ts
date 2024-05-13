export interface Pagination {
  pageNo?: number;
  pageSize?: number;
}

export interface User {
  userId: number;
  name: string;
  username: string;
  photo?: string[];
  description?: string;
  isWorking?: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: {
    sorted: boolean;
    empty: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface BaseEntityListDTO {
  content: any;
  pageable?: Pageable;
}

export interface DoctorsList extends BaseEntityListDTO {
  content: User[];
}

// "totalPages": 1,
// "totalElements": 1,
// "last": true,
// "size": 10,
// "number": 0,
// "sort": {
//   "sorted": false,
//   "empty": true,
//   "unsorted": true
// },
// "numberOfElements": 1,
// "first": true,
// "empty": false
