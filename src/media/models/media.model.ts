import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MediaEnum } from '../dto/media.dto';
import { Movie } from '../../movie/models/movie.model';

@ObjectType()
export class Media {
  @Field(type => [Movie])
  media: Movie[];

  @Field()
  mediaType?: MediaEnum;
}