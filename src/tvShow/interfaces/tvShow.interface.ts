import { SeasonInterface } from './season.interface';
import { Movie } from '../../movie/models/movie.model';

export class TvShowInterface extends Movie {
    seasons: SeasonInterface[];
}