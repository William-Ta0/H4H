import {Item} from "../../types.ts";
import {useCallback, useState} from "react";


export default function useItems(numItemsToLoad:number):{
    items: Item[];
    loading: boolean;
    error: string | null;
    loadMoreItems: () => void
}{
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string|null>(null);
    const [nextPageToken, setNextPageToken] = useState<string | null>(null);


    const fetchItems = useCallback(async (pageToken?:string)=>{

        if (loading) return;

        setLoading(true);
        setError(null);

        try{

            let url = 'url end point'
            if (pageToken) {
                url += `&pageToken=${pageToken}`;
            }

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Error fetching items');
            }

            const data = await response.json();

            setItems((prevItems) => (pageToken ? [...prevItems, ...data.items] : [...data.items]));

            setNextPageToken(data.nextPageToken ?? null);

        }
        catch(e){
            setError(e instanceof Error ? e.message : 'An error occurred');
        }
        finally{
            setLoading(false);
        }

    },[loading,nextPageToken])


    const loadMoreItems = useCallback(()=>{

        if (loading) return;

        if (nextPageToken) {
            fetchItems(nextPageToken);
        }

    },[nextPageToken])


    return {items, loading, error, loadMoreItems}
}
