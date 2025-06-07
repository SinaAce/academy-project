import { NavLink } from 'react-router-dom'

const PanelSideMenu = () => {
  return (
    <div className='border border-red-500 h-[660px] w-[290px] flex flex-col whitetext gap-3'>
        <NavLink to='/panel'>داشبورد</NavLink>
        <NavLink to='/panel/profile'>پروفایل</NavLink>
        <NavLink to='/panel/favoriteCourses'>دوره های مورد علاقه</NavLink>
    </div>
  )
}

export default PanelSideMenu