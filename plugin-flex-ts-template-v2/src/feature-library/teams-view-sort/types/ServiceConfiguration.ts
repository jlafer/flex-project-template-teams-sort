export type SortByFieldName = 'First' | 'Last' | 'Email' | 'Username';

export default interface TeamsViewSortConfig {
  enabled: boolean;
  sort_by: SortByFieldName
}
