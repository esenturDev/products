import scss from './Layout.module.scss';
import Header from './header/Header';

export const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header/>
      <main>
        
      </main>
    </div>
  )
}
