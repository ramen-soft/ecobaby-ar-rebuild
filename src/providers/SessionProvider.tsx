import { useMemo, useState, type ReactNode } from 'react';
import { SessionContext } from './SessionContext';

export interface Session {
	patientId: string;
	studies: string[];
}

export interface SessionContextValue {
	session: Session | null;
	setSession: (session: Session | null) => void;
}

export function SessionProvider({ children }: { children: ReactNode }) {
	const [session, setSession] = useState<Session | null>(null);
	const value = useMemo(
		() => ({
			session,
			setSession,
		}),
		[session],
	);

	return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}
