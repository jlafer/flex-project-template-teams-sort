import * as Flex from '@twilio/flex-ui';

import { FlexComponent } from '../../../../types/feature-loader';

export const componentName = FlexComponent.WorkersDataTable;
export const propName = 'sortWorkers';

export const defaultPropsHook = function workersDataTableSortWorkers(workerA: Flex.IWorker, workerB: Flex.IWorker) {
  let isAscending = false;

  const workerAName = workerA.fullName || workerA.name || "";
  const workerBName = workerB.fullName || workerB.name || "";

  return isAscending
    ? workerAName.toLowerCase().localeCompare(workerBName.toLowerCase())
    : workerBName.toLowerCase().localeCompare(workerAName.toLowerCase());
}
