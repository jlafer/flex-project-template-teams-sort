import { getFeatureFlags } from '../../utils/configuration';
import TeamsViewSortConfig from './types/ServiceConfiguration';

const { enabled = false, sort_by = 'First' } = (getFeatureFlags()?.features?.teams_view_sort as TeamsViewSortConfig) || {};

export const isFeatureEnabled = () => {
  return enabled;
};

export const getSortBy = () => {
  return sort_by;
};
