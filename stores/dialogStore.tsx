import { create } from "zustand";

interface DialogStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useDialog = create<DialogStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
