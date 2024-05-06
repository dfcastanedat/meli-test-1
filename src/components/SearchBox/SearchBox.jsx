import { useNavigate } from 'react-router-dom';
import './SearchBox.scss';

export default function SearchBox() {
  const navigate = useNavigate();
  const onFormSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.target[0].value;
    navigate(`/items?${searchQuery}`);
  }

  return (
    <div className="search-box">
      <div className='search-box__wrapper'>
        <img src='/src/assets/Logo_ML@2x.png' alt='Mercado Libre' className='search-box__logo'></img>
        <form className='search-box__form' onSubmit={onFormSubmit}>
          <input className='search-box__input' type="text" placeholder="Nunca dejes de buscar" />
          <button className='search-box__button' type="submit" aria-label='Search'>
            <img src="/src/assets/ic_Search@2x.png" alt="" className='search-box__search-icon'/>
          </button>
        </form>
      </div>
    </div>
  )
}
