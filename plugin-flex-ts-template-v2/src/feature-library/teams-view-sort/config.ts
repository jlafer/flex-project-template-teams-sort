import { getFeatureFlags } from '../../utils/configuration';
import TeamsViewSortConfig from './types/ServiceConfiguration';

const { enabled = false } = (getFeatureFlags()?.features?.teams_view_sort as TeamsViewSortConfig) || {};

export const isFeatureEnabled = () => {
  return enabled;
};
