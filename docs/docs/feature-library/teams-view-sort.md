---
sidebar_label: teams-view-sort
title: teams-view-sort
---

# Overview
 In Flex, Supervisors can monitory agent activity in the [Teams View](https://www.twilio.com/docs/flex/end-user-guide/insights/monitor-agent-activity). The Teams View displays the agents' status and the tasks they are working on. Supervisors can also listen to live calls and view the chat/messaging conversations. 

By default, the workers are listed in no particular order. However, the workers can be sorted using an alternative sort-sequence by setting the `sortWorkers` default property on the [WorkersDataTable](https://www.twilio.com/docs/flex/developer/ui/components#add-columns-to-workersdatatable). This feature allows a Flex developer to configure such alternative sorting.

# How does it work?

The `WorkersDataTable` of the Teams View takes a `defaultProps` key of `sortWorkers`. If set, the value must be a callback function with the following signature:
```code
(workerStateA: SupervisorWorkerState, workerStateB: SupervisorWorkerState) => number
```
The function should compare the two [SupervisorWorkerState](https://www.npmjs.com/package/@twilio/flex-ui?activeTab=code) objects passed in and return a positive number if Worker A should appear before Worker B, a negative number if Worker A should appear before Worker B, and a zero if it doesn't matter.

The `sortWorkers` default prop should be set at plugin initialization.

This feature shows how to implement the custom sorting logic. It also allows the developer to configure the Worker property or Worker Attribute to be used in the comparison by the callback function.

# Setup

This feature can be enabled via the `flex-config` attributes. Just set the teams_view_sort `enabled` flag to `true`, set the `sortBy` field and choose whether an `ascending` (or descending) sort-order is desired.

In setting the field for sorting the workers in the WorkersDataTable, you can choose from the following options: `Activity`, `First`, `Last`, `Username`, `Email`.

The final configuration might look like this:

```json
  "teams_view_enhancements": {
    "enabled": true,
    "sortBy": "Email",
    "ascending": true
  }
```
