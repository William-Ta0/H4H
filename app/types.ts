
export interface Item {
    _id: string;
    name: string;

}

export interface UseItemsResult {
    items: Item[];
    loading: boolean;
    error: string | null;
}
