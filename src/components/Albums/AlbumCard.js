import React from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from "react-redux";




const AlbumCard = ({album}) => {
    
  const person = useSelector((state) => {
      const idx = state.persons.list.findIndex(p => p.id === album.personId)
      if (idx === -1) return  { fName: "No",
                                 lName: "name"  }
        return state.persons.list[idx]
  })

  const photo = useSelector((state) => {
      const idx = state.photos.list.findIndex(ph => ph.albumId = album.id )
      if(idx === -1) return null 
      return state.photos.list[idx] 
  })
   
   

    let history = useHistory()

    const clickHandler = event => {
        event.preventDefault()
        history.push(`/albums/${album.id}`)
    }
    const renderImage = () => {
        console.log(photo);
      if(!photo) {
          return (<div>No Images</div>)
      }
      return (<img src={photo.src} alt={album.title}/>)
    }

    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="card cur-pointer" onClick={clickHandler}>
                {renderImage()}
                <div className="card-body">
                    <h3 className="card-title">{album.title}</h3>
                    <p className="card-text">{person.lName} {person.fName[0]}.</p>
                </div>
            </div>
        </div>
    )
}



export default AlbumCard
