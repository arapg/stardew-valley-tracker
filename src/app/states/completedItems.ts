import { create } from 'zustand'

type CompletedItemsStore = {
	refetchCompletedItems: boolean
	setRefetchCompletedItems: (value: boolean) => void
}

const useCompletedItemsStore = create<CompletedItemsStore>((set) => ({
	refetchCompletedItems: false,
	setRefetchCompletedItems: (value) =>
		set(() => ({ refetchCompletedItems: value })),
}))

export default useCompletedItemsStore
