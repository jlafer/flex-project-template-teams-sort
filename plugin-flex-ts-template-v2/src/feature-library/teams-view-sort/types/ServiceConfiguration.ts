export const sortByFields = ['Activity', 'First', 'Last', 'Email', 'Username'] as const;

export type SortByField = typeof sortByFields[number];

export default interface TeamsViewSortConfig {
  enabled: boolean;
  ascending: boolean;
  sortBy: SortByField
}
