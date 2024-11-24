
import queryString, { ParsedQuery, ParsedUrl } from 'query-string';
import { ImgSz } from '../models/ezd-api/img-sz';

export interface ResizeUriOpts {
  uri: string;
  sz?: ImgSz;
  width?: number;
  height?: number;
}

export function getResizedUri(opts: ResizeUriOpts) {
  let parsedUri: ParsedUrl, parsedQuery: ParsedQuery;
  let resizedUri: string;
  const {
    uri,
    sz,
    width,
    height,
  } = opts;
  parsedUri = queryString.parseUrl(uri);
  parsedQuery = parsedUri.query;
  if(opts.sz !== undefined) {
    parsedQuery.sz = sz;
  } else {
    if(opts.width !== undefined) {
      parsedQuery.width = width + '';
    }
    if(opts.height !== undefined) {
      parsedQuery.height = height + '';
    }
  }
  resizedUri = queryString.stringifyUrl({
    url: parsedUri.url,
    query: parsedQuery
  });
  return resizedUri;
}
