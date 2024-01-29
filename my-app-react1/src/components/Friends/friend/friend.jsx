import stl from './friend.module.css'

const Friend = (props) => {

   return <div>
      <div className={stl.friend}>
         <div className={stl.img}><img src={props.img} alt="" /></div>
         <div className={stl.name}>{props.name}</div>
      </div>
   </div>
}
export default Friend;