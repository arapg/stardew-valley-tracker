import { create } from 'zustand';

type UserIDStore = {
	userID: string | null;
	setUserID: (id: string | null) => void;
};

const useUserIDStore = create<UserIDStore>((set) => ({
	userID: null,
	setUserID: (id) => set(() => ({ userID: id })),
}));

export default useUserIDStore;