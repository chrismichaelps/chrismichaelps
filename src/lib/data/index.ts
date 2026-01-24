export * from './tagged-error';
export * from './tagged-enum';
export * from './predicate';
export * from './option';
export * from './functions';
export {
  left,
  right,
  isEither,
  isLeft,
  isRight,
  tryCatch,
  tryCatchAsync,
  getOrElse as eitherGetOrElse,
  getOrThrow,
  fromNullable as eitherFromNullable,
  match as eitherMatch,
  map as eitherMap,
  mapLeft,
  flatMap as eitherFlatMap,
  ok,
  fail,
  toResult,
  toResultAsync,
  resultFromNullable,
  resultGetOrThrow,
  resultGetOrElse,
  resultMap,
  resultMapError,
  resultFlatMap
} from './either';

export type {
  Either,
  Left,
  Right,
  Result
} from './either';