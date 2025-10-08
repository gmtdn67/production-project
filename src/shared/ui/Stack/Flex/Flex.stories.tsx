import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>forth</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>forth</div>
        </>
    ),
    gap: '4',
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>forth</div>
        </>
    ),
    gap: '8',
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>forth</div>
        </>
    ),
    gap: '16',
};

export const Column = Template.bind({});
Column.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>forth</div>
        </>
    ),
    direction: 'column',
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>forth</div>
        </>
    ),
    direction: 'column',
    gap: '4',
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>forth</div>
        </>
    ),
    direction: 'column',
    gap: '8',
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>forth</div>
        </>
    ),
    direction: 'column',
    gap: '16',
};

export const ColumnAlignCenter = Template.bind({});
ColumnAlignCenter.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>forth</div>
        </>
    ),
    direction: 'column',
    align: 'center',
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>forth</div>
        </>
    ),
    direction: 'column',
    align: 'end',
};
