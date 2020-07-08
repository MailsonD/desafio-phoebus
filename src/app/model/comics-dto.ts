import Comic from './comic';

export default interface ComicsDTO {
    results?: Comic[];
    count?: number;
    total?: number;
}
