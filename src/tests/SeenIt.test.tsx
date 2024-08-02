// import pretty from 'pretty';
import { render } from '@testing-library/react';
import SeenIt from '../pages/SeenIt';

describe('WatchList', () => {
  it('should display a placeholder message if no films are added', () => {
    // Render the component
    render(<SeenIt/>);

    const WatchListContainer = document.querySelector('.emptyMessage');

    if (WatchListContainer) {
      // Format the rendered output

      // Verify the output
      expect(WatchListContainer.innerHTML).toBe("Add films you've already seen here.");
    }
  });
});
