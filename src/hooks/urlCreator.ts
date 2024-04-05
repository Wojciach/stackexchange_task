import { UrlDataType } from '../types/types';

export function urlCreator(urlData: UrlDataType): string {
    const url = new URL('https://api.stackexchange.com/2.3/tags');
    const params = new URLSearchParams({
      site: 'stackoverflow',
      order: urlData.order || 'desc',
      sort: urlData.sort || 'popular',
    });
  
    if (urlData.page) params.append('page', urlData.page.toString());
    if (urlData.pageSize) params.append('pagesize', urlData.pageSize.toString());
    if (urlData.search) params.append('inname', urlData.search);
  
    url.search = params.toString();
    
    console.log(url.toString());
    return url.toString();
  }