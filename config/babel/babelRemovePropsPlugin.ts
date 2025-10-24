import { PluginItem } from '@babel/core';

export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const forbidden = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(current) {
                        const nodename = current.node.name;

                        if (forbidden.includes(nodename)) { // nodeName === 'data-testid'
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
