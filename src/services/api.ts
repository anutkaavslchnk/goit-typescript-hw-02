import axios from "axios";
interface Response {
    results: GalleryItem[];
    total_pages: number;
  }
  type GalleryItem = {
    id: number;
    urls: {
      small: string;
      full: string;
    };
    alt_description: string;
  };
export const fetchGallery = async (query:string,page=1, perPage=30) => {
    const response = await axios.get<Response>("https://api.unsplash.com/search/photos",{
        params:{
        query: query,
        page,
        client_id:'OJqkKZqRaSwvkUxHVowvOUbe-rO1ddkBFLjhkwnhoDQ',
        per_page:perPage,
        }
    });
    return response.data;
}