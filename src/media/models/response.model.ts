import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MediaEnum } from '../dto/media.dto';
import { Movie } from '../../movie/models/movie.model';

@ObjectType()
export class Response {
  @Field()
  success: Boolean;

  @Field(type => Int)
  statusCode: number;

  @Field()
  statusMessage: string;
}

@ObjectType()
export class RatingResponse extends Response {
  @Field(type => Int)
  rating: number;
}

@ObjectType()
export class WatchlistResponse extends Response {
  @Field()
    isWatchlisted: boolean;
}

@ObjectType()
export class FavoriteResponse extends Response{
  @Field()
  isFavorite: boolean;
}
