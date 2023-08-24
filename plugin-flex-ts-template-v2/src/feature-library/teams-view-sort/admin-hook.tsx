import TeamsViewSortAdmin from './custom-components/TeamsViewSortAdmin/TeamsViewSortAdmin';

export const adminHook = function addTeamsViewSortAdmin(payload: any) {
  if (payload.feature !== 'teams_view_sort') return;
  payload.component = <TeamsViewSortAdmin {...payload} />;
  payload.hideDefaultComponents = true;
};
