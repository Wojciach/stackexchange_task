// types.ts
export type Order = 'desc' | 'asc'; 
export type Sort = 'popular' | 'activity' | 'name';
export type Page = number;
export type PageSize = number;
export type Search = string;

export type UrlDataType = {
    page: Page,
    pageSize: PageSize,
    order: Order,
    sort: Sort,
    search: Search
  }

  export type AppErrorType = {
    id: number | null;
    message: string | null;
  } | null;

  export type TableData = Array<object> | null;

  export const initialValues: UrlDataType = {
    page: 1,
    pageSize: 10,
    order: 'desc',
    sort: 'popular',
    search: ''
  }
