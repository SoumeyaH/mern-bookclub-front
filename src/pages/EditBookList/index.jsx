import { useLocation } from 'react-router-dom'


const EditBookList = () => {
  const location = useLocation()
  const { bookList } = location.state

  console.log(bookList)

  return (
    <>
    <div>EditBookList</div>
    </>
  )
}

export default EditBookList

