import { useMemo, useState, type ReactNode } from 'react';
import { SessionContext } from './SessionContext';

type StudyType = '3d' | '4d';

export interface Patient {
	id: string;
	name: string;
}

export interface Study {
	thumbnail?: string;
	name: string;
	date: string;
	type: StudyType;
	model?: string;
}

export interface Session {
	patientId: string;
	patient: Patient;
	studies: Study[];
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
