import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('test render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('incremet', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const incrBtn = screen.getByTestId('increment-btn');
        fireEvent.click(incrBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const decrBtn = screen.getByTestId('decrement-btn');
        fireEvent.click(decrBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
