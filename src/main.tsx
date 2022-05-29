import { createRoot } from 'react-dom/client';

import { store } from '@/store';
import Index from '@/index';

const root = createRoot(document.getElementById('app') as Element);

root.render(<Index store={store} />);
