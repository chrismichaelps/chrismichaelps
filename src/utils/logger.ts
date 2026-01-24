import { taggedEnum } from '../lib/data/tagged-enum';
import { TaggedError, isTaggedError } from '../lib/data/tagged-error';
import { matchTag } from '../lib/data/functions';

type LogLevelDebug = { readonly _tag: 'Debug' };
type LogLevelInfo = { readonly _tag: 'Info' };
type LogLevelWarn = { readonly _tag: 'Warn' };
type LogLevelError = { readonly _tag: 'Error' };
type LogLevel = LogLevelDebug | LogLevelInfo | LogLevelWarn | LogLevelError;

const LogLevel = taggedEnum<LogLevel>();

export interface LogContext {
  readonly tag?: string;
  readonly data?: Record<string, unknown>;
}

export interface Logger {
  debug(message: string, context?: LogContext): void;
  info(message: string, context?: LogContext): void;
  warn(message: string, context?: LogContext): void;
  error(error: TaggedError<string> | Error | string, context?: LogContext): void;
  log(level: LogLevel, message: string, context?: LogContext): void;
}

class ConsoleLogger implements Logger {
  private formatMessage(level: string, message: string, context?: LogContext): string {
    const tag = context?.tag ? `[${context.tag}]` : '';
    return `${level}${tag} ${message}`;
  }

  debug(message: string, context?: LogContext): void {
    console.debug(this.formatMessage('DEBUG', message, context), context?.data || '');
  }

  info(message: string, context?: LogContext): void {
    console.info(this.formatMessage('INFO', message, context), context?.data || '');
  }

  warn(message: string, context?: LogContext): void {
    console.warn(this.formatMessage('WARN', message, context), context?.data || '');
  }

  error(error: TaggedError<string> | Error | string, context?: LogContext): void {
    if (isTaggedError(error)) {
      console.error(this.formatMessage('ERROR', `${error._tag}: ${error.message}`, context), error, context?.data || '');
    } else if (error instanceof Error) {
      console.error(this.formatMessage('ERROR', error.message, context), error, context?.data || '');
    } else {
      console.error(this.formatMessage('ERROR', error, context), context?.data || '');
    }
  }

  log(level: LogLevel, message: string, context?: LogContext): void {
    matchTag(level, {
      Debug: () => this.debug(message, context),
      Info: () => this.info(message, context),
      Warn: () => this.warn(message, context),
      Error: () => this.error(message, context),
      _: () => {},
    });
  }
}

export const logger = new ConsoleLogger();