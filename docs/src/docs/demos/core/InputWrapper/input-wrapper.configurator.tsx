import React from 'react';
import { InputWrapper, Input } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';
import Configurator from '../../../../components/Configurator/Configurator';

function InputWrapperWrapper(props: React.ComponentPropsWithoutRef<typeof InputWrapper>) {
  return (
    <div style={{ maxWidth: 300, margin: 'auto' }}>
      <InputWrapper id="input-demo" {...props}>
        <Input id="input-demo" placeholder="Your email" />
      </InputWrapper>
    </div>
  );
}

const codeTemplate = (props: string) => `<InputWrapper id="input-demo"${props}>
  <Input id="input-demo" placeholder="Your email" />
</InputWrapper>`;

export function InputWrapperConfigurator() {
  const theme = useMantineTheme();
  return (
    <Configurator
      component={InputWrapperWrapper}
      codeTemplate={codeTemplate}
      previewBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
      props={[
        {
          name: 'required',
          type: 'boolean',
          initialValue: true,
          defaultValue: false,
        },
        {
          name: 'label',
          type: 'string',
          initialValue: 'Credit card information',
        },
        {
          name: 'description',
          type: 'string',
          initialValue: 'Please enter your credit card information, we need some money',
        },
        {
          name: 'error',
          type: 'string',
          initialValue: 'Your credit card expired',
        },
      ]}
    />
  );
}