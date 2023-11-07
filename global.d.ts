/// <reference types="@platformatic/db" />
import { EntityHooks } from '@platformatic/sql-mapper'
import { EntityTypes, Movie,Post,Quote } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Movie' | 'Post' | 'Quote'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

declare module '@platformatic/sql-mapper' {
  interface Entities {
    movie: Entity<Movie>,
    post: Entity<Post>,
    quote: Entity<Quote>,
  }
}

declare module '@platformatic/types' {
  interface PlatformaticApp {
    addEntityHooks(entityName: 'movie', hooks: EntityHooks<Movie>): any
    addEntityHooks(entityName: 'post', hooks: EntityHooks<Post>): any
    addEntityHooks(entityName: 'quote', hooks: EntityHooks<Quote>): any
  }
}
