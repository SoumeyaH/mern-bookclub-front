import  { useBookClubContext }  from "../../contexts/BookClubContext"

const BookClubFormRequiredSection = () => {
  
  const {
    title,
    setTitle,
    description,
    setDescription,
    isPublic,
    setIsPublic
  } =  useBookClubContext()


  return (

       <div>
            <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
            />

            <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="description"
            />

            <div>
                <input
                value="public"
                onChange={(e) => setIsPublic(e.target.value)}
                type="radio"
                name="isPublic"
                checked={isPublic === "public"}
                />

                <label htmlFor="public">public</label>

                <input
                value="private"
                onChange={(e) => setIsPublic(e.target.value)}
                type="radio"
                name="isPublic"
                />

                <label htmlFor="private">private</label>
            </div>
        </div>
  )
}

export default BookClubFormRequiredSection 