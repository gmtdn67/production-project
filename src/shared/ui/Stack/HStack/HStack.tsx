import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>; // Omit позволяет из составного типа исключить какое-либо поле

export const HStack = (props: HStackProps) => (
    <Flex {...props} direction="row" />
);
