import { Movie } from './Movie'
import { Post } from './Post'
import { Quote } from './Quote'
  
interface EntityTypes  {
  Movie: Movie
    Post: Post
    Quote: Quote
}
  
export { EntityTypes, Movie, Post, Quote }