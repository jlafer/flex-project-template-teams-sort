export const sortByFields = ['First', 'Last', 'Email', 'Username'] as const;

export type SortByField = typeof sortByFields[number];

export default interface TeamsViewSortConfig {
  enabled: boolean;
  ascending: boolean;
  sort_by: SortByField
}
