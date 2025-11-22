import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>; // Omit позволяет из составного типа исключить какое-либо поле

export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;

    return <Flex {...props} direction="column" align={align} />;
};
