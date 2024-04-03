// types.ts
export type Order = 'desc' | 'asc'; 
export type Sort = 'popular' | 'activity' | 'name';
export type Page = number;
export type PageSize = number;
export type Search = string;

export type UrlDataType = {
    page?: Page,
    pagesize?: PageSize,
    order?: Order,
    sort?: Sort,
    search?: Search
    returnedData?: any;
  }
