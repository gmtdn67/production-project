import { useCallback, useState, useMemo } from 'react';

interface useHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [boolean, useHoverBind]

export const useHover = () => {
    const [isHover, setIsHover] = useState(false);
    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(
        () => [isHover, { onMouseLeave, onMouseEnter }],
        [isHover, onMouseLeave, onMouseEnter],
    );
};
