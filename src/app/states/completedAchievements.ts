import { create } from 'zustand'

type CompletedAchievementsStore = {
	refetchCompletedAchievements: boolean
	setRefetchCompletedAchievements: (value: boolean) => void
}

const useCompletedAchievementsStore = create<CompletedAchievementsStore>((set) => ({
	refetchCompletedAchievements: false,
	setRefetchCompletedAchievements: (value) =>
		set(() => ({ refetchCompletedAchievements: value })),
}))

export default useCompletedAchievementsStore