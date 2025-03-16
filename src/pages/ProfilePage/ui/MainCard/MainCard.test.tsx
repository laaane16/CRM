import { screen } from '@testing-library/react';

import MainCard from './MainCard';
import { componentRender } from '../../../../shared/lib';

describe('MainCard.test', () => {
  test('', () => {
    componentRender(<MainCard canEdit={true} isLoading={false} />);

    expect(screen.getByTestId('main-card')).toBeInTheDocument();
  });
});
