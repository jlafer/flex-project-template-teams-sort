import { getFeatureFlags } from '../../utils/configuration';
import TeamsViewSortConfig from './types/ServiceConfiguration';

const { enabled = false, ascending = true, sort_by = 'Last' } = (getFeatureFlags()?.features?.teams_view_sort as TeamsViewSortConfig) || {};

export const isFeatureEnabled = () => {
  return enabled;
};

export const isAscending = () => {
  return ascending;
};

export const getSortBy = () => {
  return sort_by;
};
