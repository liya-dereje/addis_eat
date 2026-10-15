import propTypes from 'prop-types';
function Dish({ name, price,category,spicy,currency="ETB"}) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "12px", margin: "8px 0", borderRadius: "6px" }}>
      <div>
        <span style={{ fontsize: "18px", fontWeight: "bold" ,color: "black" }}>{category}</span>
        <h3 style={{margin:"4px 0"}}>{name}
        {spicy===true && (<span style={{ color: "red", fontWeight: "bold" }}>Spicy</span>)}
        </h3>
      </div>
      <p style={{fontweight:"bold"}}>{price} {currency}</p>
    </div>
  );
}
dish.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  category: propTypes.string.isRequired,
  spicy: propTypes.bool.isRequired,
  currency: propTypes.string
};


export default Dish;
