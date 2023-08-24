import { useEffect, useState, ChangeEvent } from 'react';
import { FormControl, Label, Select, Option, Checkbox } from '@twilio-paste/core';
import { Template, templates } from '@twilio/flex-ui';

import { StringTemplates } from '../../../admin-ui/flex-hooks/strings';
import { sortByFields } from '../../types/ServiceConfiguration';

interface OwnProps {
  feature: string;
  initialConfig: any;
  setModifiedConfig: (featureName: string, newConfig: any) => void;
  setAllowSave: (featureName: string, allowSave: boolean) => void;
}

const TeamsViewSortAdmin = (props: OwnProps) => {
  const [sortBy, setSortBy] = useState(props.initialConfig?.sortBy ?? '');
  const [ascending, setAscending] = useState(props.initialConfig?.ascending ?? false);
  const [changeMade, setChangeMade] = useState(false);

  const setAllowSave = () => {
    const allowSave = changeMade;
    props.setAllowSave(props.feature, allowSave);
  };

  const handleSortByChanged = async (e: ChangeEvent<HTMLSelectElement>) => {
    setChangeMade(true);
    setSortBy(e.target.value);
  };

  const handleAscendingToggled = async (e: ChangeEvent<HTMLInputElement>) => {
    setChangeMade(true);
    setAscending(e.target.checked)
  };

  useEffect(() => {
    setAllowSave();
    props.setModifiedConfig(props.feature, {
      ...props.initialConfig,
      sortBy, ascending
    });
  }, [sortBy, ascending]);

  return (
    <>
      <FormControl key="sortBy-control">
        <Label htmlFor="sortBy" required>
          SortBy
        </Label>
        <Select
          id="sortBy"
          name="sortBy"
          value={sortBy}
          onChange={handleSortByChanged}
          required
        >
          <Option value="" disabled>
            Sort by...
          </Option>
          {[...sortByFields].map((field) => {
            return <Option key={field} value={field}>{field}</Option>;
          })}
        </Select>
      </FormControl>
      <FormControl key="ascending-control">
        <Label htmlFor="ascending" required>
          Ascending?
        </Label>
        <Checkbox checked={ascending} onChange={handleAscendingToggled} name="ascending" >
          {ascending ? (
            <Template source={templates[StringTemplates.ENABLED]} />
          ) : (
            <Template source={templates[StringTemplates.DISABLED]} />
          )}
        </Checkbox>
      </FormControl>
    </>
  );
};

export default TeamsViewSortAdmin;
