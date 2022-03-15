
import queryString, { ParsedQuery, ParsedUrl } from 'query-string';

export interface ResizeUriOpts {
  uri: string;
  width?: number;
  height?: number;
}

export function getResizedUri(opts: ResizeUriOpts) {
  let parsedUri: ParsedUrl, parsedQuery: ParsedQuery;
  let resizedUri: string;
  const {
    uri,
    width,
    height,
  } = opts;
  parsedUri = queryString.parseUrl(uri);
  parsedQuery = parsedUri.query;
  if(opts.width !== undefined) {
    parsedQuery.width = width + '';
  }
  if(opts.height !== undefined) {
    parsedQuery.height = height + '';
  }
  resizedUri = queryString.stringifyUrl({
    url: parsedUri.url,
    query: parsedQuery
  });
  return resizedUri;
}
