import { memo, ReactElement } from 'react';
import { FeatureFlags } from "../../../types/featureFlags";
import { getFeatureFlag } from '../setGetFeatures';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = memo((props: ToggleFeaturesProps) => {
    // eslint-disable-next-line react/prop-types
    const { feature, on, off } = props;
    
    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
});