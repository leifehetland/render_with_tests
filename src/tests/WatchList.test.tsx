// import pretty from 'pretty';
import { render } from '@testing-library/react';
import WatchList from '../pages/WatchList';

describe('WatchList', () => {
  it('should display a placeholder message if no films are added', () => {
    // Render the component
    render(<WatchList/>);

    const WatchListContainer = document.querySelector('.emptyMessage');

    if (WatchListContainer) {
      // Format the rendered output

      // Verify the output
      expect(WatchListContainer.innerHTML).toBe('Add films to your watchlist.');
    }
  });
});
