import * as Flex from '@twilio/flex-ui';
import { SupervisorWorkerState } from '@twilio/flex-ui/src/state/State.definition';

import { FlexComponent } from '../../../../types/feature-loader';
import { getSortBy, isAscending } from '../../config';

export const componentName = FlexComponent.WorkersDataTable;
export const propName = 'sortWorkers';

const useFullname = (worker: Flex.IWorker) => worker.fullName;
const extractLastName = (worker: Flex.IWorker) => {
  const names = worker.fullName.split(' ');
  const lastIdx = names.length - 1;
  return names[lastIdx];
}
const useEmail = (worker: Flex.IWorker) => worker.attributes.email;
const useName = (worker: Flex.IWorker) => worker.name;

export const defaultPropsHook = function workersDataTableSortWorkers(workerStateA: SupervisorWorkerState, workerStateB: SupervisorWorkerState) {
  const { worker: workerA } = workerStateA;
  const { worker: workerB } = workerStateB;

  const ascending = isAscending();
  const sortBy = getSortBy();
  let prop;
  switch (sortBy) {
    case 'Email':
      prop = useEmail;
      break;
    case 'First':
      prop = useFullname;
      break;
    case 'Username':
      prop = useName;
      break;
    case 'Last':
      prop = extractLastName;
      break;
  }
  const workerAValue = prop(workerA) || "";
  const workerBValue = prop(workerB) || "";
  const order = ascending
    ? workerBValue.toLowerCase().localeCompare(workerAValue.toLowerCase())
    : workerAValue.toLowerCase().localeCompare(workerBValue.toLowerCase());
  return order;
}
