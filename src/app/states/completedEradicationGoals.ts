import { create } from 'zustand'

type CompletedEradicationGoalsStore = {
	refetchCompletedEradicationGoals: boolean
	setRefetchCompletedEradicationGoals: (value: boolean) => void
}

const useCompletedEradicationGoalsStore = create<CompletedEradicationGoalsStore>((set) => ({
	refetchCompletedEradicationGoals: false,
	setRefetchCompletedEradicationGoals: (value) =>
		set(() => ({ refetchCompletedEradicationGoals: value })),
}))

export default useCompletedEradicationGoalsStore