import menu from './menu';
import { menuData } from './data';
function app(){
  const currentCategory="Main";
  return(
    <div style={{width:"400px",margin:"0 auto"}}>
      <header style={{textAlign:"center",margin:"20px 0"}}>Addis Eat</header>
      <h1>Menu</h1>
      <main>
        <h2 style={{margin:"10px 0"}}>{currentCategory} Dishes</h2>
      <menu dish={menuData} categoryFilter={currentCategory}/>
      </main>
    </div>
  );
}
export default app;