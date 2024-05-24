import create from 'zustand';

type PageState = {
    page: string;
    setPage: (page: string) => void;
};

const usePageStore = create<PageState>((set) => ({
    page: 'bundles',
    setPage: (page) => set({ page }),
}));

export default usePageStore;