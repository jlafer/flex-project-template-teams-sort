import * as Flex from '@twilio/flex-ui';

function hasKey<O extends object>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj
}

export const addHook = (flex: typeof Flex, manager: Flex.Manager, feature: string, hook: any) => {
  if (!hook.componentName) {
    console.info(`Feature ${feature} declared default props hook, but is missing componentName to hook`);
    return;
  }
  const componentName = hook.componentName as string;

  if (!hook.propName) {
    console.info(`Feature ${feature} declared default props hook, but is missing propName to hook`);
    return;
  }
  const prop = hook.propName as string;

  console.info(
    `Feature ${feature} registered %c${componentName} ${prop} %cprop hook: %c${hook.defaultPropsHook.name}`,
    'font-weight:bold',
    'font-weight:normal',
    'font-weight:bold',
  );

  if (hasKey(flex, componentName)) {
    flex[componentName].defaultProps[prop] = hook.defaultPropsHook;
  }
};
