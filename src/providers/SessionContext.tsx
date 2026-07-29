import { createContext } from 'react';
import type { SessionContextValue } from './SessionProvider';

export const SessionContext = createContext<SessionContextValue | null>(null);
