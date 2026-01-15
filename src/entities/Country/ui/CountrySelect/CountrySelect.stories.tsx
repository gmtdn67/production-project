import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CountrySelect, CountrySelectProps } from './CountrySelect';
import { Country } from '../../model/types/country';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/CountrySelect/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => (
    <CountrySelect {...args} />
);

const readonlyArgs = {
    readonly: true
};

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

const defaultArgs: CountrySelectProps = {
    readonly: false,
    value: Country.Russia,
    
}

export const Default = Template.bind({});
Default.args = defaultArgs


export const ReadOnly = Template.bind({});
ReadOnly.args = readonlyArgs

export const DefaultRedesigned = Template.bind({});
DefaultRedesigned.args = defaultArgs
DefaultRedesigned.decorators = [NewDesignDecorator]

export const ReadOnlyRedesigned = Template.bind({});
ReadOnlyRedesigned.args = readonlyArgs
ReadOnlyRedesigned.decorators = [NewDesignDecorator]
