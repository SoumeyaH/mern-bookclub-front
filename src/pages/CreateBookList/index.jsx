import BookListContextProvider from "../../contexts/BookListContext"

import CreateBookList from "../../components/CreateBookList"





const CreateBookListPage = () => {
    
  return (
    <BookListContextProvider>  
        <div>
            <CreateBookList /> 
        </div>
    </BookListContextProvider>
  )
}

export default CreateBookListPage