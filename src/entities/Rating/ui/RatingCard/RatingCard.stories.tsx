import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RatingCard } from './RatingCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
    <RatingCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    title: 'Оцените статью',
    hasFeedback: true,
};

export const PrimaryRedesigned = Template.bind({});
Primary.args = {
    title: 'Оцените статью',
    hasFeedback: true,
};
PrimaryRedesigned.decorators = [NewDesignDecorator]
