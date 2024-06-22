import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import data from "../../dummyData";

const url = 'https://gnews.io/api/v4/top-headlines?category='

const initialState = {
    general: [],
    world: [],
    nation: [] ,
    technology: [], 
    entertainment: [],
    sports: [],
    health: [],
    favorite: {articles: []},
    keywordNews: [],
}
//const initialState = data

export const getNewsArticles = createAsyncThunk('news/getNewsArticles', async (category,thunkAPI) => {
    let add = url+category+'&apikey='+import.meta.env.VITE_REACT_GNEWS_API_KEY
    try {
        const res = await axios.get(add)
        // console.log(res.data )
        return [category,res.data]
    } catch (error) {
        return thunkAPI.rejectWithValue('Problem with initial fetching of data');
    }
});

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        addFav: (state,{payload}) => {
            console.log("hai")
            let cat = state[payload.cat]
            let article = cat?.articles?.[parseInt(payload.artId)]
            state[payload.cat].articles[parseInt(payload.artId)].isFav = true;
            article.isFav = true
            article.categ = payload.cat
            state.favorite.articles = [article,...state.favorite.articles]
            localStorage.setItem("favorite",JSON.stringify(state.favorite.articles))
        },
        removeFav: (state,action) => {
            
            let art = state.favorite.articles.find(news => news.url === action.payload.url)
            const newList = state.favorite.articles.filter(news => news.url !== action.payload.url)
            localStorage.setItem("favorite",newList)
            state.favorite.articles = newList
            let index = state[art.categ].articles.findIndex(news => news.url === action.payload.url)
            const {isFav,categ,...others} = state?.[art.categ]?.articles?.[index]
            state[art.categ].articles[index] = others
        },
        fetchFav: (state) => {
            let x = localStorage.getItem("favorite")
            if(x) {
                let obj = JSON.parse(x)
                state.favorite.articles = obj || []
            }
        } 
    },
    extraReducers: (builder) => {
        builder
          .addCase(getNewsArticles.pending, (state) => {
            // state.isLoading = true;
        })
          .addCase(getNewsArticles.fulfilled, (state, action) => {
            // console.log(action);
            // state.isLoading = false;
            state[action.payload[0]] = action.payload[1];
        })
          .addCase(getNewsArticles.rejected, (state, action) => {
            console.log(action);
            // state.isLoading = false;
        });
    },
})

export const {addFav,removeFav,fetchFav} = newsSlice.actions

export default newsSlice.reducer;