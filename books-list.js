import { useState, useEffect } from "react"
import {
        Button,
        Paper,
        Table,
        TableBody,
        TableCell,
        TableContainer,
        TableHead,
        TableRow,
        Modal,
        Card,
        CardContent,
        CardActions,
        Typography,
        TablePagination,
} from "@mui/material"
import classes from "./styles.module.css"

export const BooksList = () => {

    const [books, setBook] = useState([]);

    const fetchBooks = async () => {
        const { books } = await BackendApi.book.getAllBooks()
        console.log(books)
        setBooks(books)
    }

    useEffect(() => {
        fetchBooks().catch(console.error)
    }, [])

    return (
        <>
           <div className={'${classes.pageHeader} ${classes.mb2}'}>
            <Typography variant="h5">BookList</Typography>
           </div>
        </>
    )
}