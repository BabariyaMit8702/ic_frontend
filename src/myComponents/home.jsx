import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export const Home = () => {
  const dispatch = useDispatch();
  const auth_info = useSelector((state) => state.the_emp.is_user);
  const navigate = useNavigate();

  useEffect(() => {
    !auth_info && navigate('/');
  }, [auth_info])
  

  return (
    <>
    <div>Home</div>
    </>
  )
}
